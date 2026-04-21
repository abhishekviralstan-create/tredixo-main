import userModel from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";

// Nodemailer Transport
const transport = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// helper
const sanitizeUser = (userDoc) => {
  const { password, ...rest } = userDoc._doc;
  return rest;
};

// GET REQ: Fetching Users (admin only)
export const getUser = asyncHandler(async (req, res, next) => {
  try {
    const loggedInUser = await userModel.findById(req.user.id);

    if (!loggedInUser || !loggedInUser.isAdmin) {
      return next(errorHandler("Only admin can access users list", 403));
    }

    const countUser = await userModel.countDocuments();

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const sortUser = req.query.sortUser === "asc" ? 1 : -1;
    const skipUser = (page - 1) * limit;

    const userInfo = await userModel
      .find()
      .skip(skipUser)
      .sort({ updatedAt: sortUser })
      .limit(limit);

    const currentDate = new Date();
    const oneMonthAgo = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      currentDate.getDate()
    );

    const lastMonthUsers = await userModel.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    const userWithoutPassword = userInfo.map((user) => sanitizeUser(user));

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      lastMonthUsers,
      user: userWithoutPassword,
      countUser,
    });
  } catch (error) {
    return next(errorHandler("An unexpected error occurred", 400));
  }
});

// POST REQ: Registering User
export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  const userExist = await userModel.findOne({ email });

  if (userExist) {
    return next(errorHandler("User already exists!", 400));
  }

  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, genSalt);

  const registerUserInfo = new userModel({
    username,
    email,
    password: hashedPassword,
    isApproved: false,
    accessLevel: "write_only",
  });

  try {
    await registerUserInfo.save();

    return res.status(200).json({
      success: true,
      message: "User has been registered successfully",
      user: sanitizeUser(registerUserInfo),
    });
  } catch (error) {
    console.log(error);
    return next(
      errorHandler("An unexpected error occurred while registering user!", 400)
    );
  }
});

// POST REQ: Login User
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const existUser = await userModel.findOne({ email });

  if (!existUser) {
    return next(errorHandler("User not found", 401));
  }

  const matchPassword = await bcrypt.compare(password, existUser.password);

  if (!matchPassword) {
    return next(errorHandler("Invalid password", 401));
  }

  const createToken = JWT.sign({ id: existUser._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  const updateUser = await userModel.findByIdAndUpdate(
    existUser._id,
    { token: createToken },
    { new: true }
  );

  return res
    .status(200)
    .cookie("accessToken", createToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "Login successful",
      user: sanitizeUser(updateUser),
    });
});

// PUT REQ: Update User
export const updateUser = asyncHandler(async (req, res, next) => {
  const paramsId = req.params.id;
  const userId = req.user.id;

  if (paramsId !== userId) {
    return next(errorHandler("Unauthorized user!", 401));
  }

  let userInfo = {
    username: req.body.username,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
  };

  try {
    if (req.body.password) {
      let genSalt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(req.body.password, genSalt);
      userInfo.password = hashedPassword;
    }

    const updateUserInfo = await userModel.findByIdAndUpdate(
      paramsId,
      { $set: userInfo },
      { new: true }
    );

    return res.status(200).json({
      message: "User has been updated",
      success: true,
      user: sanitizeUser(updateUserInfo),
    });
  } catch (error) {
    return next(errorHandler("An unexpected error occurred while updating data", 500));
  }
});

