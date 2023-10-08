import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/images/banner1.webp";
import banner2 from "../../../assets/images/banner2.webp";
import banner3 from "../../../assets/images/banner3.webp";
import banner4 from "../../../assets/images/banner4.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import conf from "../../../assets/images/conf.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderItem1 relative">
            <div className="absolute bg-[#000000b3] top-0 left-0 w-full h-full">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full">
                  {" "}
                  <img className="w-full" src={conf} alt="" />
                </div>
                <div className="flex items-center h-[500px] justify-center">
                  <div className="w-[50%] shadow-xl bg-[#00000066] text-white p-8">
                    <h1 className="text-white mb-3 text-2xl font-semibold">
                      WEDDING PLANNING
                    </h1>
                    <p className="text-base">
                      Your wedding day is a celebration of you love let us help
                      you celebrate your way. From beautiful designs and
                      concepts our wedding stylists will put the perfect
                      combination of carefully
                    </p>
                    <button className="px-2.5 mt-5 text-base py-1 border-2">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderItem2 relative">
            <div className="absolute bg-[#000000b3] top-0 left-0 w-full h-full">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full">
                  {" "}
                  <img className="w-full" src={conf} alt="" />
                </div>
                <div>
                  <div className="flex items-center h-[500px] justify-center">
                    <div className="w-[50%] shadow-xl bg-[#00000066] text-white p-8">
                      <h1 className="text-white mb-3 text-2xl font-semibold">
                        WEDDING PLANNING
                      </h1>
                      <p className="text-base">
                        Your wedding day is a celebration of you love let us
                        help you celebrate your way. From beautiful designs and
                        concepts our wedding stylists will put the perfect
                        combination of carefully
                      </p>
                      <button className="px-2.5 mt-5 text-base py-1 border-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderItem3 relative">
            <div className="absolute bg-[#000000b3] top-0 left-0 w-full h-full">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full">
                  {" "}
                  <img className="w-full" src={conf} alt="" />
                </div>
                <div>
                  <div className="flex items-center h-[500px] justify-center">
                    <div className="w-[50%] shadow-xl bg-[#00000066] text-white p-8">
                      <h1 className="text-white mb-3 text-2xl font-semibold">
                        WEDDING PLANNING
                      </h1>
                      <p className="text-base">
                        Your wedding day is a celebration of you love let us
                        help you celebrate your way. From beautiful designs and
                        concepts our wedding stylists will put the perfect
                        combination of carefully
                      </p>
                      <button className="px-2.5 mt-5 text-base py-1 border-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderItem4 relative">
            <div className="absolute bg-[#000000b3] top-0 left-0 w-full h-full">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full">
                  {" "}
                  <img className="w-full" src={conf} alt="" />
                </div>
                <div>
                  <div className="flex items-center h-[500px] justify-center">
                    <div className="w-[50%] shadow-xl bg-[#00000066] text-white p-8">
                      <h1 className="text-white mb-3 text-2xl font-semibold">
                        WEDDING PLANNING
                      </h1>
                      <p className="text-base">
                        Your wedding day is a celebration of you love let us
                        help you celebrate your way. From beautiful designs and
                        concepts our wedding stylists will put the perfect
                        combination of carefully
                      </p>
                      <button className="px-2.5 mt-5 text-base py-1 border-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
