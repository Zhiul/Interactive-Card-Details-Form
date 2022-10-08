import { Component, useState } from "react";

export function CardFrontSide({ number, name, expirationDate }) {
  return (
    <div className="flex flex-col text-[clamp(0px,_76.266vw,_447px)] w-[76.266vw] max-w-[447px] h-[41.866vw] max-h-[245px] rounded-[7px] pt-[0.062937em] pr-[0.07692em] pb-[0.062937em] pl-[0.06993em] bg-[url('./images/bg-card-front.png')] bg-cover z-[1] 600px:translate-x-[3vw] sm:translate-x-[5vw] md:w-[37.239vw] md:h-[20.442vw] md:text-[clamp(0px,_37.239vw,_447px)] md:mr-[clamp(0px,_7.831vw,_113px)] xl:translate-x-0">
      <div className="flex items-center gap-[0.041958em] mb-[0.135em]">
        <div className="w-[clamp(9.5px,_8vw,_46.888px)] h-[clamp(9.5px,_8vw,_46.888px)] bg-white rounded-full md:w-[clamp(9.5px,_3.906vw,_46.888px)] md:h-[clamp(9.5px,_3.906vw,_46.888px)]"></div>
        <div className="w-[clamp(3.828px,_3.2vw,_19px)] h-[clamp(3.828px,_3.2vw,_19px)] bg-transparent rounded-full shadow-[0px_0px_0px_1.2px_white] md:w-[clamp(3.828px,_1.8229vw,_19px)] md:h-[clamp(3.828px,_1.8229vw,_19px)]"></div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="mr-auto text-white text-[0.0629377em] tracking-[0.1178em]">
          {number}
        </div>
        <div className="flex justify-between">
          <div className="uppercase text-white text-[0.0327em] tracking-[0.107583em]">
            {name}
          </div>
          <div className="text-white text-[0.0327em] tracking-[0.107583em]">
            {expirationDate}
          </div>
        </div>
      </div>
    </div>
  );
}
