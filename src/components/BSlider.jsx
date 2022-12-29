import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";
import { useState } from "react";

function BSlider() {
  const [show, setShow] = useState(false)
  const images = [
    require("../assests/1.jpg"),
    require("../assests/2.jpg"),
    require("../assests/3.jpg"),
  ];
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 1,
      loop: true,
      transitionDuration: 1000,
      transitionTimingFunction: "ease",
      enableAutoplay: true,
      autoplayDirection: "to left",
      stopAutoplayOnInteraction: true,
      draggable: true,
      enablePagination: true,
    },
  });

  return (
    <div className="relative mt-[7%] blaze-slider" ref={ref}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            {images.map((image, ind) => (
              <img
                key={ind}
                src={image}
                className={`h-96 w-screen inline-block z-1 shadow-inner `}
                onMouseEnter={()=>setShow("block")}
                onMouseLeave={()=>setShow("hide")}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-10 " onMouseEnter={()=>setShow("block")}>
          <a
            href="#"
            className={`${show} blaze-prev inline-flex items-center py-1 px-4 text-sm text-gray-400 bg-gray-100 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            <svg
              className=" w-5 h-5 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </a>

          <a
            href="#"
            className={`${show} blaze-next inline-flex items-center py-1 px-4 text-sm text-gray-400 bg-gray-100 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            <svg
              className=" w-5 h-5 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

          <div className="absolute bottom-2 right-[3.95rem] flex justify-center">
            <div className="blaze-pagination"></div>
          </div>
      </div>
    </div>
  );
}

export default BSlider;
