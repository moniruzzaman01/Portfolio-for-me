import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import "./Home.css";

const Home = () => {
  return (
    <section class=" relative">
      {/* <!-- effect wrap start --> */}
      <div class="effect_wrap">
        <div class="effect effect_1"></div>
        <div class="effect effect_2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="effect effect_3"></div>
        <div class="effect effect_4"></div>
        <div class="effect effect_5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <!-- effect wrap end --> */}
      <div class=" max-w-6xl m-auto">
        <div class=" flex flex-wrap min-h-screen py-[50px] items-center">
          <div class=" flex-1 px-[15px]">
            <p className=" text-black-300 text-[18px] capitalize m-0 ">Hello</p>
            <h1 className=" text-[55px] font-bold text-black m-0 ">
              I'm Moniruzzaman
            </h1>
            <h2 className=" text-[20px] font-medium text-black-600 m-0 capitalize ">
              full stack developer || backend specialist
            </h2>
            <Link
              to="/about"
              className=" relative px-[25px] py-[10px] font-semibold text-skin-color bg-transparent cursor-pointer rounded-full inline-block shadow-outer mt-8 hover:shadow-inner "
            >
              More About Me
            </Link>
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
