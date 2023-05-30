import React, { useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 3000,
});


instance.interceptors.request.use(
/*
function(){
 
}*/

  function (config) {
    Object.assign(config.headers);
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  } 
);

instance.defaults.timeout = 5000;
const instance1 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
});

export default instance;
export { instance1 };
