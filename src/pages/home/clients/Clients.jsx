import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AiFillHighlight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const Clients = () => {
  const [clientReview, setClientReview] = useState([]);
  useEffect(() => {
    fetch("clientReview.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  return (
    <div className="mt-16 bg-[#f5f5f6] py-24 lg:px-16 md:px-10 px-6">
       <div className="mb-8 flex justify-center">
          <div>
          <h1 className="text-4xl text-center font-semibold text-[#e49239]">HAPPY CLIENTS</h1>
          <p className="text-sm mt-1 text-[#6a7481]">Every Events will be Memorable</p>
          <div className="w-24 mt-6 mx-auto h-1 bg-[#e49239]"></div>
          </div>
        </div>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="">
            {clientReview.map((item) => {
              return (
                <SwiperSlide className="shadow-lg rounded-2xl p-6" key={item.id}>
                  <div>
                    <div className="flex justify-center my-4">
                      <AiFillHighlight className="text-[#fcb41e] text-6xl" />
                    </div>
                    <p className="text-base text-[#afafae]">{item.desc}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex mt-3 justify-between">
                        <div className="w-[60px]">
                          <img className="w-full" src={item.image} alt="" />
                        </div>
                      </div>
                      <div><h1 className="text-lg font-medium">{item.name}</h1></div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Clients;
