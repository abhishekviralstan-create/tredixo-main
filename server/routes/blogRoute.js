import express from "express";
import {
  postBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
} from "../controller/blogController.js";
import {
  verifyUserMiddleware,
  verifyAdminMiddleware,
} from "../middleware/verifyUserMiddleware.js";

const blogRouter = express.Router();

blogRouter.get("/get-all-blogs", getAllBlogs);

blogRouter.post(
  "/post-blog",
  verifyUserMiddleware,
  verifyAdminMiddleware,
  postBlog
);

blogRouter.delete(
  "/delete-blog/:blogid",
  verifyUserMiddleware,
  verifyAdminMiddleware,
  deleteBlog
);

blogRouter.put(
  "/update-blog/:blogid",
  verifyUserMiddleware,
  verifyAdminMiddleware,
  updateBlog
);

export default blogRouter;