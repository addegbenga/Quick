/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getUser } from "../../actions/userAction";
import "./style.css";
export default function Home() {
  const users = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.apiloading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getUser(params.name));
  }, [dispatch]);

  return loading ? (
    <div
      // style={{ background: "#fafbfc" }}
      className="flex justify-center  bg-indigo-700 items-center text-white h-screen text-4xl"
    >
      {/* <img src="/assets/screenloader.svg" alt="loading" /> */}Loading
    </div>
  ) : !users ? (
    <div>No profile found</div>
  ) : (
    <div className="bg-indigo-800 bg-texture">
      <div className=" border-3 container max-w-4xl mx-auto  h-screen ">
        <div className="flex items-center flex-col text-sm pt-10 ">
          <div className="h-24 w-24 lg:h-24 border border-opacity-30 lg:w-24 rounded-full  bg-opacity-70">
            <img
              className="rounded-full w-full"
              src={users && users.avatarUrl}
              alt="avatar"
            />
          </div>
          <h1 className="mt-3 text-lg lg:text-lg font-bold text-white text-opacity-90">
            {users && users.username}
          </h1>
          <p className="text-white text-base  lg:text-base text-opacity-90">
            {users && users.bio}
          </p>
        </div>

        <div className=" max-w-2xl m-auto mt-4">
          {users &&
            users.profile.map((item) =>
              item.published ? (
                // {users && users.profile.map((item, index) => (
                <div key={item._id}>
                  <div className="bg-white overflow-y-hidden h-14 rounded text-center px-3  flex justify-between items-center mb-3">
                    {item.linkAvatar ? (
                      <img
                        className="h-7 w-7 rounded"
                        src={item.linkAvatar}
                        alt="icn"
                      />
                    ) : (
                      <div className="h-5 w-5"></div>
                    )}
                    <a
                      href={item.linkurl}
                      target="_blank"
                      rel="noreferrer"
                      className=" text-black text-opacity-80"
                    >
                      {item.title}
                    </a>
                    <FaLock size={14} />
                  </div>
                </div>
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}
