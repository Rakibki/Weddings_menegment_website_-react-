import React, { useContext, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser, AiOutlineLink } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { authContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    if(password.length < 6) {
      return setError('Password must be at least 6 characters long.')
    }else if(!/[A-Z]/.test(password)) {
      return setError('Password must contain at least one uppercase letter')
    }
    if(!/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/.test(password)) {
      return setError('Password must contain at least one special character')
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user, "user created");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("added name and photo");
            toast.success("registration successful");
          })
          .catch((error) => {
            setName(error.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  return (
    <div className="flex justify-center w-full bg-[#ebf1f5]">
      <div className="w-[50%] h-auto p-16 bg-white my-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create a New Account
        </h1>
        <form onSubmit={handleRegister} className="mb-6">
          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <AiOutlineUser className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>
          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <AiOutlineLink className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>
          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <HiOutlineMail className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>
          <div className="relative mb-8">
            <input
              className="w-full border-b-2 outline-none text-base py-2"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <BiLockAlt className="absolute top-1 text-[#777575] right-0 text-3xl" />
          </div>
          {error && <p className=" mb-2 text-red-500">{error}</p>}
          <button
            type="submit"
            className="px-6 rounded-xl w-full hover:text-[#e49239] hover:bg-white transition-all border-2 border-[#e49239] bg-[#222222] text-white font-semibold py-2"
          >
            Register
          </button>{" "}
        </form>
        <hr />
        <div className="mt-6">
          <h2 className="mb-2 text-center">Or Login With</h2>
          <div className="flex justify-center">
            <div className="flex gap-3">
              <button className="bg-[#db4437] px-3 py-2 text-white">
                Google
              </button>
              <button className="bg-[#f7f7f7] px-3 py-2 text-black">
                Github
              </button>
            </div>
          </div>
          <p className="text-center mt-4">
            Already a member?{" "}
            <Link className="text-[#e49239]" to={"/login"}>
              Login here
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
