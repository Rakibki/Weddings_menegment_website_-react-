import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import fact from "../../assets/images/fact.webp";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="bg-[#eeeeee]">
      <div className="overflow-hidden bg-fixed relative">
        <div className="h-[300px]">
          <img className="w-full h-full" src={aboutImg} alt="" />
        </div>
        <div className="absolute w-full flex justify-center items-center h-full bg-gradient-to-r from-[#906227]/60 to-[#79293f]/60 top-0 left-0">
          <div>
            <h1 className="italic text-white font-semibold text-5xl">
              About US
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 lg:px-16 md:px-10 px-6  overflow-hidden">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-3xl text-[#e49239]">Why Choose Us</h1>
            <div className="w-24 mt-3 h-1 mb-6 bg-[#e49239]"></div>
            <p>
              There are many reasons to choose Skyborn Event and Wedding for
              your next big event. Here are just a few:
            </p>
            <br />
            <p>
              We have a proven track record of success. We are a full-service
              event planning company, so we can take care of everything from
              start to finish. We have a team of experienced and professional
              event planners who will work tirelessly to make your event a
              success. We have a wide range of services and products that we can
              offer to make your event a truly unique and memorable experience.
              We are passionate about what we do and we will do everything we
              can to make your event a success.
            </p>
          </div>
          <div>
            <div>
              <h1 className="text-3xl text-[#e49239]">Our Mission</h1>
              <div className="w-24 mt-3 mb-6 h-1 bg-[#e49239]"></div>
              <p>
                To help couples plan and execute the perfect sky-themed wedding.
                To help make sky-themed events more memorable and special. To
                help bring people's sky-themed dreams to life.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-3xl text-[#e49239]">Our Vision</h1>
              <div className="w-24 mt-3 h-1 mb-6 bg-[#e49239]"></div>
              <p>
                A world-class event and wedding planning company that is known
                for its innovation, style, and customer service A company that
                provides its clients with an unforgettable experience by
                creating unique and personal events. A company that is dedicated
                to making each event and wedding a perfect reflection of the
                client’s individual style and personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="w-full relative h-[900px] md:h-[500px]">
          <div className="w-full h-full">
            <img src={fact} className="w-full h-full" alt="" />
          </div>
          <div className="absolute text-white bg-[#000000a6] top-0 left-0 w-full h-full">
            <h1 className="text-4xl mt-16 text-center">
              WE HAVE SOMETHING TO BE PROUD OF
            </h1>
            <p className="text-center mt-4">Every Events will be Memorable</p>
            <div className="w-24 mt-6 mx-auto h-1 bg-[#e49239]"></div>
            <div className="flex mt-24 justify-center">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                <div className="border-2 p-8">
                  <div className="flex justify-center">
                    <CountUp
                      className="text-5xl mb-2 text-[#e49239]"
                      duration={4.0}
                      end={60}
                    />
                  </div>
                  <h1 className="text-2xl mt-2">Happy Clients</h1>
                </div>

                <div className="border-2 p-8">
                  <div className="flex justify-center">
                    <CountUp
                      className="text-5xl mb-2 text-[#e49239]"
                      duration={4.0}
                      end={24}
                    />
                  </div>
                  <h1 className="text-2xl mt-2 text-center">Events</h1>
                </div>

                <div className="border-2 p-8">
                  <div className="flex justify-center">
                    <CountUp
                      className="text-5xl mb-2 text-[#e49239]"
                      duration={4.0}
                      end={6}
                    />
                  </div>
                  <h1 className="text-2xl text-center mt-2">Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
