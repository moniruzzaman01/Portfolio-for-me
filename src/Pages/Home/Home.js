import React from "react";
import img from "../../assets/img.png";
import "./Home.css";

const Home = () => {
  return (
    <section class="home_section section active" id="home">
      {/* effect */}
      <div class=" max-w-6xl m-auto">
        <div class=" flex flex-wrap min-h-screen py-[50px] items-center">
          <div class=" flex-1 px-[15px]">
            <p className=" text-black-300 text-[18px] capitalize m-0 ">Hello</p>
            <h1 className=" text-[55px] font-bold text-black m-0 ">
              I'm Moniruzzaman
            </h1>
            <h2 className=" text-[20px] font-medium text-black-600 m-0 capitalize ">
              web designer and deeveloper
            </h2>
            <a
              href="#about"
              className=" px-[25px] py-[10px] font-semibold text-skin-color bg-transparent cursor-pointer rounded-full inline-block shadow-outer mt-8 hover:shadow-inner "
            >
              More About Me
            </a>
          </div>
          <div class="home_img">
            <div class="img_box shadow-inner">
              <img src={img} class=" shadow-outer" alt="Moniruzzaman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
