import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../actions/authActions";
import { getAllLink } from "../../actions/profileAction";
import ProfileUploadModal from "../../utils/profileUpload";

export default function Appearance() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [bio, setBio] = useState();
  useEffect(() => {
    dispatch(getAllLink());
  }, [dispatch]);
  const handleChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = () => {
    const formdata = {
      bio,
    };
    dispatch(editUser(formdata));
  };
  return (
    <>
      <ProfileUploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" my-12 px-5 lg:px-10">
        <div>
          <h1 className="font-medium text-lg">Profile</h1>
          <div className="bg-white shadow-lg rounded  mt-4 p-4 pt-8 ">
            <div className="flex items-center  gap-3 w-full">
              <div className="w-20 h-20 flex border rounded-md items-center">
                <img
                  className="rounded-full  w-20 h-20 w-full h-full "
                  src={user.avatarUrl}
                  alt="avr"
                />
              </div>

              <div className="text-lg lg:flex-row w-full flex flex-col gap-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2.5 text-sm w-full rounded-md bg-indigo-600 text-white"
                >
                  Pick an Image
                </button>
                <button className="p-2.5 text-black text-opacity-70 text-sm rounded-md w-full bg-gray-300">
                  Remove
                </button>
              </div>
            </div>

            <div className="lg:my-6 my-4">
              <h1 className="border-b text-black text-opacity-70  pb-2">
                Profile Title
              </h1>
              <div className="my-8">
                <span className="text-sm text-black text-opacity-50">Bio</span>
                <form className="mt-2">
                  <textarea
                    onBlur={handleSubmit}
                    onChange={(e) => handleChange(e)}
                    className="border w-full h-32 p-2.5"
                    placeholder="I am an entertainer"
                    maxLength={70}
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
    </>
  );
}
