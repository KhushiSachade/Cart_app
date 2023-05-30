import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import DataState from "./context/DataState";
import axios from "axios";
import ListProducts from "./component/ListProducts";
import { Route, Routes } from "react-router-dom";
import FinalCart from "./component/FinalCart";
import instance from "./component/AxiosCreate";
import AddProduct from "./component/AddProduct";
import HashLoader from "react-spinners/HashLoader";

const data = createContext();

function App() {

  const [apiData, setApiData] = useState([]);

  instance.interceptors.request.use(
    function (config) {
      Object.assign(config.headers);
      console.log(config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.request.use(() => {
    <HashLoader color="#FB9902" />;
  });

  useEffect(() => {
    
    instance.get("/products").then((res) => {
      console.log(res.data);
      setApiData(res.data);
    });

    instance.get("/products/1").then((res) => {
      console.log(res);
    });

    /* fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));*/
  }, []);

  const name = "abcd";
  return (
    <>
      <data.Provider value={apiData}>
        <Routes>
          <Route exact path="/" Component={ListProducts} />
          <Route exact path="/cart" Component={FinalCart} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/add" Component={AddProduct} />
        </Routes>
      </data.Provider>
    </>
  );
}

export default App;
export { data };
