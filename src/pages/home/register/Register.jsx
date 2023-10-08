import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser, AiOutlineLink } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center w-full bg-[#ebf1f5]">
      <div className="w-[50%] h-auto p-16 bg-white my-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">
        Create a New Account
        </h1>
        <form className="mb-6">
          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
            <AiOutlineUser className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>

          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
            />
            <AiOutlineLink className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>

          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <HiOutlineMail className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>

          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="password"
              name="password"
              placeholder="password"
            />
            <BiLockAlt className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>
          <button className="px-6 rounded-xl w-full hover:text-[#e49239] hover:bg-white transition-all border-2 border-[#e49239] bg-[#222222] text-white font-semibold py-2">
            Register
          </button>{" "}
        </form>
        <hr />
        <div className="mt-6">
          <h2 className="mb-2 text-center">Or Login With</h2>
          <div className="flex justify-center">
            <div className="flex gap-3">
              <button className="bg-[#db4437] px-3 py-2 text-white">Google</button>
              <button className="bg-[#f7f7f7] px-3 py-2 text-black">Github</button>
            </div>
          </div>
          <p className="text-center mt-4">Already a member? <Link className="text-[#e49239]" to={"/login"}>Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
