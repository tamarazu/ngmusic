import React, { useEffect, useState } from "react";
import Logo from "assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetch_search_song } from "store/actions";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [term, setTerm] = useState("");
  const { loading, songs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(songs);
    if (songs.length) {
      navigate("/search");
    }
  }, [loading, term, songs]);

  return (
    <div className="absolute flex items-center justify-center inset-0 bg-gradient-to-b from-primary to-secondary">
      <div className="flex justify-center ">
        <img src={Logo} alt="" />
      </div>

      <div className="absolute w-full bottom-0 px-[30px] py-[26px] grid gap-4 ">
        <input
          className="p-3 text-gray-500 font-bold text-sm text-center rounded-large"
          placeholder="Artist / Album / Title"
          onChange={(event) => setTerm(event.target.value)}
          value={term}
        />
        <button
          onClick={(event) => dispatch(fetch_search_song(term))}
          className="w-full rounded-large font-bold text-white bg-white/20 text-sm p-3"
        >
          Search
        </button>
      </div>
    </div>
  );
}
