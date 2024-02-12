import React, { useState } from "react";
import Currency from "assets/currency-dollar.svg";

export default function Card({content}) {

  useState(() => {
    console.log(content);
  },[content])

  return (
    <div className="w-full bg-white shadow-md py-3 px-2.5 rounded-[10px] flex flex-row gap-3">
      <div className="max-w-[100px] w-full ">
        <img src={content.artworkUrl100} alt="album" className="rounded-[10px] w-full max-h-[100px] object-cover"/>
      </div>
      <div className="flex flex-col justify-between text-left content-aournd w-full h-full">
        <div>
          <p className="text-[10px]">{content.artistName}</p>
        <p className="text-sm font-bold">{content.trackName}</p>
        </div>
        <div className="flex justify-between">
          <div className="bg-success py-1 px-3 rounded-[10px] font-bold text-white">
            <p>{content.primaryGenreName}</p>
          </div>
          <div className="flex items-center text-warning font-bold gap-1.5 ">
            <img src={Currency} alt="currency" />
            <p>{content.collectionPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
