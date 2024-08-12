import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikCheckBox from "../LearnFormik/FormikCheckBox";
import FormikInput from "../LearnFormik/FormikInput";
import FormikSelect from "../LearnFormik/FormikSelect";
import htmlDateFormat from "./Project.utils/htmlDateFormat";
import { companyOptions } from "./config/config";

const ProductForm = ({
  buttonName = "Create Product",
  onSubmit = () => {},
  product = {},
  isLoading = false,
}) => {
  /* let initialValues = {
    name: "",
    quantity: 0,
    price: 0,
    featured: false,
    productImage: "",
    manufactureDate: htmlDateFormat(new Date()),
    company: "apple",
  }; */
  console.log(product);
  let initialValues = {
    name: product.name || "",
    quantity: product.quantity || 1,
    price: product.price || 100,
    featured: product.featured || false,
    productImage: product.productImage || "",
    manufactureDate: htmlDateFormat(product.manufactureDate || new Date()),
    company: product.company || "apple",
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is Required."),
    quantity: yup.number().required("Quantity is Required."),
    price: yup.number().required("Price is Required."),
    featured: yup.boolean(),
    productImage: yup.string().required("ProductImage is required."),
    manufactureDate: yup.string().required("Manufacture date is required."),
    company: yup.string().required("Company is required."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="name"
                label="Name"
                type="text"
                required={true}
              ></FormikInput>

              <FormikInput
                name="quantity"
                label="Quantity"
                type="number"
                required={true}
              ></FormikInput>

              <FormikInput
                name="price"
                label="Price"
                type="number"
                required={true}
              ></FormikInput>

              <FormikCheckBox name="featured" label="Featured"></FormikCheckBox>

              <FormikInput
                name="productImage"
                label="Product Image"
                type="text"
                required={true}
              ></FormikInput>

              <FormikInput
                name="manufactureDate"
                label="Manufacture Date"
                type="date"
                required={true}
              ></FormikInput>

              <FormikSelect
                name="company"
                label="Company Name"
                options={companyOptions}
                required={true}
              ></FormikSelect>

              <button type="submit">
                {isLoading ? (
                  <div>{buttonName}...</div>
                ) : (
                  <div>{buttonName}</div>
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductForm;
