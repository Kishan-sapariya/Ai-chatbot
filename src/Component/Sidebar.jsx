import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { RiChatNewFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Context } from "../Context/Context";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { recentPrompts, prevPrompts } = useContext(Context); // Access recentPrompts and prevPrompts from Context

  return (
    <div className="absolute">
      <div
        className={`h-[100vh] ${
          open ? "w-[70px] sm:w-[80px]" : "w-[250px] sm:w-[280px] "
        } duration-200 ease bg-slate-950 relative flex flex-col items-center gap-6`}
      >
        <div className="flex gap-4 mt-1">
          <label>
            <RiChatNewFill className="text-3xl mt-2 cursor-pointer" />
          </label>
          <h1 className={`text-3xl ${open ? "hidden" : "block "}`}>New chat</h1>
        </div>
        <div className="flex gap-4">
          <FaHistory className="text-xl mt-1 cursor-pointer" />

          <h3 className={`text-xl ${open ? "hidden" : "block"}`}>
            Recent Chats
            {prevPrompts.map((item, index) => (
              <p>{item}...</p>
            ))}
          </h3>
        </div>
        <div className="border-white rounded-full">
          <div
            className="absolute right-[-12px] top-[12px] w-6 h-6 flex justify-center items-center bg-white rounded-full border border-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FaArrowLeft
              className={`text-xl text-black ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div className="flex items-end h-[84vh] sm:h-[80vh] gap-3">
            <CgProfile className="text-3xl mt-1 cursor-pointer" />
            <h3 className={`text-xl ${open ? "hidden" : "block"}`}>Profile</h3>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
