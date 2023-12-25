import fact from "../../../assets/images/fact.webp"
import CountUp from "react-countup";

const FactSection = () => {
  return (
    <div>
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

export default FactSection;
