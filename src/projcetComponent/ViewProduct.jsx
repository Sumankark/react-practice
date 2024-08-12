import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hitApi } from "./services/hitApi";

const ViewProduct = () => {
  let [product, setProduct] = useState("");
  let params = useParams();
  let id = params.id;

  let getProduct = async () => {
    try {
      let output = await hitApi({
        method: "GET",
        url: `/products/${id}`,
      });
      
      setProduct(output.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <img
        alt="product img"
        src={product.productImage}
        style={{ width: "300px", height: "150px" }}
      ></img>
      <p>Product Name : {product.name}</p>
      <p>Product quantity: {product.quantity}</p>
      <p>Company Name : {product.company}</p>
      <p>
        Manufacture Date :{" "}
        {new Date(product.manufactureDate).toLocaleDateString()}
      </p>
      <p>Is in featured: {product.featured ? "yes" : "no"}</p>
    </div>
  );
};

export default ViewProduct;
