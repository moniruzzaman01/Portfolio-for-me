import React from "react";
import img from "../../assets/img.png";
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section className=" relative pt-[80px] min-h-screen ">
      <div className=" max-w-6xl m-auto">
        <div class=" flex flex-wrap">
          <div class=" mb-[40px] text-center w-full ">
            <h4 className=" font-semibold text-skin-color uppercase">
              Main Info
            </h4>
            <h2 className=" text-[30px] font-bold uppercase ">About me</h2>
          </div>
        </div>
        <div class=" flex flex-wrap">
          <div class="max-w-[40%] px-[15px] ">
            <div class=" p-[15px] rounded-md shadow-inner">
              <img
                src={img}
                class=" w-full p-[15px] rounded-md shadow-outer"
                alt="Profile_img"
              />
            </div>
            {/* <!-- social links start --> */}
            <div class=" mt-[20px] text-center ">
              <p class=" inline-block h-[40px] w-[40px] text-black-600 rounded-full shadow-outer text-[16px] text-center mr-3 hover:shadow-inner hover:text-skin-color">
                <FaFacebookF className=" mx-auto h-full " />
              </p>
              <p class=" inline-block h-[40px] w-[40px] text-black-600 rounded-full shadow-outer text-[16px] text-center mr-3 hover:shadow-inner hover:text-skin-color">
                <FaTwitter className=" mx-auto h-full " />
              </p>
              <p class=" inline-block h-[40px] w-[40px] text-black-600 rounded-full shadow-outer text-[16px] text-center mr-3 hover:shadow-inner hover:text-skin-color">
                <FaWhatsapp className=" mx-auto h-full " />
              </p>
              <p class=" inline-block h-[40px] w-[40px] text-black-600 rounded-full shadow-outer text-[16px] text-center mr-3 hover:shadow-inner hover:text-skin-color">
                <FaLinkedin className=" mx-auto h-full " />
              </p>
            </div>
            {/* <!-- social links end --> */}
          </div>
          <div class=" max-w-[60%] px-[15px] ">
            <p className=" leading-[26px] mb-[15px] text-black-600 ">
              <span className=" font-semibold">
                Hi! I'm Moniruzzaman. I'm a full stack web developer.{" "}
              </span>
              I'm specialized with HTML, CSS, JavaScript, React.js, Node.js,
              Express.js and MongoDB. I also have knowledge about Bootstrap and
              Tailwind. Personally I like backend development using node.js.
            </p>
            <p>
              odit quo alias possimus ut praesentium magnam labore a amet natus!
            </p>
            <p class=" px-[25px] py-[10px] mr-5 font-semibold text-skin-color bg-transparent cursor-pointer rounded-full inline-block shadow-outer mt-8 hover:shadow-inner ">
              Download CV
            </p>
            <p class=" px-[25px] py-[10px]  font-semibold text-skin-color bg-transparent cursor-pointer rounded-full inline-block shadow-outer mt-8 hover:shadow-inner ">
              Hire Me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
