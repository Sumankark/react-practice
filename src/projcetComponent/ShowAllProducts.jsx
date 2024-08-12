import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hitApi } from "./services/hitApi";

const ShowAllProducts = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();

  let getProduct = async () => {
    try {
      let output = await hitApi({
        method: "GET",
        url: "/products",
      });
      setProduct(output.data.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  let handleView = (value) => {
    return () => {
      navigate(`/products/${value._id}`);
    }
  };
  let handleUpdate = (value) => {
    return () => {
      navigate(`/products/update/${value._id}`);
    }
  };
  let handleClick = ()=>{
    console.log("Button is clicked")
  }
  let deleteProduct = (value) => {
    return async () => {
      try {
        let output = await hitApi({
          method: "DELETE",
          url: `/products/${value}`,
        });
        getProduct();
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  return (
    <div>
      {product.map((value, i) => {
        return (
          <div key={i} style={{ border: "solid red 5px", margin: "20px" }}>
            <img
              alt="product img"
              src={value.productImage}
              style={{ width: "90px", height: "90px" }}
            ></img>
            <p>Name: {value.name}</p>
            <p>Price: {value.price}</p>
            <p>Quantity: {value.quantity}</p>
            <p>Company: {value.company}</p>
            <button style={{ marginRight: "20px" }} onClick={handleView(value)}>
              view
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={handleUpdate(value)}
            >
              update
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={deleteProduct(value)}
            >
              delete
            </button>

            <button onClick={handleClick}>Click be</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllProducts;
