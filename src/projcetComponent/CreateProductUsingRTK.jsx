import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import { useCreateProductMutation } from "./services/api/productService";

const CreateProductUsingRTK = () => {
  let navigate = useNavigate();

  let [
    CreateProduct,
    {
      isLoading: isLoadingCreateData,
      isSuccess: isSuccessCreateData,
      isError: isErrorCreateData,
      error: errorCreateData,
      data: dataCreateData,
    },
  ] = useCreateProductMutation;

  useEffect(() => {
    if (isSuccessCreateData) {
      console.log("Successfully created.");
    }
  }, [isSuccessCreateData]);
  useEffect(() => {
    if (isErrorCreateData) {
      console.log(errorCreateData.error);
    }
  }, [isErrorCreateData, errorCreateData]);

  let onSubmit = async (values, other) => {
    let body = values;
    CreateProduct(body);
    navigate("/products");
    // try {
    //   let output = await hitApi({
    //     method: "POST",
    //     url: "/products",
    //     data: values,
    //   });
    //   navigate("/products")
    //   console.log(output);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateData}
      ></ProductForm>
    </div>
  );
};

export default CreateProductUsingRTK;
