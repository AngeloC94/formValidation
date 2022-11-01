import React from "react";
import { useFormik } from "formik";
import "../App.css";
import FormImage from "../cool-background.png";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Form() {
  //Formik logics
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },
    //validate form

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    //Submit form
    onSubmit: (values) => {
      console.log(values);
      navigate({pathname: "/success", query: values})
    },
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <main className="h-screen w-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-w1/2 mx-28"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2">Let's get started! 🚀</h1>
            <p className="text-lg text-gray-500">
              Join our platform today and unlock over 170+ courses and nice
              stuff!
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2
                 ${
                   formik.touched.email && formik.errors.email
                     ? "text-red-400"
                     : ""
                 }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  name="country"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 "
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Italy</option>
                </select>
              </div>
              {/* Terms of service */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2
                 ${
                   formik.touched.terms && formik.errors.terms
                     ? "text-red-400"
                     : ""
                 }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 "
                  />
                  <p className="text-lg text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold to bad people
                  </p>
                </div>
              </div>
              
                <button
                  type="submit"
                  className="font-bold text-sm text-white py-3 mt-6 rounded-lg w-full"
                  style={{ backgroundColor: "#4286f4" }}
                >
                  Start learning new Stuff!
                </button>
              
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src={FormImage}
              className="rounded-lg bg-auto h-full "
              alt="form"
            />
          </div>
        </form>
      </main>
    </motion.div>
  );
}

export default Form;
