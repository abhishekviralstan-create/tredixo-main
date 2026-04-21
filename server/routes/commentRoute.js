import express from "express";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controller/commentController.js";
import { verifyUserMiddleware } from "../middleware/verifyUserMiddleware.js";

const commentRouter = express.Router();

commentRouter.post("/create-comment", verifyUserMiddleware, createComment);
commentRouter.get("/get-comments", getComments);
commentRouter.delete("/delete-comment/:commentid", verifyUserMiddleware, deleteComment);

export default commentRouter;