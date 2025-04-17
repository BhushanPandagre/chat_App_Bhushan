


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '../main';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Registration failed');
      console.error(error);
    }

    setUser({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
    });
  };

  return (
    <div className="glass w-full max-w-md p-8 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Create Account</h1>

      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div>
          <label className="label text-white block">Full Name</label>
          <input
            required
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            className="input input-bordered w-full text-black"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="label text-white block">Username</label>
          <input
            required
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="input input-bordered w-full text-black"
            type="text"
            placeholder="johndoe123"
          />
        </div>

        <div>
          <label className="label text-white block">Password</label>
          <input
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="input input-bordered w-full text-black"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="label text-white block">Confirm Password</label>
          <input
            required
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            className="input input-bordered w-full text-black"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="label text-white block">Gender</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === 'male'}
                onChange={() => setUser({ ...user, gender: 'male' })}
                className="radio"
                required
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === 'female'}
                onChange={() => setUser({ ...user, gender: 'female' })}
                className="radio"
              />
              Female
            </label>
          </div>
        </div>

        <p className="text-left text-sm text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-300 underline">
            Login here
          </Link>
        </p>

        <button type="submit" className="btn btn-block mt-4">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;


