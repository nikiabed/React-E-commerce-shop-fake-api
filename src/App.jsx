import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect } from "react";
import BSlider from "./components/BSlider";
import Products from "./components/Products";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [catArr, setCat] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(true);
        json.map((el) => {
          const categ = el["category"];
          if (!catArr.includes(categ)) {
            catArr.push(categ);
          }
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const lo = localStorage.getItem === null

  return (
    <>
      {!!data && (data.length > 0) ? (
        <div className="overflow-hidden">
          <Nav categories={catArr} isLogged={!lo}/>
          <BSlider />

          {catArr.map((el, ind) => (
            <Products category={el} key={ind} />
          ))}
          <Footer />
        </div>
      ) : (
        <p>Api Error</p>
      )}
    </>
  );
}

export default App;
