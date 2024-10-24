import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-[200px] p-2 outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center justify-end gap-6 w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-xs text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            Hubert Relikowski
          </span>
          <span className="text-[10px] text-right text-gray-500 leading-3 font-light">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt="userAvatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;