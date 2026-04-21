import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { signOutSuccess, signOutUserFailure } from "../features/userSlice";
import axios from "axios";
import { MdPostAdd } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { PiChartPieSliceFill } from "react-icons/pi";

const DashboardSidebar = () => {
  const { theme } = useSelector((state) => state.themeSliceApp);
  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const getTab = urlParams.get("tab");
    setTab(getTab);
  }, [location.search]);

  const signOutHandle = async () => {
    try {
      const signOutUser = await axios.post(`/api/user/signoutuser`);

      if (signOutUser.data.success === true) {
        dispatch(signOutSuccess());
        navigate("/tredixo-admin-login");
      }
    } catch (error) {
      dispatch(signOutUserFailure(error));
    }
  };

  const isAdmin = loggedInUser?.isAdmin;
  const accessLevel = loggedInUser?.accessLevel;

  const canViewDashboard =
    isAdmin || accessLevel === "full_access" || accessLevel === "blogs_access";

  const canViewBlogs =
    isAdmin ||
    accessLevel === "full_access" ||
    accessLevel === "blogs_access" ||
    accessLevel === "write_only";

  return (
    <div
      className={`transition-all border-r w-full my-5 flex flex-col gap-4 md:w-52 md:min-h-screen ${
        theme === "dark" ? "border-slate-700" : "border-gray-300"
      }`}
    >
      {canViewDashboard && (
        <NavLink
          to={`?tab=dash`}
          className={`flex transition-all justify-center gap-1 items-center ${
            tab === "dash" ? "bg-zinc-700 mx-3 text-white rounded-md py-2" : ""
          }`}
        >
          <span>
            <PiChartPieSliceFill size={21} />
          </span>
          <span>Dashboard</span>
        </NavLink>
      )}

      <NavLink
        to={"?tab=profile"}
        className={`flex items-center justify-center gap-1 cursor-pointer transition-all ${
          tab === "profile" ? "bg-zinc-600 mx-3 text-white rounded-md py-2" : ""
        }`}
      >
        <span>
          <CgProfile size={25} />
        </span>
        <div className="flex gap-2 items-center">
          <p>Profile</p>
          <span className="bg-gray-900 py-1 px-1 rounded-md text-blue-300 text-xs">
            {isAdmin ? "Admin" : accessLevel || "User"}
          </span>
        </div>
      </NavLink>

      {canViewBlogs && (
        <NavLink
          to={"?tab=blogs"}
          className={`flex transition-all gap-1 justify-center items-center ${
            tab === "blogs" ? "bg-zinc-700 mx-3 text-white rounded-md py-2" : ""
          }`}
        >
          <span>
            <MdPostAdd size={23} />
          </span>
          <span>Blogs</span>
        </NavLink>
      )}

      {isAdmin && (
        <NavLink
          to={`?tab=users`}
          className={`flex transition-all justify-center gap-1 items-center ${
            tab === "users" ? "bg-zinc-700 mx-3 text-white rounded-md py-2" : ""
          }`}
        >
          <span>
            <FaUsersCog size={21} />
          </span>
          <span>Users</span>
        </NavLink>
      )}

      {isAdmin && (
        <NavLink
          to={`?tab=comments`}
          className={`flex transition-all justify-center gap-1 items-center ${
            tab === "comments" ? "bg-zinc-700 mx-3 text-white rounded-md py-2" : ""
          }`}
        >
          <span>
            <FaRegCommentDots size={20} />
          </span>
          <span>Comments</span>
        </NavLink>
      )}

      <div
        className="flex items-center justify-center gap-1 cursor-pointer"
        onClick={signOutHandle}
      >
        <span>
          <CiLogout size={20} />
        </span>
        <span>Sign out</span>
      </div>
    </div>
  );
};

export default DashboardSidebar;