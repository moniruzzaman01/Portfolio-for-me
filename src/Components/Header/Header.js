import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class=" px-3 py-5 w-screen absolute top-0 left-0 z-30">
        <div className=" max-w-6xl mx-auto">
          <div class=" flex flex-wrap justify-between">
            <div>
              <p
                className=" h-[40px] w-[40px] leading-[36px] text-[24px] font-semi-bold text-skin-color border-2 border-skin-color rounded-full text-center"
                href="#"
              >
                M
              </p>
            </div>
            <div class="hamburger_btn shadow-outer hover:shadow-inner transition duration-150 ease-in-out mr-4">
              <span className=" bg-skin-color"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
