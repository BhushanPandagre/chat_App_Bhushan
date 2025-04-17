
// import  { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BASE_URL } from '../main';


// const Signup = () => {
//   const [user, setUser] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });
//   const navigate = useNavigate();
//   const handleCheckbox = (gender) => {
//     setUser({ ...user, gender });
//   }
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//     }
//     setUser({
//       fullName: "",
//       username: "",
//       password: "",
//       confirmPassword: "",
//       gender: "",
//     })
//   }
//   return (
//     <div className="min-w-96 mx-auto">
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
//         <h1 className='text-3xl font-bold text-center'>Signup</h1>
//         <form onSubmit={onSubmitHandler} action="">
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input
//               value={user.fullName}
//               onChange={(e) => setUser({ ...user, fullName: e.target.value })}
//               className='w-full input input-bordered h-10'
//               type="text"
//               placeholder='Full Name' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               value={user.username}
//               onChange={(e) => setUser({ ...user, username: e.target.value })}
//               className='w-full input input-bordered h-10'
//               type="text"
//               placeholder='Username' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               className='w-full input input-bordered h-10'
//               type="password"
//               placeholder='Password' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               value={user.confirmPassword}
//               onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//               className='w-full input input-bordered h-10'
//               type="password"
//               placeholder='Confirm Password' />
//           </div>
//           <div className='flex items-center my-4'>
//             <div className='flex items-center'>
//               <p>Male</p>
//               <input
//                 type="checkbox"
//                 checked={user.gender === "male"}
//                 onChange={() => handleCheckbox("male")}
//                 defaultChecked
//                 className="checkbox mx-2" />
//             </div>
//             <div className='flex items-center'>
//               <p>Female</p>
//               <input
//                 type="checkbox"
//                 checked={user.gender === "female"}
//                 onChange={() => handleCheckbox("female")}
//                 defaultChecked
//                 className="checkbox mx-2" />
//             </div>
//           </div>
//           <p className='text-center my-2'>Already have an account? <Link to="/login"> login </Link></p>
//           <div>
//             <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Singup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup;


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
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Registration failed');
      console.log(error);
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>
            <input
              required
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="input input-bordered w-full text-black"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="input input-bordered w-full text-black"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="input input-bordered w-full text-black"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <input
              required
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className="input input-bordered w-full text-black"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-4">
            <label className="label text-white mb-1">Gender</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
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
              <label className="flex items-center gap-2 text-white">
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

          <p className="text-center text-sm text-gray-300 mb-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-300 underline">
              Login
            </Link>
          </p>

          <button type="submit" className="btn btn-primary btn-block">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
