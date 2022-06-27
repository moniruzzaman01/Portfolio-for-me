import React from "react";

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <nav
      class={` fixed left-0 top-0 bg-black-50 px-[15] h-full w-full opacity-0 ${
        navbar && "z-50 opacity-100"
      }`}
    >
      <div
        onClick={() => setNavbar(!navbar)}
        class=" h-[40px] w-[40px] text-center leading-[36px] rounded-full text-[35px] absolute right-3 top-5 cursor-pointer text-skin-color shadow-outer hover:shadow-inner"
      >
        &times;
      </div>
      <div class=" flex justify-center items-center min-h-screen">
        <ul className=" p-[15px] text-center ">
          <li className=" mb-5 block">
            <a
              href="#home"
              class=" text-[28px] inline-block font-semibold px-[30px] py-[5px] capitalize rounded-full text-black-600 shadow-inner hover:shadow-outer"
            >
              Home
            </a>
          </li>
          <li className=" mb-5">
            <a
              href="#home"
              class=" text-[28px] inline-block font-semibold px-[30px] py-[5px] capitalize rounded-full text-black-600 shadow-inner hover:shadow-outer"
            >
              about
            </a>
          </li>
          <li className=" mb-5">
            <a
              href="#home"
              class=" text-[28px] inline-block font-semibold px-[30px] py-[5px] capitalize rounded-full text-black-600 shadow-inner hover:shadow-outer"
            >
              services
            </a>
          </li>
          <li className=" mb-5">
            <a
              href="#home"
              class=" text-[28px] inline-block font-semibold px-[30px] py-[5px] capitalize rounded-full text-black-600 shadow-inner hover:shadow-outer"
            >
              portfolio
            </a>
          </li>
          <li className=" mb-5">
            <a
              href="#home"
              class=" text-[28px] inline-block font-semibold px-[30px] py-[5px] capitalize rounded-full text-black-600 shadow-inner hover:shadow-outer"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- copyright text --> */}
      <p class=" absolute left-0 top-1/2 text-black-600 rotate-[-90deg] translate-x-[-40%]">
        &copy; 2022 <span className=" text-skin-color">Moniruzzaman</span>
      </p>
    </nav>
  );
};

export default Navbar;
