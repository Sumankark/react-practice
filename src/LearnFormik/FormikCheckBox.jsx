import { Field } from "formik";
import React from "react";

const FormikCheckBox = ({ name, label, onChange, required, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>{label}: </label>

              <input
                {...field}
                {...props}
                type="checkbox"
                id={name}
                onChange={onChange ? onChange : field.onChange}
                checked={meta.value}
              />
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikCheckBox;
