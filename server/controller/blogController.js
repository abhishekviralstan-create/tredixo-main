import errorHandler from "../utils/errorHandler.js";
import asyncHandler from 'express-async-handler';
import blogModel from "../model/blogModel.js";

// Get all blogs
export const getAllBlogs = asyncHandler(async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limitBlogs = parseInt(req.query.limit) || 8;
    const sortBlog = req.query.sort === 'asc' ? 1 : -1;
    const skipBlogs = (page - 1) * limitBlogs;

    const filterBlogs = {
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { blogCategory: req.query.category }),
        ...(req.query.slug && { slug: req.query.slug }),
        ...(req.query.blogId && { _id: req.query.blogId }),
        ...(req.query.searchBlog && {
            $or: [
                { blogTitle: { $regex: req.query.searchBlog, $options: 'i' } },
                { blogBody: { $regex: req.query.searchBlog, $options: 'i' } }
            ]
        })
    };

    try {
        const blogs = await blogModel
            .find(filterBlogs)
            .skip(skipBlogs)
            .sort({ updatedAt: sortBlog })
            .limit(limitBlogs);

        const countBlogs = await blogModel.countDocuments(filterBlogs);

        const currentDate = new Date();
        const oneMonthAgo = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            currentDate.getDate()
        );

        const lastMonthBlogs = await blogModel.countDocuments({
            createdAt: { $gte: oneMonthAgo }
        });

        return res.status(200).json({
            success: true,
            message: 'Blogs have been fetched',
            lastMonthBlogs,
            countBlogs,
            blogs
        });
    } catch (error) {
        return next(errorHandler(error.message || 'Failed to fetch blogs', 400));
    }
});

// Post blog
export const postBlog = asyncHandler(async (req, res, next) => {
    const { blogTitle, blogCategory, blogImgFile, blogBody } = req.body;

    if (!blogTitle || !blogCategory || !blogBody) {
        return next(errorHandler('Please fill all required fields!', 400));
    }

    const slug = blogTitle.trim().toLowerCase().replace(/\s+/g, '-');

    const addBlogPost = new blogModel({
        blogTitle,
        blogCategory,
        blogImgFile,
        blogBody,
        userId: req.user._id,
        slug
    });

    try {
        await addBlogPost.save();
        return res.status(200).json({
            success: true,
            message: 'Blog has been created',
            slug,
            blog: addBlogPost
        });
    } catch (error) {
        return next(errorHandler(error.message || 'Blog creation failed', 500));
    }
});

// Delete blog
export const deleteBlog = asyncHandler(async (req, res, next) => {
    const { blogid } = req.params;

    try {
        const blog = await blogModel.findById(blogid);

        if (!blog) {
            return next(errorHandler('Blog not found!', 404));
        }

        await blogModel.findByIdAndDelete(blogid);

        return res.status(200).json({
            success: true,
            message: 'Blog has been deleted'
        });

    } catch (error) {
        return next(errorHandler('Error deleting blog', 500));
    }
});
// Update blog
export const updateBlog = asyncHandler(async (req, res, next) => {
    const { blogid } = req.params;

    try {
        const blog = await blogModel.findById(blogid);

        if (!blog) {
            return next(errorHandler('Blog not found!', 404));
        }

        const updatedBlog = await blogModel.findByIdAndUpdate(
            blogid,
            {
                $set: {
                    blogTitle: req.body.blogTitle,
                    blogCategory: req.body.blogCategory,
                    blogImgFile: req.body.blogImgFile,
                    blogBody: req.body.blogBody
                }
            },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: 'Blog has been updated',
            blog: updatedBlog
        });

    } catch (error) {
        return next(errorHandler('Error updating blog', 500));
    }
});