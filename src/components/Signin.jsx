import React from "react";
import { useState , useEffect} from "react";
import Nav from "./Nav";
import swal from "sweetalert";


function Signin() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setLogged] = useState(false);
  const [catArr, setCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  

  async function loginUser(credentials) {
    return fetch("https://www.mecallapi.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      setLogged(true);
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };



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

  return (
    <>
      <div className="bg-yellow-100 h-screen ">
        <Nav isLogged={isLogged} categories={catArr}/>

        <div className="absolute top-48 right-[35%] w-96 shadow-lg bg-white">
          <form onSubmit={handleSubmit}>
            <header className="font-yekan font-bold p-8 text-lg bg-yellow-300">
              <h1> ورود به سایت</h1>
            </header>
            <div className="p-8">
              <div className="p-4">نام کاربری</div>
              <input
                type="email"
                className="w-[90%] p-2 bg-gray-100 rounded "
                placeholder="ایمیل"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="p-4">رمز ورود</div>
              <input
                type="password"
                className="w-[90%] p-2 bg-gray-100 rounded "
                placeholder="رمز"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mb-16">
              <button className="bg-gray-200 rounded py-2 px-4" type="submit">
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Signin;
