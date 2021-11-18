import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-3 mx-auto flex flex-col bg-gray-100 h-full overflow-hidden">
      <div className=" md:w-2/5 lg:w-2/6 mx-auto flex-col self-center h-screen sm:mx-5 justify-center mt-10">
        <div className="text-5xl font-bold mb-3 text-center text-blue-500">
          firebook
        </div>
        <div className="p-5 mx-auto bg-white rounded-lg shadow-2xl ">
          <p className=" text-xl text-center mb-2">Log in to Firebook</p>
          <form>
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
            <p className="text-sm text-blue-500 text-center">
              Forgotten password?
            </p>
            <hr className="my-5" />
          </form>
          <div className="text-center">
            <button className="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-sm bg-green-500 ">
              <Link to="/sign-up">Create New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
