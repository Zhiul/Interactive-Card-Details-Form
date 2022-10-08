export function CardBackSide({ CVCNumber }) {
  return (
    <div className="absolute top-[clamp(0px,_10vw,_58.013px)] left-[16.618%] w-[76.266vw] max-w-[447px] h-[41.866vw] max-h-[245px] rounded-[7px] bg-[url('./images/bg-card-back.png')] bg-cover z-0 600px:translate-x-[3vw] sm:translate-x-[5vw] md:w-[37.239vw] md:h-[20.442vw] md:static xl:translate-x-0 flex items-center justify-end text-white text-[clamp(0px,_76.266vw,_447px)] md:text-[text-[clamp(0px,_37.239vw,_447px)]]">
      <div className="text-[0.0305149em] tracking-[0.12em] pr-[4.2505em] pb-[0.13em]">
        {CVCNumber}
      </div>
    </div>
  );
}
