import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Spinner from "../assests/spinner/Spinner";
import { loginStart, loginSuccess, loginFailure } from "../features/userSlice";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.userSliceApp);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    validateForm(formData);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = async (formInfo) => {
    const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!formInfo.email) {
      toast.error("Email can not be empty!");
      return false;
    } else if (!regEx.test(formInfo.email)) {
      toast.error("Please enter a valid email!");
      return false;
    } else if (!formInfo.password) {
      toast.error("Password can not be empty!");
      return false;
    } else if (formInfo.password.length < 6) {
      toast.error("Password can not be less than 6 char!");
      return false;
    } else {
      try {
        dispatch(loginStart());

        const loginUser = await axios.post(`/api/user/login`, formInfo);
        const response = loginUser.data.user;
        dispatch(loginSuccess(response));
        navigate("/dashboard");
      } catch (error) {
        dispatch(loginFailure(error.response?.data || error.message));
        toast.error(error.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Tredixo</title>
        <meta
          name="description"
          content="Secure admin login to access Tredixo dashboard, manage blogs, users and trading content efficiently."
        />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-black px-4 py-8">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.05),transparent_45%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <form
              className="w-full max-w-[420px] rounded-[30px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(12,16,22,0.96)_0%,rgba(15,22,19,0.96)_100%)] px-6 py-8 md:px-8 md:py-10 shadow-[0_0_35px_rgba(0,255,255,0.14)] backdrop-blur-xl"
              onSubmit={submitHandle}
            >
              <p className="text-center text-[11px] font-semibold uppercase tracking-[3px] text-cyan-300">
                Tredixo Admin Portal
              </p>

              <h1 className="mt-3 text-center text-4xl font-bold text-white">
                Log In
              </h1>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[2px] text-white/55">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={onInputChange}
                    autoComplete="off"
                    className="h-12 rounded-xl border border-white/5 bg-[#15191f] px-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-400/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[2px] text-white/55">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={onInputChange}
                    className="h-12 rounded-xl border border-white/5 bg-[#15191f] px-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-400/30"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-full bg-cyan-400 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Spinner />
                    </div>
                  ) : (
                    <span>Log In →</span>
                  )}
                </button>
              </div>

              <div className="mt-7 text-center text-sm text-white/45">
                Don&apos;t have an account?{" "}
                <NavLink
                  className="font-medium text-lime-300 hover:underline"
                  to="/register"
                >
                  Create Account
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default Login;