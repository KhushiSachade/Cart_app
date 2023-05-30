import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../App";
import Loader from "react-loader-spinner";
import HashLoader from "react-spinners/HashLoader";

function ListProducts() {
  const navigate = useNavigate();

  const products = useContext(data);

  const [addBtn, setAddBtn] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const addToCart = (productData, productId) => {
    setCartData([...cartData, productData]);
    console.log("id", cartData.includes(productId));
  };
  return (
    <>
      {loader ? (
        <HashLoader color="#FB9902" style={{ backgroundColor: "#FEFE33" }} />
      ) : (
        <section className="h-100" style={{ backgroundColor: "#616161" }}>
          <div className="container py-5">
            <div className="d-flex justify-content-between flex-row text-left mb-3">
              <button
                type="button"
                className="btn position-relative"
                style={{
                  backgroundColor: "#FEFE33",
                  color: "#52527a",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  navigate("/add", {
                    state: {
                      cartData: cartData,
                    },
                  });
                }}
              >
                Add Product ➕
              </button>
              <button
                type="button"
                className="btn position-relative"
                style={{
                  backgroundColor: "#FEFE33",
                  color: "#52527a",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  navigate("/cart", {
                    state: {
                      cartData: cartData,
                    },
                  });
                }}
              >
                Cart 🛒
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartData.length}
                </span>
              </button>
            </div>
            <div className="d-flex flex-row-reverse text-right mb-3">
              
            </div>
            <div className="row">
              {products.map((item) => (
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
                  <div
                    className="card"
                    style={{
                      backgroundColor: "white",
                      color: "#FB9902",
                      //height: "650px",
                      margin: "5px",
                      padding: "10px",
                      height: "450px",
                      overflow: "auto",
                    
                    }}
                  >
                    <div className="d-flex justify-content-between p-3">
                      <p
                        className="lead mb-0"
                        style={{ color: "#FB9902", fontWeight: "bold" }}
                      >
                        Product ID &nbsp; {item.id}
                      </p>
                    </div>
                    <img
                      src={item.image}
                      className="card-img-top"
                      style={{ height: "250px" }}
                      alt="Laptop"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a
                            href="#!"
                            className="text"
                            style={{ color: "#52527a" }}
                          >
                            {item.category}
                          </a>
                        </p>
                        <p className="mb-0" style={{ color: "#52527a" }}>
                          Brand
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                        <h5 className="mb-0">${item.price}</h5>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <p className=" mb-0" style={{ color: "#52527a" }}>
                          Description: {item.description}{" "}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        {cartData.find((e) => e.id === item.id) ? (
                          <button
                            type="button"
                            className="btn position-relative"
                            style={{
                              backgroundColor: "#FEFE33",
                              color: "#52527a",
                              fontWeight: "bold",
                            }}
                          >
                            Added ✔️
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn position-relative"
                            //clicked = {clicked[item.id]}
                            id={`clicked${item.id}`}
                            onClick={() => addToCart(item, item.id)}
                            style={{
                              backgroundColor: "#FEFE33",
                              color: "#52527a",
                              fontWeight: "bold",
                            }}
                            //style={{ backgroundColor: "#F7E9D4" }}
                          >
                            Add to cart ➕
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ListProducts;
