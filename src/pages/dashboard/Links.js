import React, { useEffect, useRef } from "react";
import Subnavbar from "../../components/dashboard/Subnavbar";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addLink,
  getAllLink,
  editLink,
  deleteProfile,
} from "../../actions/profileAction";
// import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import PreviewModal from "../../components/dashboard/PreviewModal";
import { IoEyeSharp } from "react-icons/io5";
import { VscTrash } from "react-icons/vsc";
import { useDebouncedCallback } from "use-debounce";
import MyModal from "../../utils/uploadModal";
import {
  // AiOutlineNodeIndex,
  AiOutlineAppstoreAdd,
  AiFillThunderbolt,
  AiOutlinePicture,
  AiOutlineStar,
} from "react-icons/ai";
import { MdInsights } from "react-icons/md";
import "./style.css";

import { useState } from "react";
import { toast } from "react-toastify";
// import { Switch } from "@headlessui/react";

export default function Links() {
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.apiloading);
  const dispatch = useDispatch();
  // const [enableds, setEnabled] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const viewRef = useRef(null);
  const [myForms, setMyForms] = useState(profile);
  const [currentLinkId, setCurrentLinkId] = useState();

  const debouceUrl = (linkurl, id) => {
    dispatch(editLink({ linkurl: linkurl, linkId: id }));
    dispatch(getAllLink());
  };
  const debouceTitle = (title, id) => {
    dispatch(editLink({ title: title, linkId: id }));
    dispatch(getAllLink());
  };
  const deboucePublished = useDebouncedCallback(
    (published, id, item) => {
      const URL =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
      let schema = Yup.object().shape({
        name: Yup.string().matches(URL).required(),
        title: Yup.string().required(),
      });
      schema
        .isValid({
          name: item.linkurl,
          title: item.title,
        })
        .then(function (valid) {
          if (!valid) {
            return toast.error("Enter valid link/title");
          }
          dispatch(editLink({ published: published, linkId: id }));
          dispatch(getAllLink());
        });
    },
    1000
    // { maxWait: 2000 }
  );

  useEffect(() => {
    dispatch(getAllLink());
  }, [dispatch]);

  useEffect(() => {
    setMyForms(profile);
  }, [profile]);

  const handleModalClose = () => {
    setOpenPreview(false);
  };

  const handleDropDownOpen = (item) => {
    const enabled = true;
    const deleteDrop = false;
    setMyForms((current) =>
      current.map((x) =>
        x._id === item._id ? { ...x, enabled, deleteDrop } : x
      )
    );
  };
  const handleDropDownClose = (item) => {
    const enabled = false;
    const deleteDrop = false;
    setMyForms((current) =>
      current.map((x) =>
        x._id === item._id ? { ...x, enabled, deleteDrop } : x
      )
    );
  };

  //functions to handle delete functions

  const handleDropDownOpenDelete = (item) => {
    const enabled = false;
    const deleteDrop = true;
    setMyForms((current) =>
      current.map((x) =>
        x._id === item._id ? { ...x, enabled, deleteDrop } : x
      )
    );
  };

  const handleAddNewLinkForm = () => {
    dispatch(addLink());
  };

  const handleDelete = (item) => {
    dispatch(deleteProfile({ id: item._id }));
  };

  const handleTitleChange = (title, id) => {
    setMyForms((current) =>
      current.map((x) => (x._id === id ? { ...x, title } : x))
    );
  };
  const handleUrlChange = (linkurl, id) => {
    setMyForms((current) =>
      current.map((x) => (x._id === id ? { ...x, linkurl } : x))
    );
  };

  return (
    <>
      <MyModal
        setMyForms={setMyForms}
        // itemId={item}
        itemId={currentLinkId}
        isOpen={openUploadModal}
        setIsOpen={setOpenUploadModal}
      />
      <PreviewModal isOpen={openPreview} closeModal={handleModalClose} />
      <div className=" w-full relative  ">
        <div className="">
          <Subnavbar />
          <div className=" px-4 py-4 bg-black  bg-opacity-5 min-h-screen link-page-body lg:py-20 lg:p-8 lg:pt-14 pb-28 overflow-y-auto  ">
            <div className="flex gap-2 lg:gap-4">
              <button
                onClick={() => handleAddNewLinkForm()}
                className="bg-indigo-600 flex items-center gap-1 justify-center px-5 w-full font-semibold rounded-lg py-3 text-white"
              >
                {loading ? (
                  <img
                    src="/assets/loading.svg"
                    className="w-7"
                    alt="loading"
                  />
                ) : (
                  <>
                    <AiOutlineAppstoreAdd size={22} /> <span>Add new Link</span>{" "}
                  </>
                )}
              </button>
              <button className="bg-black w-1/2 gap-1 flex justify-center items-center font-semibold rounded-lg px-5 py-4 text-white">
                <AiFillThunderbolt size={22} /> Explore
              </button>
            </div>

            <div className="mt-10   rounded-lg">
              {myForms && myForms.length === 0 ? (
                <div className="text-xl text-center flex flex-col items-center">
                  <p className="text-black text-opacity-60 py-6">
                    You have not added any link.
                  </p>

                  <img className="w-64" src="/assets/empty.svg" alt="empty" />
                </div>
              ) : null}
              <div ref={viewRef}>
                {myForms?.map((item, index) => (
                  <div key={item._id}>
                    <div className="mb-3 shadow-lg bg-white flex w-full rounded border bg-white">
                      <div className="w-full  p-4 pb-7">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex text-black text-opacity-100 items-center relative group ">
                            <input
                              value={item.title || ""}
                              onChange={(e) => {
                                const title = e.target.value;
                                handleTitleChange(title, item._id);
                              }}
                              onBlur={(e) => {
                                const title = e.target.value;
                                debouceTitle(title, item._id);
                              }}
                              className=" outline-none font-semibold text-opacity-80 text-black "
                              placeholder="Title"
                              type="text"
                            />
                          </div>

                          <input
                            value={item.published}
                            onChange={(e) => {
                              const enabled = e.target.checked;
                              deboucePublished(enabled, item._id, item);
                            }}
                            checked={item.published ? true : false}
                            type="checkbox"
                          />
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center text-black text-opacity-40">
                            <input
                              type="text"
                              className=" outline-none "
                              placeholder="https://yourwebsite"
                              value={item.linkurl || ""}
                              // defaultValue={item.linkurl}

                              onChange={(e) => {
                                const url = e.target.value;
                                handleUrlChange(url, item._id);
                              }}
                              onBlur={(e) => {
                                const url = e.target.value;
                                debouceUrl(url, item._id);
                              }}
                            />
                          </div>
                        </div>

                        <div className=" text-xl text-black text-opacity-50 justify-between flex">
                          <div className="flex">
                            <button
                              onClick={() => handleDropDownOpen(item)}
                              className="mr-3.5 focus:ring-2 focus:text-buttonPrimary  focus:text-opacity-80   focus:ring-black rounded relative group"
                            >
                              <AiOutlinePicture />
                              <div className="bg-black hidden  lg:flex -right-5 px-1 transition top-6 duration-300 ease-in-out rounded-lg group-hover:opacity-100  opacity-0 text-white text-xs p-1 absolute">
                                <p>Thumbnail</p>
                              </div>
                            </button>

                            <button className="mr-3.5 group w-full focus:text-buttonPrimary  focus:text-opacity-80    focus:ring-2 focus:ring-black rounded  relative">
                              <AiOutlineStar />
                              <div className="bg-black hidden lg:flex  transition duration-300 ease-in-out top-6 rounded-lg px-1 -right-10 group-hover:opacity-100 opacity-0 text-white text-xs p-1 absolute">
                                <p className="w-14">Leap link</p>
                              </div>
                            </button>

                            <button className="mr-3.5 group w-full focus:text-buttonPrimary focus:text-opacity-80  focus:ring-2 focus:ring-black rounded relative">
                              <MdInsights />
                              <div className="bg-black hidden lg:block  rounded-lg px-1 top-6 -left-4 transition duration-300 ease-in-out  -right-10  group-hover:opacity-100 opacity-0 text-white text-xs p-1 absolute">
                                <p className="w-full">Insights</p>
                              </div>
                            </button>
                          </div>

                          <button
                            className="focus:ring-2 focus:text-green-400  focus:text-opacity-80 rounded    focus:ring-black"
                            onClick={() => {
                              handleDropDownOpenDelete(item);
                            }}
                          >
                            <VscTrash />
                          </button>
                        </div>
                      </div>
                    </div>

                    {item.enabled && item.linkAvatar ? (
                      <div className="mb-6">
                        <div className="py-1 justify-center items-center relative flex">
                          <h1 className="text-center  font-bold ">
                            Add Thumbnail
                          </h1>
                          <button
                            className="absolute right-0"
                            onClick={() => handleDropDownClose(item)}
                          >
                            <AiOutlineClose size={20} />
                          </button>
                        </div>

                        <div className="bg-white gap-3 flex items-center justify-between shadow-lg rounded-lg py-4  px-3 text-center">
                          <img
                            className="h-20 border w-20"
                            src={item.linkAvatar}
                            alt="avt"
                          />
                          <div className="flex flex-col gap-2 w-full">
                            <button
                              onClick={() => {
                                setOpenUploadModal(true);
                                setCurrentLinkId(item._id);
                              }}
                              className="bg-indigo-500 text-white rounded-md p-2"
                            >
                              Change
                            </button>
                            <button
                              onClick={() => {
                                setOpenUploadModal(false);
                                setCurrentLinkId(item._id);
                              }}
                              className="bg-gray-200 rounded-md p-2"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.enabled && (
                        <div className="mb-6">
                          <div className="py-1 justify-center items-center relative flex">
                            <h1 className="text-center  font-bold ">
                              Add Thumbnail
                            </h1>
                            <button
                              className="absolute right-0"
                              onClick={() => handleDropDownClose(item)}
                            >
                              <AiOutlineClose size={20} />
                            </button>
                          </div>

                          <div className="bg-white shadow-lg rounded-lg pb-5  px-3 text-center">
                            <p className="py-3 text-sm">
                              Add a Thumbnail or icon to this Link.
                            </p>
                            <button
                              onClick={() => {
                                setOpenUploadModal(true);
                                setCurrentLinkId(item._id);
                              }}
                              className="bg-indigo-500 p-2 rounded-lg w-full text-white font-semibold"
                            >
                              Set Thumbnail
                            </button>
                          </div>
                        </div>
                      )
                    )}
                    {item.deleteDrop ? (
                      <div className="mb-6">
                        <div className="py-1 justify-center items-center relative flex">
                          <h1 className="text-center  font-bold ">Delete</h1>
                          <button
                            className="absolute right-0"
                            onClick={() => handleDropDownClose(item)}
                          >
                            <AiOutlineClose size={20} />
                          </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg pb-6  px-3 text-center">
                          <p className="py-3 lg:text-lg">
                            Delete this forever?
                          </p>
                          <div className="flex gap-3 ">
                            <button
                              onClick={() => handleDropDownClose(item)}
                              className="bg-gray-200 p-2 w-1/2 rounded-lg  text-black font-semibold"
                            >
                              cancel
                            </button>
                            <button
                              onClick={() => {
                                handleDelete(item);
                              }}
                              className="p-1.5 w-1/2 rounded-lg flex gap-3 text-white items-center justify-center text-center font-semibold bg-black"
                            >
                              {loading ? (
                                <img
                                  src="/assets/loading.svg"
                                  className="w-8"
                                  alt="loading"
                                />
                              ) : (
                                <span>Delete</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:hidden z-40 bottom-14 w-full flex justify-center ">
          {!openPreview && (
            <button
              onClick={() => setOpenPreview(true)}
              className="flex items-center gap-2 bg-gray-300 px-5 py-3 font-semibold rounded-full"
            >
              <IoEyeSharp />
              preview
            </button>
          )}
        </div>
      </div>
    </>
  );
}
