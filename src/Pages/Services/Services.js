import React from "react";
import { FaDesktop } from "react-icons/fa";

const Services = () => {
  return (
    <section className=" relative pt-[80px] min-h-screen ">
      <div className=" max-w-6xl m-auto">
        <div class=" flex flex-wrap">
          <div class=" mb-[40px] text-center w-full ">
            <h4 className=" font-semibold text-skin-color uppercase">
              services
            </h4>
            <h2 className=" text-[30px] font-bold uppercase ">
              What i will provide?
            </h2>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class=" p-[15px] ">
            <div class=" py-[50px] px-[15px] rounded text-center shadow-outer">
              <div class=" inline-block h-[60px] w-[60px] shadow-inner rounded-full hover:shadow-outer">
                <FaDesktop className=" h-full mx-auto text-2xl " />
              </div>
              <h3 className=" text-[20px] font-semibold text-black-700 mb-[10px] capitalize ">
                Responsive design
              </h3>
              <p className=" text-black-600  ">
                An eye catchy design can attract your user to you. It can make a
                good impression about you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
