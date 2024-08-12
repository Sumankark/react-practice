import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import { hitApi } from "./services/hitApi";

const CreateProduct = () => {
  let navigate = useNavigate();
  let onSubmit = async (values, other) => {
    try {
      let output = await hitApi({
        method: "POST",
        url: "/products",
        data: values,
      });
      navigate("/products")
      console.log(output);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
      ></ProductForm>
    </div>
  );
};

export default CreateProduct;