// PATCH REQ: Admin can approve / change access
export const updateUserAccess = asyncHandler(async (req, res, next) => {
  try {
    const adminUser = await userModel.findById(req.user.id);

    if (!adminUser || !adminUser.isAdmin) {
      return next(errorHandler("Only admin can update user access", 403));
    }

    const { userId } = req.params;
    const { isApproved, accessLevel } = req.body;

    const allowedAccess = ["full_access", "blogs_access", "write_only"];

    const updatePayload = {};

    if (typeof isApproved === "boolean") {
      updatePayload.isApproved = isApproved;
    }

    if (accessLevel !== undefined) {
      if (!allowedAccess.includes(accessLevel)) {
        return next(errorHandler("Invalid access level", 400));
      }
      updatePayload.accessLevel = accessLevel;
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $set: updatePayload },
      { new: true }
    );

    if (!updatedUser) {
      return next(errorHandler("User not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "User access updated successfully",
      user: sanitizeUser(updatedUser),
    });
  } catch (error) {
    return next(errorHandler(error.message || "Failed to update user access", 500));
  }
});

// POST req for Google firebase login
export const googleOAuth = asyncHandler(async (req, res, next) => {
  const { username, email, profilePicture } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    const createToken = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const updatedUser = await userModel.findByIdAndUpdate(
      user._id,
      { token: createToken },
      { new: true }
    );

    return res
      .status(200)
      .cookie("accessToken", createToken, { httpOnly: true, secure: false })
      .json({
        success: true,
        message: "User has been successfully logged in",
        user: sanitizeUser(updatedUser),
      });
  }

  const generatePassword =
    100 * Math.random().toString().replace(".", "") +
    process.env.JWT_SECRET.slice(0, 8);

  try {
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(generatePassword, genSalt);
    const modifiedName = username.toLowerCase().replace(/\s/g, "");

    const loginGoogleUser = new userModel({
      username: modifiedName,
      email,
      profilePicture,
      password: hashedPassword,
      isApproved: false,
      accessLevel: "write_only",
    });

    await loginGoogleUser.save();

    const createToken = JWT.sign(
      { id: loginGoogleUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    const updateUser = await userModel.findByIdAndUpdate(
      loginGoogleUser._id,
      { token: createToken },
      { new: true }
    );

    return res
      .status(200)
      .cookie("accessToken", createToken, { httpOnly: true, secure: false })
      .json({
        success: true,
        message: "User has been logged in",
        user: sanitizeUser(updateUser),
      });
  } catch (error) {
    console.log(error);
    return next(errorHandler(error.message || "Google login failed", 500));
  }
});

// DELETE Api for deleting user
export const deleteUser = asyncHandler(async (req, res, next) => {
  const actor = await userModel.findById(req.user.id);
  const { id } = req.params;

  if (!actor) {
    return next(errorHandler("Unauthorized user!", 401));
  }

  if (!actor.isAdmin && actor._id.toString() !== id) {
    return next(errorHandler("Unauthorized user!", 401));
  }

  try {
    await userModel.findByIdAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      message: "User has been deleted",
    });
  } catch (error) {
    return next(
      errorHandler("An unexpected error occurred while deleting user!", 400)
    );
  }
});

// POST req for user SignOut
export const signOutUser = asyncHandler(async (req, res, next) => {
  try {
    res.clearCookie("accessToken").json({
      success: true,
      message: "User has been signedOut",
    });
  } catch (error) {
    return next(errorHandler(error.message || "Signout failed", 500));
  }
});

// POST req for reset the password of user
export const userResetPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return next(errorHandler("Oops, Email is not found!", 401));
    }

    const generateToken = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    const setPasswordToken = await userModel.findByIdAndUpdate(
      { _id: user._id },
      { resetPasswordToken: generateToken },
      { new: true }
    );

    if (setPasswordToken) {
      return res.status(200).json({
        success: true,
        message: "Reset password token generated successfully",
      });
    }
  } catch (error) {
    return next(errorHandler("Something went wrong while resetting password", 500));
  }
});

// GET API: public route
export const getComment = asyncHandler(async (req, res, next) => {
  const { commentUserId } = req.params;

  try {
    const comment = await userModel.findById({ _id: commentUserId });

    if (!comment) {
      return next(errorHandler("Comment not found!", 404));
    }

    return res.status(200).json(sanitizeUser(comment));
  } catch (error) {
    return next(errorHandler("Failed to fetch comment user", 500));
  }
});