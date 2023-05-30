import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import cart from "./cart.gif";
function FinalCart() {
  const location = useLocation();

  const [productsInCart, setProductsInCart] = useState(location.state.cartData);

  console.log(productsInCart);

  let total = 0;

  useEffect(() => {
    totalCost();
  });

  let totalCost = ()=>{
    let cost = [];
    for (let i = 0; i < productsInCart.length; i++) {
      cost.push(productsInCart[i].price);
    }
    cost.forEach((num)=>{
      total += num;
      console.log(total)
      document.getElementById('orderTotal').innerHTML = '$'+ total;
    })
    return total;
  }

  const deleteProduct = (id) => {
    const index = productsInCart.findIndex((e) => e.id == id);
    console.log(index);

    setProductsInCart(productsInCart.filter((item) => item.id !== id));

    console.log(id);

    const finalList = [...productsInCart];
    finalList.splice(index, 1);
    setProductsInCart(finalList);

    console.log(productsInCart);
  };

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#616161" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <p>
                <span className="h2" style={{ color: "#FB9902" }}>
                  Shopping Cart{" "}
                </span>
                <span className="h4" style={{ color: "#FB9902" }}>
                  ({productsInCart.length} item in your cart)
                </span>
              </p>
              {productsInCart.map((item) => (
                <div
                  className="card mb-4"
                  style={{ backgroundColor: "white", color: "#FB9902" }}
                >
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="Generic placeholder image"
                        />
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p
                            className="small text mb-4 pb-2"
                            style={{ color: "#52527a" }}
                          >
                            Product Name
                          </p>
                          <p className="lead fw-normal mb-0">{item.title}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p
                            className="small text mb-4 pb-2"
                            style={{ color: "#52527a" }}
                          >
                            Category
                          </p>
                          <p className="lead fw-normal mb-0">{item.category}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p
                            className="small text mb-4 pb-2"
                            style={{ color: "#52527a" }}
                          >
                            Quantity
                          </p>
                          <p className="lead fw-normal mb-0">1</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p
                            className="small text mb-4 pb-2"
                            style={{ color: "#52527a" }}
                          >
                            Price
                          </p>
                          <p className="lead fw-normal mb-0">${item.price}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p
                            className="small text mb-4 pb-2"
                            style={{ color: "#52527a" }}
                          >
                            Remove
                          </p>
                          <button
                            type="button"
                            className="btn position-relative"
                            onClick={() => deleteProduct(item.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {productsInCart.length == 0 ? (
                <div className="card mb-5">
                  <div className="card-body p-4">
                    <div className="justify-content-center text-center">
                      <img
                        src={cart}
                        className="rounded mx-auto d-block"
                        alt="Generic placeholder image"
                        style={{ width: "150px", height: "200px" }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card mb-5">
                  <div className="card-body p-4">
                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <span
                          className="small me-2"
                          style={{ color: "#52527a" }}
                        >
                          Order total:
                        </span>{" "}
                        <span 
                          id="orderTotal"
                          className="lead fw-normal"
                          style={{ color: "#FB9902" }}
                        >
                          
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinalCart;
