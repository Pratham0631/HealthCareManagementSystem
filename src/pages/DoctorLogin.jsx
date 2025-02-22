import React from "react";
import {useNavigate} from 'react-router-dom';

const DoctorLogin = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-center mt-20 min-h-auto px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Login as Doctor
        </h1>

        <div className="mt-6">
          <form action="" method="post" className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full text-white bg-blue-500 rounded-full py-2 font-medium hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex text-base sm:text-lg justify-center gap-2 sm:gap-5 mt-5">
          <p className="font-thin text-md">Don't have an Account?</p>
          <a href="/user/signup" className="text-blue-500 hover:underline text-md">
            Signup
          </a>
        </div>

        <div className="flex text-base sm:text-lg justify-center gap-2 sm:gap-5 mt-5">
          <p className="font-thin text-md">Login as User ?</p>
          <p onClick={()=>{navigate('/login');scrollTo(0,0)}} className="text-blue-500 hover:underline text-md">Login</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
