/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../actions/userAction";
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
      style={{ background: "#fafbfc" }}
      className="flex justify-center items-center text-white h-screen text-4xl"
    >
      <img src="/assets/screenloader.svg" alt="loading" />
    </div>
  ) : users?.length < 1 ? (
    <div>No profile found</div>
  ) : (
  
      <div className="bg-indigo-500 h-screen ">
        <div className="flex items-center flex-col text-sm pt-10 ">
          <div className="h-16 w-16 lg:h-24 lg:w-24 rounded-full bg-red-200"></div>
          <h1 className="mt-1 lg:mt-3 lg:text-lg font-bold text-white text-opacity-90">@Drey442</h1>
          <p className="text-white font-bold lg:text-base text-opacity-90">I am a rock star</p>
        </div>

        {/* <div className=" w-11/12 m-auto mt-4">
          {profile?.map((item, index) => (
            <div key={item._id}>
              <div className="bg-white h-8 rounded-full text-center  flex justify-center items-center mb-3">
                <a
                  href={item.linkurl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-black text-opacity-80"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>

  );
}
