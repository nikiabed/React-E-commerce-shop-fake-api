import React, { useState } from "react";
import {
  IoSearchOutline,
  IoCartOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav({ isLogged, categories }) {
  const [isShow, setShow] = useState(false);


  const capiFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <nav className="font-vazir fixed w-screen z-10 top-0">
        <header className="text-gray-800 flex items-center bg-gray-50 py-2 px-4">
          <img
            src={require("../assests/logo.png")}
            alt="my-shop-logo"
            className="object-contain h-10 w-10"
          />
          <h1 className="font-bold flex-2 px-2">
            <Link to={"/"}>My Shop</Link>
          </h1>
          <div className="flex-1 px-10">
            <div className="flex">
              <button className=" flex justify-end items-center p-3 bg-yellow-300 hover:bg-yellow-400">
                <IoSearchOutline size={17} />
              </button>
              <input
                className="rounded p-2 outline-none w-80 transition-all transition-width delay-300 duration-700 shadow hover:w-full hover:shadow-md focus:shadow-md focus:w-full"
                type="text"
                placeholder="جستجو..."
              />
            </div>
          </div>

          {!isLogged && (
            <div className="flex-2 flex justify-end pl-10">
              <button className="text-sm bg-yellow-300 font-semibold text-gray-500 py-1 px-5 hover:bg-yellow-400 hover:text-gray-900 mx-1">
                <Link to={"/signin"}>ورود</Link>
              </button>
              <button className="text-sm bg-yellow-300 font-semibold text-gray-500 py-1 px-5 hover:bg-yellow-400 hover:text-gray-900">
                ثبت نام
              </button>
            </div>
          )}
          {isLogged && <button onClick={()=>localStorage.clear()}><Link to={"/signin"} className="px-4 mx-16 py-1 hover:bg-yellow-300">خروج</Link></button>}
        </header>

        {/* DropDown */}
        <div className="flex text-sm bg-gray-100 text-gray-500 px-5 shadow-sm">
          <div className="flex-1">
            <button
              className="p-4 hover:bg-yellow-400 flex-2 font-semibold text-black"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              دسته‌بندی کالاها
            </button>
            <button className="p-4 hover:bg-yellow-400 flex-2">
              پرفروش‌ترین‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ها
            </button>
            <button className="p-4 hover:bg-yellow-400 flex-2">
              تخفیف‌‌دارها
            </button>
            <button className="p-4 hover:bg-yellow-400 flex-2">
              محبوب‌ترین‌ها
            </button>
          </div>
          <div className="flex-2 flex justify-self-end py-2 px-20 cursor-pointer">
            <IoCartOutline size={30} className="flex-1" />
          </div>
        </div>

        {isShow && (
          <div
            className="fixed bg-black text-gray-500 absolute top-[6.75rem] bottom-0 right-0 left-0 z-50 h-screen bg-opacity-60 flex "
            
          >
            <section className="bg-white text-gray-500 flex flex-col w-96 mr-2 flex-2 h-96" onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
              {categories.map((el) => (
                <>
                  <button className="py-4 px-10 text-right hover:bg-yellow-300">
                    {capiFirstLetter(el)}
                  </button>
                </>
              ))}
            </section>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
