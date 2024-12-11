import React from 'react';
import Marquee from "react-fast-marquee";

export const Carusel = () => {
    return (
      <>
        <div className=" h-[200px] w-[100%] rounded-2xl">
          <Marquee gradient className=" h-[200px] border-t rounded-2xl border-b py-3 overflow-hidden grid  ">
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/lib.png")} className="w-20  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[300px] w-[200px] mx-5 ">
              <img src={require("../img/logo/UNEC.png")} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/alinino.jpg")} className="w-40  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/ada.png")} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/elimler.png")} className="w-56 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/bbc.png")} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/genc.png")} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={require("../img/logo/uneclib.jpg")} className="w-40 " alt="" />
            </div>
          </Marquee>
        </div>
        <div className="flex justify-center">
          <p className='text-indigo-500 opacity-40'>our partners</p>
        </div>
      </>
    );
}