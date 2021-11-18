import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="px-3 mx-auto flex flex-col bg-gray-100 h-screen overflow-hidden">
      <div className=" md:w-2/5 lg:w-2/6 mx-auto flex-col self-center h-screen sm:mx-5 justify-center mt-10">
        <div className="text-5xl font-bold mb-3 text-center text-blue-500">
          firebook
        </div>
        <div className="p-5 mx-auto bg-white rounded-lg shadow-2xl ">
          <p className="font-bold text-xl text-center mb-2">
            Create a new account
          </p>
          <form>
            <input
              type="text"
              aria-label="username"
              placeholder="User name "
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2"
            />
            <input
              type="text"
              aria-label="full name"
              placeholder="Full name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2"
            />
            <input
              type="email"
              aria-label="Email"
              placeholder="Email address "
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2"
            />
            <input
              type="password"
              aria-label="Password"
              placeholder="Password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2"
            />
            <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-500 w-full my-2">
              Log In
            </button>

            <hr className="my-5" />
          </form>
          <div className="text-center">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
