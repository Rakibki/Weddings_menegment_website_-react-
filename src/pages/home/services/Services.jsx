import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="lg:px-16 mb-24 md:px-10 px-6">
      <div className="flex justify-center mt-20">
        <div className="mb-8">
          <h1 className="text-4xl text-center font-semibold text-[#e49239]">SERVICES</h1>
          <p className="text-sm mt-1 text-[#6a7481]">Every Events will be Memorable</p>
          <div className="w-24 mt-6 mx-auto h-1 bg-[#e49239]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
