import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikSelect from "./FormikSelect";
import FormikCheckBox from "./FormikCheckBox";
import FormikTextArea from "./FormikTextArea";

const FormikTutorial = () => {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    age: "",
    gender: "male",
    country: "nepal",
    isMarried: false,
    description: "",
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    firstName: yup
      .string()
      .required("Full Name field is Required.")
      .min(5, "Must be at least 5 character.")
      .max(15, "Must be at most 15 character.")
      .matches(/^[a-zA-Z ]*$/, "Only alphabet and space are allowed."),
    email: yup.string().required("Email field is required.")
    .matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, "Email is not valid.")
    .matches(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/, "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
    password: yup.string().required("Password field is required."),
    phoneNumber: yup.string().required("Phone Number field is required.").min(10, "Must be at least 10 character.").max(10, "Must be at most 10 character.").matches(/^[0-9]+$/, "Only number are allowed."),
    age: yup.number().required("Age field is required.").min(18, "Age must be more than 17"),
    gender: yup.string().required("Gender field is required"),
    counter: yup.string().required("Country field is required."),
    isMarried: yup.boolean(),
    description: yup.string(),
  });

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
      value: "other",
    },
  ];

  let country = [
    {
      label: "Select Country",
      value: "",
      disabled: true,
    },
    {
      label: "Nepal",
      value: "nepal",
    },
    {
      label: "India",
      value: "india",
    },
    {
      label: "China",
      value: "china",
    },
    {
      label: "America",
      value: "america",
    },
  ];

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
                name="fullName"
                label="Full Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("fullName", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke" }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="password"
                label="Password"
                type="password"
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="phoneNumber"
                label="Phone Number"
                type="string"
                onChange={(e) => {
                  formik.setFieldValue("phoneNumber", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="age"
                label="Age"
                type="number"
                onChange={(e) => {
                  formik.setFieldValue("age", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke" }}
                required={true}
                options={genderOption}
              ></FormikRadio>

              <FormikSelect
                name="country"
                label="Country"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke" }}
                required={true}
                options={country}
              ></FormikSelect>

              <FormikCheckBox
                name="isMarried"
                label="Is Married"
                onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }}
                style={{ backgroundColor: "whitesmoke" }}
                options={genderOption}
              ></FormikCheckBox>

              <FormikTextArea
                name="description"
                label="description"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
                style={{ backgroundColor: "whitesmoke", marginLeft: "90px" }}
              ></FormikTextArea>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikTutorial;
