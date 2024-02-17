import React from "react";
import Logo from "assets/ngmusic.svg";

export default function Navbar(setOpenSearch) {
  return (
    <div>
      <div className="h-12 bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-5 text-white">
        <i class="fi fi-br-menu-burger"></i>
        <img src={Logo} alt="" />
        <i class="fi fi-br-search" onClick={(e) => setOpenSearch(true)}></i>
      </div>
      <div className="h-[20px] bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-5 text-white"
      
      ></div>
    </div>
  );
}
