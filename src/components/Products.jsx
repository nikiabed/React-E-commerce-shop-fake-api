import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {IoStar} from "react-icons/io5";

function Products({ category }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [row, setRow] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    const filtered = data.filter((el) => el["category"] === category);
    if (filtered.length > 4) {
      setRow("2");
    } else {
      setRow("1");
    }
  }, []);

  const capiFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (!!data && data.length > 0) {
    return (
      <div>
        <h1 className="text-center px-60 mt-20 mb-10 text-lg font-bold">
          {capiFirstLetter(category)}
        </h1>
        <section
          className={`font-yekan px-48 my-2 grid grid-cols-4 grid-rows-${row}  mb-0`}
        >
          {data
            .filter((p) => p["category"] === category)
            .map((filteredObj, ind) => (
              <>
                <figure
                  key={ind}
                  className="p-8 border last:border-l-2 rounded-sm hover:shadow-2xl cursor-pointer hover:bg-white hover:text-gray-900"
                >
                  <img src={filteredObj.image} className="w-80 h-60 p-4" />
                  <div className="text-gray-700 py-2 px-4 text-center">
                    {filteredObj.title}
                  </div>
                  <p className=" p-2 flex content-center">
                    <div className="mt-[2%] pl-2"><IoStar color="yellow" /></div>
                    <p>{filteredObj.rating.rate}</p>
                  </p>
                  <p className="text-left px-4 py-2">
                    {" "}
                    {filteredObj.price * 10000} تومان
                  </p>
                </figure>
              </>
            ))}
        </section>
      </div>
    );
  } else {
    return <p>API did not provided any product, try again.</p>;
  }
}

export default Products;
