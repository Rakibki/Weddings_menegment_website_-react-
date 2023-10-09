import React from "react";
import supportImg from "../../assets/images/fact.webp";
import { LuMessagesSquare } from "react-icons/lu";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdWorkspacePremium, MdSupportAgent } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Support = () => {
  return (
    <div>
      <div className="w-full relative h-[600px] md:h-[500px] bg-red-300">
        <div className="w-full h-full">
          {" "}
          <img src={supportImg} className="w-full h-full" alt="" />
        </div>
        <div className="absolute text-white  p-16 bg-[#00000099] w-full top-0 h-full">
          <div className="md:w-[90%] lg:w-[80%] mx-auto">
            <h1 className="text-4xl mb-6 font-semibold text-center">
              How Can We Help You?
            </h1>
            <div className="relative">
              <input
                type="text"
                className="w-full mb-4 outline-none text-black p-3"
                placeholder="Search anything by typing"
              />
             <AiOutlineSearch className="absolute text-[#e49239] right-5 top-2 text-[25px]" />
            </div>
            <div className="grid mt-6 gap-3 grid-cols-2 md:grid-cols-4">
              <div className="p-4 border">
                <h2 className="text-lg text-center">Open a Support Ticket</h2>
                <div className="flex justify-center mt-3">
                  <MdSupportAgent className="text-6xl text-[#e49239]" />
                </div>
              </div>

              <div className="p-4 border">
                <h2 className="text-lg text-center">Presale Question</h2>
                <div className="flex justify-center mt-3">
                  <LuMessagesSquare className="text-6xl text-[#e49239]" />
                </div>
              </div>

              <div className="p-4 border">
                <h2 className="text-lg text-center">Get a Free Quote</h2>
                <div className="flex justify-center mt-3">
                  <FaEnvelopeOpenText className="text-6xl text-[#e49239]" />
                </div>
              </div>

              <div className="p-4 border">
                <h2 className="text-lg text-center">
                  Premium Support Subscription
                </h2>
                <div className="flex justify-center mt-3">
                  <MdWorkspacePremium className="text-6xl text-[#e49239]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
