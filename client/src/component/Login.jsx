
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "../main";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      dispatch(setAuthUser(res.data));
      navigate("/");
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
 
    }
    setUser({ username: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="input input-bordered w-full text-black"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="input input-bordered w-full text-black"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <p className="text-center text-sm text-gray-300 mb-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-300 underline">
              Signup
            </Link>
          </p>
          <button
            type="submit"
            className="btn  btn-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

