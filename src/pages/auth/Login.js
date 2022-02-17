import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
// import { AiFillFacebook } from "react-icons/ai";
import "../landing/style.css";
export default function Login() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.apiloading);
  const dispatch = useDispatch();
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <div className="flex  justify-center pt-6 lg:py-20  items-center  ">
        <div className="inline-block w-full pt-15 max-w-2xl p-6 md:px-14 py-16 my-8 overflow-hidden text-left align-middle transition-all lg:border transform bg-white lg:card-shadow rounded-2xl">
          <h3 className="text-2xl tracking-tighter border-b pb-8 my-10 border-blue-500 border-opacity-10 lg:pb-0 lg:border-0 text-textPrimaryColor lg:text-4xl text-center  leading-6 text-gray-900">
            Login to your Account
          </h3>
          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols gap-5  ">
              <input
                type="text"
                required
                id="textbox"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
                className="w-full outline-none text-sm focus-none py-5 lg:py-4  p-3 rounded-lg"
                placeholder="Enter your email"
                style={{ background: "#eff0f5" }}
              />

              <input
                type="password"
                required
                id="passwordbox"
                name="password"
                value={form.password}
                onChange={(e) => handleChange(e)}
                className="w-full text-sm py-5 lg:py-4 focus-none  outline-none  p-3 rounded-lg "
                placeholder="Enter your password"
                style={{ background: "#eff0f5" }}
              />

              <div className="mt-4 mb-7">
                <button
                  type="submit"
                  className="flex w-full p-3 justify-center items-center text-white  text-base font-medium  bg-textPrimaryColor border border-transparent rounded-bl-full rounded-tl-full rounded-br-full hover:bg-buttonPrimary  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  {loading ? (
                    <>
                      <span>Continue</span>
                      <img
                        src="/assets/loading.svg "
                        className="w-8"
                        alt="loading"
                      />
                    </>
                  ) : (
                    <span>Continue</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          <p className="text-textPrimaryColor text-center text-md px-10 ">
            Don't have an account? <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </>
  );
}
