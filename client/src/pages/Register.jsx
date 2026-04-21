import { TiUserAdd } from "react-icons/ti";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Spinner from '../assests/spinner/Spinner';

const Register = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { theme } = useSelector((state) => state.themeSliceApp);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const submitHandle = (e) => {
    e.preventDefault();
    validateForm(formData)
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = async (formData) => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (!formData.username) {
      toast.error('Username can not be blanked!');
      return false;
    } else if (formData.username.includes(' ')) {
      toast.error('Username can not contain space!');
      return false;
    } else if (formData.username !== formData.username.toLowerCase()) {
      toast.error('Username can only contain small letters!')
      return false;
    } else if (formData.username.length < 4) {
      toast.error('Username too short!');
      return false;
    } else if (!formData.email) {
      toast.error('Email required!');
      return false;
    } else if (!regEx.test(formData.email)) {
      toast.error('Invalid email!');
      return false;
    } else if (!formData.password) {
      toast.error('Password required!');
      return false;
    } else if (formData.password.length < 6) {
      toast.error('Password too short!');
      return false;
    } else {
      try {
        setLoading(true);
        const registerUser = await axios.post(`/api/user/register`, formData);
        setLoading(false);
        toast.success(registerUser.data.message);
        setTimeout(() => navigate('/login'), 1500);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message)
      }
    }
  }

  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden px-4">

        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] w-[300px] h-[300px] bg-green-500/10 blur-3xl rounded-full"></div>
          <div className="absolute right-[-10%] bottom-[10%] w-[350px] h-[350px] bg-cyan-400/10 blur-3xl rounded-full"></div>
        </div>

        {/* Center Card */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">

          <form
            onSubmit={submitHandle}
            className="w-full max-w-md rounded-[30px] border border-green-400/20 bg-[#0b0f14]/95 backdrop-blur-xl px-6 py-10 shadow-[0_0_40px_rgba(0,255,100,0.15)]"
          >

            {/* Heading */}
            <p className="text-xs uppercase tracking-[3px] text-green-400 text-center">
              Tredixo Signup
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mt-2">
              Admin <span className="text-green-400">Panel</span>
            </h1>

            <p className="text-center text-white/40 text-sm mt-2">
              Request For Verification
            </p>

            {/* Inputs */}
            <div className="mt-8 flex flex-col gap-4">

              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={onInputChange}
                className="h-12 rounded-xl bg-[#15191f] border border-white/5 px-4 text-white placeholder:text-white/30 focus:border-green-400/30 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={onInputChange}
                className="h-12 rounded-xl bg-[#15191f] border border-white/5 px-4 text-white placeholder:text-white/30 focus:border-green-400/30 outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={onInputChange}
                className="h-12 rounded-xl bg-[#15191f] border border-white/5 px-4 text-white placeholder:text-white/30 focus:border-green-400/30 outline-none"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full h-12 rounded-full bg-green-400 text-black font-semibold hover:scale-[1.02] transition-all"
            >
              {
                loading
                  ? <Spinner />
                  : "Submit →"
              }
            </button>

            {/* Bottom */}
            <div className="mt-6 text-center text-sm text-white/50">
              Already part of the Tredixo?{" "}
              <NavLink to="/login" className="text-green-400 hover:underline">
                Sign in
              </NavLink>
            </div>

          </form>
        </div>

      </div>

      <Toaster />
    </>
  )
}

export default Register;