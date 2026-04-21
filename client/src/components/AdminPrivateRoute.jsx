import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminPrivateRoute = () => {
    const { user, currentUser } = useSelector((state) => state.userSliceApp);
    const adminUser = user || currentUser;

    return adminUser?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminPrivateRoute;