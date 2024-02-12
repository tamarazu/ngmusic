import React from "react";
import Logo from "assets/ngmusic.svg";

export default function Navbar(setOpenSearch) {
  return (
    <div>
      <div className="h-[50px] bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-[18px] text-white">
        <i class="fi fi-br-menu-burger"></i>
        <img src={Logo} alt="" />
        <i class="fi fi-br-search" onClick={e => setOpenSearch(true)}></i>
      </div>
      <div className="h-[10px] bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-[18px] text-white rounded-b-[50%]">
      </div>
    </div>
  );
}
