import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
  updateUser,
  googleOAuth,
  deleteUser,
  signOutUser,
  userResetPassword,
  getComment,
  updateUserAccess,
} from "../controller/userController.js";
import { verifyUserMiddleware } from "../middleware/verifyUserMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/updateuser/:id", verifyUserMiddleware, updateUser);
userRouter.post("/googleuser", googleOAuth);
userRouter.delete("/deleteuser/:id", verifyUserMiddleware, deleteUser);
userRouter.post("/signoutuser", signOutUser);
userRouter.get("/getusers", verifyUserMiddleware, getUser);
userRouter.patch("/update-access/:userId", verifyUserMiddleware, updateUserAccess);
userRouter.post("/reset-password", userResetPassword);
userRouter.get("/get-user-comment/:commentUserId", getComment);

export default userRouter;