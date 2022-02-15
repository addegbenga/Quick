import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { editLink, getAllLink } from "../actions/profileAction";

export default function MyModal({ isOpen, setIsOpen, itemId }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.apiloading);
  const handleIconsUpload = async (e) => {
    let myform = new FormData();
    myform.append("file", e.target.files[0]);
    myform.append("id", itemId);
    await dispatch(editLink(myform));
    dispatch(getAllLink());
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsOpen(false)}
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
              <Dialog.Overlay className="fixed bg-black bg-opacity-70 inset-0" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 pb-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-between items-center border-b pb-5 mb-8 mt-3">
                  <h3 className="text-xl font-semibold">Add Thumbnail</h3>
                  <button onClick={() => setIsOpen(false)}>
                    {" "}
                    <FaTimes />
                  </button>
                </div>
                <div>
                  <div className="flex w-full items-center gap-4 justify-between">
                    <div className="h-14 rounded w-14 bg-indigo-500"></div>
                    <div>
                      <h1>Upload your own Thumbnail</h1>
                      <p className="text-sm text-black text-opacity-70">
                        From your computer, Facebook, Instagram or Google Drive
                      </p>
                    </div>
                  </div>
                  <input
                    onChange={(e) => handleIconsUpload(e)}
                    type="file"
                    value=""
                    className="my-4"
                  />
                  {loading && (
                    <button
                      type="button"
                      className="bg-indigo-500 flex items-center gap-1 text-white p-2 "
                      disabled
                    >
                      <CgSpinner className="animate-spin" />
                      <span className="text-xs"> Processing...</span>
                    </button>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
