import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const { id } = useParams();
  const currentService = services.find((item) => item.id === id);

  return (
    <div>
      <div className="bg-[#ecf2f6] lg:px-24 py-16 md:px-10 px-6 ">
        <div className="h-[500px] w-full">
          <img className="h-full w-full" src={currentService?.imgae} alt="" />
        </div>
        <div>
          <h1 className="text-3xl mt-10 mb-3 font-semibold">
            {currentService?.title}
          </h1>
          <p>{currentService?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
