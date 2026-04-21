import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../assests/spinner/Spinner";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiTrash2,
  FiCheckCircle,
  FiXCircle,
  FiShield,
} from "react-icons/fi";
import { ImWarning } from "react-icons/im";

const ACCESS_OPTIONS = [
  { value: "full_access", label: "Full Access" },
  { value: "blogs_access", label: "Blogs Access" },
  { value: "write_only", label: "Write Blog Only" },
];

const AllUsers = () => {
  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  const [loader, setLoader] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [startPage, setStartPage] = useState(1);
  const [actionLoadingId, setActionLoadingId] = useState("");

  const authConfig = {
    headers: {
      Authorization: `Bearer ${loggedInUser?.token}`,
    },
    withCredentials: true,
  };

  useEffect(() => {
    if (loggedInUser?.isAdmin) {
      fetchUsers(1, true);
    }
  }, [loggedInUser]);

  const fetchUsers = async (page = 1, firstLoad = false) => {
    try {
      setLoader(firstLoad);
      const userInfo = await axios.get(`/api/user/getusers?page=${page}&limit=8`, authConfig);

      const response = userInfo.data.user || [];

      if (firstLoad) {
        setAllUsers(response);
      } else {
        setAllUsers((prev) => [...prev, ...response]);
      }

      setShowMoreButton(response.length >= 8);
      setStartPage(page);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoader(false);
    }
  };

  const deleteUserHandle = (id) => {
    setShowModal(true);
    setUserId(id);
  };

  const cancelHandle = () => {
    setShowModal(false);
    setUserId("");
  };

  const deleteUser = async () => {
    try {
      setShowModal(false);
      setActionLoadingId(userId);

      const userDelete = await axios.delete(`/api/user/deleteuser/${userId}`, {
        data: { user: loggedInUser },
        ...authConfig,
      });

      if (userDelete.status === 200) {
        setAllUsers((users) => users.filter((u) => u._id !== userId));
        toast.success("User deleted successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete user");
      console.log(error);
    } finally {
      setActionLoadingId("");
      setUserId("");
    }
  };

  const updateUserAccess = async (targetUserId, payload) => {
    try {
      setActionLoadingId(targetUserId);

      // Backend endpoint create/update karna hoga agar abhi nahi hai
      const response = await axios.patch(
        `/api/user/update-access/${targetUserId}`,
        payload,
        authConfig
      );

      if (response.status === 200) {
        setAllUsers((prev) =>
          prev.map((u) =>
            u._id === targetUserId
              ? {
                  ...u,
                  ...payload,
                }
              : u
          )
        );
        toast.success("User access updated");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to update user access");
    } finally {
      setActionLoadingId("");
    }
  };

  const handleApproveToggle = (singleUser) => {
    updateUserAccess(singleUser._id, {
      isApproved: !singleUser.isApproved,
    });
  };

  const handleAccessChange = (singleUser, value) => {
    updateUserAccess(singleUser._id, {
      accessLevel: value,
    });
  };

  const showMoreUserButton = async () => {
    const nextPage = startPage + 1;
    fetchUsers(nextPage, false);
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

  const getAccessLabel = (value) => {
    return ACCESS_OPTIONS.find((item) => item.value === value)?.label || "Not Set";
  };

  if (!loggedInUser?.isAdmin) {
    return (
      <div className="min-h-screen flex w-full justify-center items-center bg-black">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full px-3 md:px-5 py-3 bg-black">
        <div className="w-full rounded-[24px] border border-white/10 bg-[#090c11] shadow-[0_0_24px_rgba(0,255,255,0.03)] overflow-hidden">
          {/* Header */}
          <div className="border-b border-white/10 px-5 py-5 md:px-6 md:py-6 bg-[linear-gradient(180deg,#0d1117_0%,#0a0d12_100%)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  User Management
                </h2>
                <p className="mt-1 text-sm text-white/50">
                  Approve users, assign access permissions, and manage accounts.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Total Users: {allUsers.length}
              </div>
            </div>
          </div>

          {loader ? (
            <div className="min-h-[420px] flex items-center justify-center">
              <Spinner />
            </div>
          ) : allUsers.length === 0 ? (
            <div className="min-h-[420px] flex flex-col items-center justify-center px-6 text-center">
              <div className="mb-4 h-16 w-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40">
                <FiUser size={26} />
              </div>
              <h3 className="text-2xl font-semibold text-white">No users found</h3>
              <p className="mt-2 max-w-md text-white/50">
                No user records are available right now.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop */}
              <div className="hidden xl:block overflow-x-auto">
                <div className="min-w-[1250px]">
                  <div className="grid grid-cols-[130px_90px_180px_260px_130px_170px_150px_110px] gap-4 border-b border-white/10 bg-[#0f141b] px-6 py-4 text-xs font-semibold uppercase tracking-[1.5px] text-white/45">
                    <div>Updated On</div>
                    <div>Profile</div>
                    <div>Username</div>
                    <div>Email</div>
                    <div>Approval</div>
                    <div>Access</div>
                    <div>Admin</div>
                    <div>Delete</div>
                  </div>

                  {allUsers.map((singleUser) => (
                    <div
                      key={singleUser._id}
                      className="grid grid-cols-[130px_90px_180px_260px_130px_170px_150px_110px] gap-4 px-6 py-4 border-b border-white/6 items-center hover:bg-white/[0.02] transition-all"
                    >
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <FiCalendar className="text-cyan-300" />
                        <span>{formatDate(singleUser.updatedAt)}</span>
                      </div>

                      <div>
                        <img
                          src={singleUser.profilePicture}
                          alt="profile"
                          className="h-12 w-12 rounded-full object-cover border border-white/10"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-white truncate">
                          {singleUser.username}
                        </h3>
                      </div>

                      <div className="min-w-0 flex items-center gap-2 text-sm text-white/70">
                        <FiMail className="text-cyan-300 shrink-0" />
                        <span className="truncate">{singleUser.email}</span>
                      </div>

                      <div>
                        <button
                          onClick={() => handleApproveToggle(singleUser)}
                          disabled={actionLoadingId === singleUser._id}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            singleUser.isApproved
                              ? "border border-green-400/20 bg-green-400/10 text-green-300"
                              : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                          }`}
                        >
                          {singleUser.isApproved ? (
                            <>
                              <FiCheckCircle size={14} />
                              Approved
                            </>
                          ) : (
                            <>
                              <FiXCircle size={14} />
                              Pending
                            </>
                          )}
                        </button>
                      </div>

                      <div>
                        <select
                          value={singleUser.accessLevel || ""}
                          onChange={(e) => handleAccessChange(singleUser, e.target.value)}
                          disabled={actionLoadingId === singleUser._id}
                          className="w-full rounded-xl border border-white/10 bg-[#121821] px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/30"
                        >
                          <option value="">Select Access</option>
                          {ACCESS_OPTIONS.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                            singleUser.isAdmin
                              ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                              : "border border-white/10 bg-white/5 text-white/70"
                          }`}
                        >
                          <FiShield size={14} />
                          {singleUser.isAdmin ? "Admin" : "User"}
                        </span>
                      </div>

                      <div>
                        <button
                          onClick={() => deleteUserHandle(singleUser._id)}
                          disabled={actionLoadingId === singleUser._id}
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

              {/* Mobile / Tablet */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 xl:hidden">
                {allUsers.map((singleUser) => (
                  <div
                    key={singleUser._id}
                    className="rounded-[22px] border border-white/10 bg-[#0f141b] p-4 shadow-[0_0_20px_rgba(0,255,255,0.02)]"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={singleUser.profilePicture}
                        alt="profile"
                        className="h-14 w-14 rounded-full object-cover border border-white/10"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {singleUser.username}
                        </h3>
                        <p className="mt-1 text-sm text-white/55 break-all">
                          {singleUser.email}
                        </p>
                        <p className="mt-2 text-xs text-white/40">
                          Updated: {formatDate(singleUser.updatedAt)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => handleApproveToggle(singleUser)}
                        disabled={actionLoadingId === singleUser._id}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                          singleUser.isApproved
                            ? "border border-green-400/20 bg-green-400/10 text-green-300"
                            : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                        }`}
                      >
                        {singleUser.isApproved ? "Approved" : "Pending"}
                      </button>

                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                          singleUser.isAdmin
                            ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                            : "border border-white/10 bg-white/5 text-white/70"
                        }`}
                      >
                        {singleUser.isAdmin ? "Admin" : "User"}
                      </span>
                    </div>

                    <div className="mt-4">
                      <label className="mb-2 block text-sm text-white/60">
                        Access Permission
                      </label>
                      <select
                        value={singleUser.accessLevel || ""}
                        onChange={(e) => handleAccessChange(singleUser, e.target.value)}
                        disabled={actionLoadingId === singleUser._id}
                        className="w-full rounded-xl border border-white/10 bg-[#121821] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400/30"
                      >
                        <option value="">Select Access</option>
                        {ACCESS_OPTIONS.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        onClick={() => deleteUserHandle(singleUser._id)}
                        disabled={actionLoadingId === singleUser._id}
                        className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300"
                      >
                        <FiTrash2 size={14} />
                        Delete User
                      </button>
                    </div>

                    <p className="mt-4 text-xs text-white/35">
                      Current Access: {getAccessLabel(singleUser.accessLevel)}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {showMoreButton && !loader && allUsers.length > 0 && (
            <div className="px-4 md:px-6 py-6 border-t border-white/8 flex justify-center">
              <button
                onClick={showMoreUserButton}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Show More Users
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex justify-center items-center px-4">
          <div className="flex flex-col gap-7 shadow-md w-full max-w-md rounded-[24px] px-5 py-6 justify-center items-center bg-[#0f141b] text-gray-100 border border-white/10">
            <button className="place-self-end transition-all" onClick={cancelHandle}>
              <IoClose size={25} className="text-white/70" />
            </button>

            <div className="h-16 w-16 rounded-full border border-red-400/20 bg-red-400/10 flex items-center justify-center text-red-300">
              <ImWarning size={28} />
            </div>

            <div>
              <p className="text-base text-center text-white">
                Are you sure you want to delete this user?
              </p>
            </div>

            <div className="flex gap-4">
              <button
                className="rounded-full transition-all font-semibold py-3 px-5 bg-red-500 text-white active:scale-95"
                onClick={deleteUser}
              >
                Yes, Delete
              </button>

              <button
                className="border border-white/10 text-sm font-semibold transition-all bg-transparent rounded-full py-3 px-5 text-white active:scale-95"
                onClick={cancelHandle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </>
  );
};

export default AllUsers;