import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Service = ({ service }) => {
  console.log(service);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="card-compact shadow-xl">
      <div className="w-full h-[250px]">
        <img
         className="w-full h-full"
          src={service.imgae}
        />
      </div>
      <div className="card-body">
        <h2 className="text-xl text-[#222222] font-medium text-center">{service.title}</h2>
        <p className="text-[#5b6674]">{service.description.slice(0,150)}...</p>
        <div className="card-actions justify-center">
          <button className="btn text-[#e49239] btn-link">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
