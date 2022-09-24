import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as yup from "yup";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("Enter string format").required("required"),
    email: yup.string().email("Enter email").required("required"),
    password: yup.string().typeError("String").required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("required"),
    avatarURL: yup.string().required("required"),
  });

  //   const handleSubmit = () => {
  //     try {
  //       dispatch(registerUser({ name, email, password, avatarURL }));
  //       //clean form
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //       setAvatarURL("");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          avatarURL: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className={`from`}>
            <p>
              <label htmlFor={`name`}>Name</label>
              <br />
              <input
                className={"input"}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && (
              <p className={"error"}>{errors.name}</p>
            )}
            <p>
              <label htmlFor={`email`}>Email</label>
              <br />
              <input
                className={"input"}
                type={`text`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && (
              <p className={"error"}>{errors.email}</p>
            )}
            <p>
              <label htmlFor={`password`}>password</label>
              <br />
              <input
                className={"input"}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <p className={"error"}>{errors.password}</p>
            )}
            <p>
              <label htmlFor={`password`}>confirmPassword</label>
              <br />
              <input
                className={"input"}
                type={`password`}
                name={`confirmPassword`}
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className={"error"}>{errors.confirmPassword}</p>
            )}
            <p>
              <label htmlFor={`password`}>avatarURL</label>
              <br />
              <input
                className={"input"}
                type={`password`}
                name={`avatarURL`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.avatarURL}
              />
            </p>
            {touched.avatarURL && errors.avatarURL && (
              <p className={"error"}>{errors.avatarURL}</p>
            )}

            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
