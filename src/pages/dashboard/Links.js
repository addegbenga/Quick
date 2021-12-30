import React, { useEffect, useRef } from "react";
import Subnavbar from "../../components/dashboard/Subnavbar";
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
import { Switch } from "@headlessui/react";

export default function Links() {
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.apiloading);
  const dispatch = useDispatch();
  const [enableds, setEnabled] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const viewRef = useRef(null);

  const [myForms, setMyForms] = useState(profile);
  const debouceTitle = useDebouncedCallback(
    (title, id) => {
      dispatch(editLink({ title: title, linkId: id }));
      dispatch(getAllLink());
    },
    1000
    // { maxWait: 2000 }
  );
  const debouceUrl = useDebouncedCallback(
    (linkurl, id) => {
      dispatch(editLink({ linkurl: linkurl, linkId: id }));
      dispatch(getAllLink());
    },
    1000
    // { maxWait: 2000 }
  );

  // eslint-disable-next-line no-unused-vars
  // const MyToggle = (props) => (
  //   <Switch
  //     checked={enableds}
  //     onChange={setEnabled}
  //     className={`${
  //       enableds ? "bg-indigo-500" : "bg-gray-200"
  //     } relative inline-flex items-center h-5 rounded-full w-9`}
  //   >
  //     <span className="sr-only">Enable notifications</span>
  //     <span
  //       className={`${
  //         props.enabled ? "translate-x-5" : "translate-x-1"
  //       } inline-block w-3.5 h-3.5 transform bg-white rounded-full`}
  //     />
  //   </Switch>
  // );

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
    // if (!loading) {
    //   viewRef.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //     inline: "nearest",
    //   });
    // }
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
      <PreviewModal isOpen={openPreview} closeModal={handleModalClose} />
      <div className="   w-full relative  ">
        <div className="">
          <Subnavbar />
          <div
            style={{ height: "70vh" }}
            className=" px-4 py-4 bg-black bg-opacity-5 link-page-body lg:py-0 lg:p-8 lg:pt-14 pb-28 overflow-y-auto  "
          >
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
              <div ref={viewRef}>
                {myForms?.map((item, index) => (
                  <div key={index}>
                    <div className="mb-3 shadow-lg bg-white flex w-full rounded border bg-white">
                      <div className="w-full  p-4 pb-7">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex text-black text-opacity-100 items-center relative group ">
                            <input
                              value={item.title || ""}
                            
                              onChange={(e) => {
                                const title = e.target.value;
                                handleTitleChange(title, item._id);
                                debouceTitle(title, item._id);
                              }}
                              className=" outline-none font-semibold text-opacity-80 text-black "
                              placeholder="Title"
                              type="text"
                            />
                          </div>

                          <input
                            value={item.enabled}
                            onChange={(e) => {
                              const enabled = e.target.checked;
                              console.log(enabled);
                              setMyForms((current) =>
                                current.map((x) =>
                                  x.id === item.id ? { ...x, enabled } : x
                                )
                              );
                            }}
                            type="checkbox"
                          />
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center text-black text-opacity-40">
                            <input
                              type="text"
                              className=" outline-none "
                              placeholder="Enter your url"
                              value={item.linkurl || ""}
                              // defaultValue={item.linkurl}
                           
                              onChange={(e) => {
                                const url = e.target.value;
                                handleUrlChange(url, item._id);
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

                    {item.enabled ? (
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
                          <button className="bg-indigo-500 p-2 rounded-lg w-full text-white font-semibold">
                            Set Thumbnail
                          </button>
                        </div>
                      </div>
                    ) : null}
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
