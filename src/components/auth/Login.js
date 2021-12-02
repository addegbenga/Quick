import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Login({ setIsOpen, isOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed flex items-center justify-center inset-0 z-30 "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full pt-10 max-w-lg p-6 md:px-10 py-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-textPrimaryColor lg:text-4xl text-center mb-6 font-semibold font-medium leading-6 text-gray-900"
                >
                  Sign in
                </Dialog.Title>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    style={{ background: "#fef0dd" }}
                    className=" flex p-4 rounded-lg text-textPrimaryColor  font-medium"
                  >
                    <FcGoogle cl size={24} />
                    Google
                  </button>
                  <button
                    style={{ background: "#e5f7fe" }}
                    className="bg-green-100 rounded-lg text-textPrimaryColor font-medium"
                  >
                    Facebook
                  </button>
                </div>
                <p className="text-center text-textPrimaryColor text-opacity-80 text-lg my-5">
                  or
                </p>
                <div>
                  <form className="grid grid-cols gap-3 ">
                    <label htmlFor="textbox">
                      <input
                        type="text"
                        id="textbox"
                        className="w-full outline-none  p-3 rounded-lg"
                        placeholder="Enter your email"
                        style={{ background: "#eff0f5" }}
                      />
                    </label>
                    <label htmlFor="passwordbox">
                      <input
                        type="password"
                        id="passwordbox"
                        className="w-full outline-none  p-3 rounded-lg "
                        placeholder="Enter your password"
                        style={{ background: "#eff0f5" }}
                      />
                    </label>
                  </form>
                </div>

                <div className="mt-4 mb-7">
                  <button
                    type="button"
                    className="inline-flex w-full p-4 justify-center text-white  text-base font-medium  bg-textPrimaryColor border border-transparent rounded-bl-full rounded-tl-full rounded-br-full hover:bg-buttonPrimary  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Continue
                  </button>
                </div>

                <p className="text-textPrimaryColor text-center text-xs px-10 ">
                  By clicking the Continue button, you agree to the terms of
                  service and privacy policy.
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
