import React from "react";
import { useSelector } from "react-redux";

export default function Appearance() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className=" my-12 px-5 lg:px-10">
      <div>
        <h1 className="font-medium text-lg">Profile</h1>
        <div className="bg-white shadow-lg rounded  mt-4 p-4 pt-8 ">
          <div className="flex items-center  gap-3 w-full">
            <div className="w-36 h-36 flex items-center">
              <img className="rounded-full " src={user.avatarUrl} alt="avr" />
            </div>

            <div className="text-lg lg:flex-row w-full flex flex-col gap-3">
              <button className="p-2.5 text-sm w-full rounded-md bg-indigo-500 text-white">
                Pick an Image
              </button>
              <button className="p-2.5 text-black text-opacity-70 text-sm rounded-md w-full bg-gray-300">
                Remove
              </button>
            </div>
          </div>

          <div className="lg:my-6">
            <h1 className="border-b text-black text-opacity-70  pb-2">
              Profile Title
            </h1>
            <div className="my-8">
              <span className="text-sm text-black text-opacity-50">Bio</span>
              <form className="mt-2">
                <textarea
                  className="border w-full h-32 p-2.5"
                  placeholder="I am an entertainer"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h1 className="text-lg my-3 font-medium">Themes</h1>
        <div className="grid  rounded shadow-lg lg:grid-cols-4 bg-white p-4 py-5 grid-cols-2 gap-4">
          {[1, 3, 4, 5, 9, 3, 3, 4, 4, 5, 4, 5].fill(10).map((item) => (
            <div
              key={Math.random()}
              className="h-72 lg:h-60 rounded-md  bg-blue-300"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
