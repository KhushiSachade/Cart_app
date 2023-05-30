import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import instance from "./AxiosCreate";
import { instance1 } from "./AxiosCreate";

function AddProduct() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    title: "",
    price: null,
    category: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData({ ...inputData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/products", {
        title: inputData.title,
        price: inputData.price,
        category: inputData.category,
        description: inputData.description,
      })
      .then((res) => {
        console.log(res);
      });
    navigate("/");
  };

  return (
    <>
      <form className="row g-3 bg-light" autoComplete="on">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={inputData.title}
            onChange={handleInput}
          />
          <p id="warnTitle"></p>
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            id="price"
            value={inputData.price}
            onChange={handleInput}
            placeholder="$"
          />
          <p id="warnPrice"></p>
        </div>

        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            id="category"
            value={inputData.category}
            onChange={handleInput}
          />
          <p id="warncategory"></p>
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            value={inputData.description}
            onChange={handleInput}
          />
          <p id="warnState"></p>
        </div>

        <div className="col-md-6">
          <label for="img" class="form-label">
            Upload image file
          </label>
          <input
            className="form-control"
            type="file"
            id="img"
            name="inputImg"
            accept=".png, .jpg, .jpeg"
            //onChange={getUrl}
            //value={state.inputImg}
          />
          <p id="warnImg"></p>
          <img id="displayImg" class="col-md-6 img-thumbnail" />
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-primary"
            id="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
