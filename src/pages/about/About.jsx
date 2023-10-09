import React from "react";
import aboutImg from "../../assets/images/about.jpg";

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

    </div>
  );
};

export default About;
