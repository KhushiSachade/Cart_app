import React, { useContext } from "react";
import { data } from "../App";

function Home() {
  const products = useContext(data);
  console.log(products);

  return (
    <>
      
      <div>
        <ul>
          {products.map((item) => (
            <li>{item.id}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
