import React from "react";
import Subnavbar from "../../components/dashboard/Subnavbar";
// import { BsFillPencilFill } from "react-icons/bs";
import PreviewModal from "../../components/dashboard/PreviewModal";
import { IoEyeSharp } from "react-icons/io5";
import { VscTrash } from "react-icons/vsc";
import {
  // AiOutlineNodeIndex,
  AiOutlinePicture,
  AiOutlineStar,
} from "react-icons/ai";
import { MdInsights } from "react-icons/md";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Links() {
  const [enableds, setEnabled] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  const [myForms, setMyForms] = useState([
    { title: "Big boy1", url: "link1", id: "10", enabled: false },
  ]);

  // eslint-disable-next-line no-unused-vars
  const MyToggle = (props) => (
    <Switch
      checked={enableds}
      onChange={setEnabled}
      className={`${
        enableds ? "bg-indigo-500" : "bg-gray-200"
      } relative inline-flex items-center h-5 rounded-full w-9`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          props.enabled ? "translate-x-5" : "translate-x-1"
        } inline-block w-3.5 h-3.5 transform bg-white rounded-full`}
      />
    </Switch>
  );

  const handleModalClose = () => {
    setOpenPreview(false);
  };
  return (
    <>
      <PreviewModal isOpen={openPreview} closeModal={handleModalClose} />
      <div className="   w-full relative  ">
        <div className="">
          <Subnavbar />
          <div
            style={{ height: "70vh" }}
            className=" px-4 py-4 link-page-body lg:py-0 lg:p-8 lg:pt-14 pb-28 overflow-y-auto  "
          >
            <div className="flex gap-2 lg:gap-4">
              <button
                onClick={() => {
                  setMyForms((current) => [
                    ...current,
                    {
                      id: Math.random() * 100,
                      title: "",
                      url: "",
                      enabled: false,
                    },
                  ]);
                }}
                className="bg-indigo-500 px-5 w-full font-semibold rounded-lg py-4 text-white"
              >
                Add new Link
              </button>
              <button className="bg-black w-1/2 font-semibold rounded-lg px-5 py-4 text-white">
                Explore
              </button>
            </div>
            <div className="mt-10   rounded-lg">
              <div>
                {myForms?.map((item, index) => (
                  <div
                    key={item.id}
                    className="mb-3 card-shadow  flex w-full border-buttonPrimary border-opacity-30 rounded border bg-white"
                  >
                    {/* <div className="lg:bg-gray-200 w-2"></div> */}
                    <div className="w-full  p-4 pb-7">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex text-black text-opacity-100 items-center relative group ">
                          {/* <button className="mr-1  text-black text-opacity-60 font-semibold   ">
                          Title
                        </button> */}
                          <input
                            value={item.title}
                            onChange={(e) => {
                              const title = e.target.value;
                              setMyForms((current) =>
                                current.map((x) =>
                                  x.id === item.id ? { ...x, title } : x
                                )
                              );
                            }}
                            className=" outline-none font-semibold text-opacity-80 text-black "
                            placeholder="Title"
                            type="text"
                          />
                          {/* <button className=" ">
                          <BsFillPencilFill size={11} />
                        </button> */}
                        </div>
                        {/* <MyToggle enabled={item.enabled} item={item} /> */}
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
                            value={item.url}
                            onChange={(e) => {
                              const url = e.target.value;
                              setMyForms((current) =>
                                current.map((x) =>
                                  x.id === item.id ? { ...x, url } : x
                                )
                              );
                            }}
                          />
                          {/* <h1 className="mr-1 ">Url</h1>
                        <BsFillPencilFill size={11} /> */}
                        </div>
                      </div>

                      <div className=" text-xl text-black text-opacity-50 justify-between flex">
                        <div className="flex">
                          <button className="mr-3.5 focus:ring-2 focus:text-buttonPrimary  focus:text-opacity-100   focus:ring-black rounded relative group">
                            <AiOutlinePicture />
                            <div className="bg-black hidden  lg:flex -right-5 px-1 transition top-6 duration-300 ease-in-out rounded-lg group-hover:opacity-100  opacity-0 text-white text-xs p-1 absolute">
                              <p>Thumbnail</p>
                            </div>
                          </button>

                          <button className="mr-3.5 group w-full focus:text-buttonPrimary  focus:text-opacity-100    focus:ring-2 focus:ring-black rounded  relative">
                            <AiOutlineStar />
                            <div className="bg-black hidden lg:flex  transition duration-300 ease-in-out top-6 rounded-lg px-1 -right-10 group-hover:opacity-100 opacity-0 text-white text-xs p-1 absolute">
                              <p className="w-14">Leap link</p>
                            </div>
                          </button>

                          <button className="mr-3.5 group w-full focus:text-buttonPrimary focus:text-opacity-100  focus:ring-2 focus:ring-black rounded relative">
                            <MdInsights />
                            <div className="bg-black hidden lg:block  rounded-lg px-1 top-6 -left-4 transition duration-300 ease-in-out  -right-10  group-hover:opacity-100 opacity-0 text-white text-xs p-1 absolute">
                              <p className="w-full">Insights</p>
                            </div>
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            setMyForms((current) =>
                              current.filter((x) => x.id !== item.id)
                            )
                          }
                        >
                          <VscTrash />
                        </button>
                      </div>
                    </div>
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
