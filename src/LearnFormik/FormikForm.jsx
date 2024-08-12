import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";

const FormikForm = () => {
  // Each field has three thing in meta
  // value: "",
  // error: "",
  // touched: false

  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    days: "",
    gender: "",
    isMarried: false,
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    firstName: yup.string().required("First Name is Required."),
    lastName: yup.string().required("lastName is Required."),
    description: yup.string().required("description field is required."),
  });

  let days = [
    {
      label: "Select Days",
      value: "",
      disabled: true,
    },
    {
      label: "Sunday",
      value: "day1",
    },
    {
      label: "Monday",
      value: "day2",
    },
    {
      label: "Tuesday",
      value: "day3",
    },
    {
      label: "Wednesday",
      value: "day4",
    },
    {
      label: "Thursday",
      value: "day5",
    },
    {
      label: "Friday",
      value: "day6",
    },
    {
      label: "Saturday",
      value: "day7",
    },
  ]


  let genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "other"
    }
  ]
  // validation will run only if
  // onChange event is fire
  // onBlur(touched) event is fire
  // onSubmit event is fire

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="firstName"
                label="First Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke" }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="lastName"
                label="Last Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("lastName", e.target.value);
                }}
              ></FormikInput>

              <FormikTextArea
                name="description"
                label="description"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke", marginLeft: "90px" }}
              ></FormikTextArea>

              <FormikSelect
                name="days"
                label="Days"
                onChange={(e) => {
                  formik.setFieldValue("days", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke", marginLeft: "90px" }}
                required={true}
                options={days}
              ></FormikSelect>

              <FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke", marginLeft: "90px" }}
                required={true}
                options={genderOption}
              ></FormikRadio>
              
              <FormikCheckBox
                name="isMarried"
                label="Is Married"  
                onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }}
                style={{ backgroundColor: "whitesmoke", marginLeft: "90px" }}
                required={true}
                options={genderOption}
              ></FormikCheckBox>

              {/*  <Field name="firstName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name: </label>
                      <input
                        {...field}
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        value={meta.value}
                        onChange={field.onChange}
                        // onChange={(e) => {
                        //   formik.setFieldValue("firstName", e.target.value);
                        // }}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="lastName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Last Name: </label>
                      <input
                        {...field}
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        value={meta.value}
                        onChange={field.onChange}
                        // onChange={(e) => {
                        //   formik.setFieldValue("lastName", e.target.value);
                        // }}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="description">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="description">Description: </label>
                      <input
                        {...field}
                        type="text"
                        id="description"
                        placeholder="Description"
                        value={meta.value}
                        onChange={field.onChange}
                        // onChange={(e) => {
                        //   formik.setFieldValue("description", e.target.value);
                        // }}
                      />
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field> */}

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
