import React from "react";
import { useState } from "react";
import {
  IoSearchOutline,
  IoCartOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

function Footer() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div className="absolute mt-20 w-screen">
        {/* Go Up */}
        <section className="bg-gray-700 flex justify-center">
          <IoArrowUpCircleOutline
            color="#d1d1d1"
            size={60}
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </section>

        {/* Footer */}
        <div className="bg-gray-900 h-80 px-80 flex py-10">
          <div className="text-white flex-1 ">
            <h1 className="font-bold text-lg ">مای شاپ | My Shop</h1>
            <p className=" text-sm">تلفن پشتیبانی 0000</p>
            <p className=" text-sm">درباره مجموعه</p>
          </div>
          <div className="text-white flex-1">
            <h1 className="font-bold text-lg"> اخبار مجموعه</h1>
          </div>
          <div className="text-white flex-1 ">
            <h1 className="font-bold text-lg">راهنمای مشتریان</h1>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black px-60 text-white text-center items-center py-4">
        Copy Right 2022@
        </div>
      </div>
    </>
  );
}

export default Footer;
