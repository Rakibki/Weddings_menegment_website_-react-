import React, { useEffect, useState } from "react";
import aboutImg from "../../assets/images/fact.webp";
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendarDate } from 'react-icons/bs';


const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("WorksInfo.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  console.log(works);
  return (
    <div className="bg-[#ecf2f6] lg:px-16 md:px-10 px-6 ">
      <div className="overflow-hidden bg-fixed relative">
        <div className="h-[300px]">
          <img className="w-full h-full" src={aboutImg} alt="" />
        </div>
        <div className="absolute w-full flex justify-center items-center h-full bg-gradient-to-r from-[#906227]/60 to-[#79293f]/60 top-0 left-0">
          <div>
            <h1 className="italic text-white font-semibold text-5xl">
              Our Works
            </h1>
          </div>
        </div>
      </div>

      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {works.map((item) => {
          return (
            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div >
                  <img className="rounded-t-lg h-[200px] w-full" src={item.image} alt="" />
                </div>
                <div className="p-5">
                  <div className="flex mb-4 px-4 justify-between">
                    <div className="flex items-center gap-2">
                      <BsCalendarDate className="text-[#e49239] text-base" />
                      {item.date}
                      </div>

                    <div className="flex items-center gap-1"> 
                      <HiLocationMarker className="text-[#e49239] text-base" />
                      {item.location}
                      </div>
                  </div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
