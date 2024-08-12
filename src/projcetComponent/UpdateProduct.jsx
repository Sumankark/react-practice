import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import { hitApi } from "./services/hitApi";

const UpdateProduct = () => {
    let [product, setProduct] = useState({});
    let navigate = useNavigate();
    let params = useParams()
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
  
  let onSubmit = async(values, other) => {
    try {
      let output = await hitApi({
        method: "PATCH",
        url: `/products/${id}`,
        data: values,
    })
    navigate(`/products/${id}`)
    } catch (error) {
      console.log(error.message)
    }
    
  };



  
  return (
    <div>
      <ProductForm
      buttonName="Update Product"
      onSubmit={onSubmit}
      product = {product}
      ></ProductForm>
    </div>
  );
};

export default UpdateProduct;
