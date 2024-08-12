import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllProduct = () => {
  let [products, setProduct] = useState([]);
  console.log(products);
  let navigate = useNavigate();

  let getAllProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products`,
      method: `GET`,
    });
    console.log(result);
    setProduct(result.data.result);
  };

  let deleteProduct = async (product) => {
    let result = await axios({
      url: `http://localhost:8000/products/${product._id}`,
      method: `DELETE`,
    });

    getAllProduct();
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      {products.map((value, i) => {
        return (
          <div key={i} style={{ border: "solid red 5px", margin: "20px" }}>
            <p>Name: {value.name}</p>
            <p>Price: {value.price}</p>
            <p>Quantity: {value.quantity}</p>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/products/${value._id}`);
              }}
            >
              view
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/products/update/${value._id}`);
              }}
            >
              update
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                deleteProduct(value);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
