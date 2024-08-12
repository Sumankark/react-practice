import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import {
  useReadProductByIdQuery,
  useUpdatedProductMutation,
} from "./services/api/productService";

const UpdateProductUsingRTK = () => {
  let [product, setProduct] = useState({});
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  let [
    UpdateProduct,
    {
      isLoading: isLoadingUpdateData,
      isSuccess: isSuccessUpdateData,
      isError: isErrorUpdateData,
      error: errorUpdateData,
      data: dataUpdateData,
    },
  ] = useUpdatedProductMutation();

  useReadProductByIdQuery(id);

  useEffect(() => {
    if (isSuccessUpdateData) {
      console.log("Successfully Updated.");
    }
  }, [isSuccessUpdateData]);
  useEffect(() => {
    if (isErrorUpdateData) {
      console.log(errorUpdateData.error);
    }
  }, [isErrorUpdateData, errorUpdateData]);

  let onSubmit = async (values, other) => {
    UpdateProduct({ id: id, body: values });
    navigate(`/product/${id}`);
    // try {
    //   let output = await hitApi({
    //     method: "PATCH",
    //     url: `/products/${id}`,
    //     data: values,
    // })
    // navigate(`/products/${id}`)
    // } catch (error) {
    //   console.log(error.message)
    // }
  };

  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        product={product}
        isLoading={isLoadingUpdateData}
      ></ProductForm>
    </div>
  );
};

export default UpdateProductUsingRTK;
