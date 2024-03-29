import React, { useState } from "react";
import Navbar from "components/navbar";
import Logo from "assets/ngmusic.svg";
import Card from "components/card";
import { useDispatch, useSelector } from "react-redux";
import { fetch_search_song } from "store/actions";
import OverlaySearch from "components/overlaySearch";
import Icon from "assets/ngmusic.svg";
import {useNavigate} from 'react-router-dom'

export default function SearchPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const termParameter = queryParameters.get("term");
  const { songs, term } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate()

  useState(() => {
    if (term.length || termParameter.length) {
      if (term.length) {
        dispatch(fetch_search_song(term, 10));
      } else {
        dispatch(fetch_search_song(termParameter, 10));
      }
    }
  }, [songs, term, termParameter]);
  return (
    <div className="grid gap-[36px] flex justify-center items-center">
      <div>
        <div className="h-[50px] bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-[18px] text-white">
          <i class="fi fi-br-menu-burger"></i>
          <img src={Icon} alt="" onClick={e => {
            navigate('/')
          }} />
          <i class="fi fi-br-search" onClick={(e) => setOpenSearch(true)}></i>
        </div>
        <div className="h-[10px] bg-gradient-to-r from-primary to-secondary flex justify-between items-center px-[18px] text-white rounded-b-[50%]"></div>
      </div>
      <p>
        Search result for :
        <span className="font-bold text-primary"> {termParameter}</span>
      </p>
      <div className="p-4 grid gap-5">
        {songs.map((content, index) => (
          <Card content={content} />
        ))}
      </div>
      {openSearch ? <OverlaySearch setOpenSearch={setOpenSearch}/> : <></>}
      <div
      className="w-full flex justify-center"
        onClick={(e) => {
          dispatch(fetch_search_song(termParameter, 10))
        }}
      >
        <p className="px-4 py-2 mb-4 text-xs font-bold bg-[#e2e8f0]  text-gray-500 w-fit rounded-xl" style={{borderRadius:'17px'}}>Load More</p>
      </div>
    </div>
  );
}
