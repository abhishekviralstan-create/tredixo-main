import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  if (!loggedInUser) {
    return <Navigate to="/tredixo-admin-login" />;
  }

  const hasPanelAccess =
    loggedInUser.isAdmin ||
    loggedInUser.isApproved ||
    ["full_access", "blogs_access", "write_only"].includes(
      loggedInUser.accessLevel
    );

  if (!hasPanelAccess) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;