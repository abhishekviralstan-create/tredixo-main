import jwt from 'jsonwebtoken';
import errorHandler from '../utils/errorHandler.js';
import asyncHandler from 'express-async-handler';
import userModel from '../model/userModel.js';

export const verifyUserMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token =
        authHeader && authHeader.startsWith('Bearer ')
            ? authHeader.split(' ')[1]
            : req.cookies?.accessToken;

    if (!token) {
        return next(errorHandler('Unauthorized Access, Token not found!', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).select('-password');

    if (!user) {
        return next(errorHandler('User not found!', 404));
    }

    req.user = user;
    next();
});

export const verifyAdminMiddleware = asyncHandler(async (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return next(errorHandler('Admin access only!', 403));
    }
    next();
});