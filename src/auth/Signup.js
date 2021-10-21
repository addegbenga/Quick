import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import logo from "../assets/logoicon.svg";
import { registerUser } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import google from "../assets/image 4google.png";
import facebook from "../assets/facebook.png";
import { MyTextInput } from "../myForm";
export default function Signup() {
  const dispatch = useDispatch();
  const match = useRouteMatch("/register");
  return (
    <div
      style={{ background: "#F9F9F9", minHeight: "100vh" }}
      className="bg-red-300 "
    >
      <header className="bg-white shadow-lg border-b p-5 items-center flex justify-between fixed w-full z-10 ">
        <Link to="/">
          {" "}
          <img src={logo} className="w-5 md:hidden ml-3" alt="logo" />
        </Link>
        <ul className="md:flex justify-evenly hidden  md:w-2/4 md:m-auto text-sm">
          <li className="mr-2">Home</li>
          <li className="mr-2">Faq</li>
          <li className="mr-2">Contact us</li>
        </ul>
        <button>
          {" "}
          <i className="fa fa-bars md:hidden" />
        </button>
      </header>

      <div className=" pt-32 flex w-5/6 md:w-96 m-auto flex-col">
        <div className="flex w-2/4 justify-between mb-10 m-auto">
          <button
            className={`${
              match.isExact &&
              " border-b-2 border-neutral-secondary p-1 font-semibold"
            } font-semibold`}
          >
            <Link to="/register"> Register</Link>
          </button>
          <button className="p-1 font-semibold">
            <Link to="/login">Login</Link>
          </button>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            confirmPassword: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            //   // dispatch(registerUser(values));
            // }, 400);
            const data = {
              name: values.name,
              email: values.email,
              password: values.password,
            };
            dispatch(registerUser(data));
          }}
        >
          {(props) => (
            <Form>
              <div className="relative grid">
                <MyTextInput
                  placeholder="username"
                  type="text"
                  autoComplete="true"
                  name="name"
                  className="border w-full md:p-2 placeholder-gray-300  border-indigo-100   focus:border-indigo-300  focus:text-gray-600 focus:outline-none  p-3 pl-7  md:pl-8 rounded "
                />
                <span className="absolute left-2 top-3 md:top-2">
                  {" "}
                  <i className="fas fa-user text-gray-400"></i>
                </span>
              </div>
              <div className="relative grid mt-3">
                <MyTextInput
                  placeholder="email"
                  type="email"
                  name="email"
                  autoComplete="true"
                  className="border w-full placeholder-gray-300   border-indigo-100  focus:border-indigo-300  focus:text-gray-600 focus:outline-none p-3 md:p-2 pl-7  md:pl-8 rounded "
                />
                <span className="absolute left-2 top-3 md:top-2">
                  {" "}
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
              </div>
              <div className="relative grid mt-3">
                <MyTextInput
                  placeholder="password"
                  type="password"
                  autoComplete="true"
                  name="password"
                  className="border w-full md:p-2 placeholder-gray-300   border-indigo-100 focus:border-indigo-300  focus:text-gray-600 focus:outline-none  p-3 pl-7 md:pl-8 rounded "
                />
                <span className="absolute left-2 top-3 md:top-2">
                  {" "}
                  <i className="fas fa-lock text-gray-400 "></i>
                </span>
              </div>
              <div className="relative grid mt-3 ">
                <MyTextInput
                  placeholder="confirm password"
                  autoComplete="true"
                  type="password"
                  name="confirmPassword"
                  className="border w-full placeholder-gray-300  md:p-2 border-indigo-100 focus:border-indigo-300  focus:text-gray-600 focus:outline-none p-3 pl-7  md:pl-8 rounded "
                />
                <span className="absolute left-2 top-3 md:top-2">
                  {" "}
                  <i className="fas fa-paper-plane text-gray-400 "></i>
                </span>
                <p className="text-right mt-1 text-sm text-gray-500 hover:text-blue-500 cursor">
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                className="hover:bg-gray-900 text-sm  focus:outline-none duration-100 ease-in-out bg-neutral-normal rounded text-white w-full p-2 mt-3"
              >
                Login
              </button>
              <p className="mt-4 text-center text-gray-500 text-sm">
                or sign-in with
              </p>
              <div className="flex w-full mt-3 ">
                <button className="border border-indigo-100 flex items-center w-full p-2 mr-1 text-sm rounded text-gray-600">
                  <img src={google} alt="google" className="mr-2" />
                  Google
                </button>
                <button className="border border-indigo-100 flex items-center text-gray-600 text-sm text- w-full p-2 ml-1 rounded">
                  <img src={facebook} alt="facebook " className="mr-2 w-8" />
                  Facebook
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
