import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
        alt="background"
      />

      <forn className="w-3/12 absolute p-12 bg-black my-56 mx-auto right-0 left-0 bg-opacity-75 text-white rounded-lg">
        <h1 className="font-bold text-2xl py-4">{isSignInForm? "Sign In":"SignUp"}</h1>
        {!isSignInForm && ( <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 bg-gray-900 w-full"
        />)}
        
          {!isSignInForm && ( <input
          type="text"
          placeholder="Mobile Number"
          className="p-2 my-2 bg-gray-900 w-full"
        />)}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 bg-gray-900 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-900 w-full"
        />
        <button className="p-2 my-4 bg-red-800 w-full rounded-lg">
          {isSignInForm? "Sign In":"Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm? "New to netflix? SignUp":"Already register user sign In"} </p>
      </forn>
    </div>
  );
};

export default Login;
