import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { FiUsers, FiFileText, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

const DashBaordComp = () => {
  const [userData, setUserData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [commentsData, setCommetsData] = useState([]);

  const [totalUsers, setTotalUser] = useState(0);
  const [totalBlogPosts, setTotalBlogPost] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthsPost] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);

  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchUserDetails = await axios.get(`/api/user/getusers?user=5`, {
          headers: {
            Authorization: loggedInUser.token,
          },
        });

        if (fetchUserDetails.status === 200) {
          setUserData(fetchUserDetails.data.user);
          setTotalUser(fetchUserDetails.data.countUser);
          setLastMonthUsers(fetchUserDetails.data.lastMonthUsers);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      }
    };

    const fetchBlog = async () => {
      try {
        const fetchBlogDetails = await axios.get(`/api/blog/get-all-blogs?limit=5`);

        if (fetchBlogDetails.status === 200) {
          setBlogsData(fetchBlogDetails.data.blogs);
          setTotalBlogPost(fetchBlogDetails.data.countBlogs);
          setLastMonthsPost(fetchBlogDetails.data.lastMonthBlogs);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      }
    };

    const fetchComments = async () => {
      try {
        const fetchCommentDetails = await axios.get(
          `/api/comment/get-all-comments?limitComments=5`,
          {
            headers: {
              Authorization: loggedInUser.token,
            },
          }
        );

        if (fetchCommentDetails.status === 200) {
          setCommetsData(fetchCommentDetails.data.comments);
          setTotalComments(fetchCommentDetails.data.countDocument);
          setLastMonthComments(fetchCommentDetails.data.lastMonthComment);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      }
    };

    if (loggedInUser?.isAdmin) {
      fetchUser();
      fetchBlog();
      fetchComments();
    }
  }, [loggedInUser]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'N/A';

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-cyan-300 text-xs md:text-sm uppercase tracking-[3px] font-semibold">
            Tredixo Admin Panel
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">Dashboard Overview</h1>
          <p className="mt-3 text-white/55 max-w-2xl">
            Monitor users, blog performance, and recent comment activity from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 shadow-[0_0_24px_rgba(0,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <span className="text-white/55 text-sm">Total Users</span>
              <span className="h-11 w-11 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <FiUsers size={18} />
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold">{totalUsers}</h2>
            <p className="mt-2 text-sm text-green-300">+{lastMonthUsers} last month</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 shadow-[0_0_24px_rgba(0,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <span className="text-white/55 text-sm">Total Blogs</span>
              <span className="h-11 w-11 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-300">
                <FiFileText size={18} />
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold">{totalBlogPosts}</h2>
            <p className="mt-2 text-sm text-green-300">+{lastMonthPosts} last month</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 shadow-[0_0_24px_rgba(0,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <span className="text-white/55 text-sm">Total Comments</span>
              <span className="h-11 w-11 rounded-full bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-violet-300">
                <FiMessageSquare size={18} />
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold">{totalComments}</h2>
            <p className="mt-2 text-sm text-green-300">+{lastMonthComments} last month</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 shadow-[0_0_24px_rgba(0,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <span className="text-white/55 text-sm">Growth Pulse</span>
              <span className="h-11 w-11 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-300">
                <FiTrendingUp size={18} />
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold">
              {lastMonthUsers + lastMonthPosts + lastMonthComments}
            </h2>
            <p className="mt-2 text-sm text-white/45">Combined monthly activity</p>
          </div>
        </div>

        {/* Content blocks */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 xl:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold">Recent Users</h3>
              <span className="text-xs text-cyan-300 uppercase tracking-[2px]">Latest</span>
            </div>

            {userData.length > 0 ? (
              <div className="space-y-4">
                {userData.map((singleUser) => (
                  <div
                    key={singleUser._id}
                    className="rounded-2xl border border-white/8 bg-[#11161d] px-4 py-3"
                  >
                    <h4 className="text-sm font-semibold text-white">{singleUser.username}</h4>
                    <p className="text-sm text-white/55 break-all mt-1">{singleUser.email}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-white/40">
                      <span>{singleUser.isAdmin ? 'Admin' : 'User'}</span>
                      <span>{formatDate(singleUser.updatedAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/45">No recent users found.</p>
            )}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 xl:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold">Recent Blogs</h3>
              <span className="text-xs text-lime-300 uppercase tracking-[2px]">Updated</span>
            </div>

            {blogsData.length > 0 ? (
              <div className="space-y-4">
                {blogsData.map((blog) => (
                  <div
                    key={blog._id}
                    className="rounded-2xl border border-white/8 bg-[#11161d] px-4 py-3"
                  >
                    <h4 className="text-sm font-semibold text-white line-clamp-2">
                      {blog.blogTitle}
                    </h4>
                    <p className="text-xs text-white/50 mt-2">
                      {blog.blogCategory || 'General'}
                    </p>
                    <div className="mt-2 text-xs text-white/40">
                      {formatDate(blog.updatedAt || blog.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/45">No recent blogs found.</p>
            )}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b0f14] p-6 xl:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold">Recent Comments</h3>
              <span className="text-xs text-violet-300 uppercase tracking-[2px]">Live</span>
            </div>

            {commentsData.length > 0 ? (
              <div className="space-y-4">
                {commentsData.map((comment) => (
                  <div
                    key={comment._id}
                    className="rounded-2xl border border-white/8 bg-[#11161d] px-4 py-3"
                  >
                    <p className="text-sm text-white/75 line-clamp-3">
                      {comment.commentDesc || comment.content || 'Comment added'}
                    </p>
                    <div className="mt-2 text-xs text-white/40">
                      {formatDate(comment.updatedAt || comment.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/45">No recent comments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBaordComp;