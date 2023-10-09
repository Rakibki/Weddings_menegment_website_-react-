import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center	 justify-center	 h-[100vh]">
      <div>
        <h1 className="text-3xl text-center mb-3 font-semibold">Opps</h1>
        <p>The page you're looking for is not here.</p>
        <div className="flex mt-6 justify-center">
          <Link to={"/"}>
            <button className="px-6 rounded-xl hover:text-[#e49239] hover:bg-white transition-all border-2 border-[#e49239] bg-[#222222] text-white font-semibold py-2">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
