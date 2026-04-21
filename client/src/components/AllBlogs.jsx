import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import BlogPopupModal from "./BlogPopupModal";
import BlogLoader from "../assests/blogSpinner/BlogLoader";
import {
  FiCalendar,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiImage,
} from "react-icons/fi";

const AllBlogs = () => {
  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  const [userBlogs, setUserBlogs] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [blogModal, setBlogModal] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (loggedInUser?.isAdmin) {
      const getBlogs = async () => {
        setLoader(true);
        try {
          const fetchBlogs = await axios.get(
            `/api/blog/get-all-blogs?userId=${loggedInUser._id}&limit=8`
          );

          if (fetchBlogs.status === 200) {
            const blogs = fetchBlogs.data.blogs || [];
            setUserBlogs(blogs);
            setShowMoreButton(blogs.length >= 8);
          }
        } catch (error) {
          toast.error("An unexpected error occurred!");
          console.log(error);
        } finally {
          setLoader(false);
        }
      };

      getBlogs();
    }
  }, [loggedInUser?._id, loggedInUser?.isAdmin]);

  const deleteBlogHandle = (id) => {
    setBlogId(id);
    setBlogModal(true);
  };

  const fetchBlogs = async (nextPage = 2) => {
    try {
      const response = await axios.get(
        `/api/blog/get-all-blogs?userId=${loggedInUser._id}&page=${nextPage}&limit=8`
      );

      if (response.status === 200) {
        const nextBlogs = response.data.blogs || [];

        setUserBlogs((prev) => [...prev, ...nextBlogs]);
        setPage(nextPage + 1);

        if (nextBlogs.length < 8) {
          setShowMoreButton(false);
          toast.success("All blogs have been fetched");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const showMoreBlogsButton = () => {
    fetchBlogs(page);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "N/A";

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      {loggedInUser && loggedInUser.isAdmin ? (
        <div className="min-h-screen w-full px-3 md:px-5 py-3">
          <div className="w-full rounded-[24px] border border-white/10 bg-[#090c11] shadow-[0_0_24px_rgba(0,255,255,0.03)] overflow-hidden">
            {/* Header */}
            <div className="border-b border-white/10 px-5 py-5 md:px-6 md:py-6 bg-[linear-gradient(180deg,#0d1117_0%,#0a0d12_100%)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Blog Management
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    View, edit, and manage all published blog posts from one place.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  Total Blogs: {userBlogs.length}
                </div>
              </div>
            </div>

            {/* Loader */}
            {loader ? (
              <div className="min-h-[420px] flex items-center justify-center">
                <BlogLoader />
              </div>
            ) : userBlogs.length === 0 ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-4 h-16 w-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40">
                  <FiImage size={26} />
                </div>
                <h3 className="text-2xl font-semibold text-white">No blogs found</h3>
                <p className="mt-2 max-w-md text-white/50">
                  You have not published any blogs yet. Start creating content to see it here.
                </p>
              </div>
            ) : (
              <>
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <div className="min-w-[950px]">
                    <div className="grid grid-cols-[140px_110px_minmax(280px,1fr)_170px_110px_110px] gap-4 border-b border-white/10 bg-[#0f141b] px-6 py-4 text-xs font-semibold uppercase tracking-[1.5px] text-white/45">
                      <div>Updated On</div>
                      <div>Image</div>
                      <div>Blog Title</div>
                      <div>Category</div>
                      <div>Edit</div>
                      <div>Delete</div>
                    </div>

                    {userBlogs.map((data, index) => (
                      <div
                        key={data._id || index}
                        className="grid grid-cols-[140px_110px_minmax(280px,1fr)_170px_110px_110px] gap-4 px-6 py-4 border-b border-white/6 items-center hover:bg-white/[0.02] transition-all"
                      >
                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <FiCalendar className="text-cyan-300" />
                          <span>{formatDate(data.updatedAt)}</span>
                        </div>

                        {/* Image */}
                        <div>
                          <NavLink to={`/blog/${data.slug}`}>
                            <img
                              src={data.blogImgFile}
                              alt="blogImage"
                              className="h-14 w-20 rounded-xl object-cover border border-white/10"
                            />
                          </NavLink>
                        </div>

                        {/* Title */}
                        <div className="min-w-0">
                          <NavLink to={`/blog/${data.slug}`} className="group">
                            <h3 className="text-sm font-medium text-white line-clamp-2 group-hover:text-cyan-300 transition-colors">
                              {data.blogTitle}
                            </h3>
                            <span className="mt-2 inline-flex items-center gap-1 text-xs text-white/40 group-hover:text-cyan-300 transition-colors">
                              View Article <FiExternalLink size={12} />
                            </span>
                          </NavLink>
                        </div>

                        {/* Category */}
                        <div>
                          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">
                            {data.blogCategory || "General"}
                          </span>
                        </div>

                        {/* Edit */}
                        <div>
                          <NavLink
                            to={`/update-blog/${data._id}`}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-400/15 transition-all"
                          >
                            <FiEdit2 size={14} />
                            Edit
                          </NavLink>
                        </div>

                        {/* Delete */}
                        <div>
                          <button
                            onClick={() => deleteBlogHandle(data._id)}
                            className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-400/15 transition-all"
                          >
                            <FiTrash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile / Tablet Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:hidden">
                  {userBlogs.map((data, index) => (
                    <div
                      key={data._id || index}
                      className="rounded-[22px] border border-white/10 bg-[#0f141b] p-4 shadow-[0_0_20px_rgba(0,255,255,0.02)]"
                    >
                      <NavLink to={`/blog/${data.slug}`} className="block">
                        <img
                          src={data.blogImgFile}
                          alt="blogImage"
                          className="h-48 w-full rounded-[18px] object-cover border border-white/10"
                        />
                      </NavLink>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-xs text-white/50">
                          <FiCalendar className="text-cyan-300" />
                          {formatDate(data.updatedAt)}
                        </span>

                        <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-medium text-lime-300">
                          {data.blogCategory || "General"}
                        </span>
                      </div>

                      <NavLink to={`/blog/${data.slug}`} className="block">
                        <h3 className="mt-4 text-lg font-semibold text-white leading-7 line-clamp-2">
                          {data.blogTitle}
                        </h3>
                      </NavLink>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <NavLink
                          to={`/update-blog/${data._id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                        >
                          <FiEdit2 size={14} />
                          Edit
                        </NavLink>

                        <button
                          onClick={() => deleteBlogHandle(data._id)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300"
                        >
                          <FiTrash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Show More */}
            {showMoreButton && !loader && userBlogs.length > 0 && (
              <div className="px-4 md:px-6 py-6 border-t border-white/8 flex justify-center">
                <button
                  onClick={showMoreBlogsButton}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  Show More Blogs
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex w-full justify-center items-center">
          <BlogLoader />
        </div>
      )}

      <Toaster />

      {blogModal && (
        <BlogPopupModal
          blogModal={blogModal}
          setBlogModal={setBlogModal}
          blogId={blogId}
          setUserBlogs={setUserBlogs}
        />
      )}
    </>
  );
};

export default AllBlogs;