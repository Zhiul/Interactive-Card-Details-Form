import { CardFrontSide } from "./CardFrontSide";
import { CardBackSide } from "./CardBackSide";

const Card = (props) => {
  return (
    <div className="mb-[40px] md:mb-0 xl:translate-x-[clamp(0px,_calc(11.388vw_+_38px),_202px)]">
      <div className="flex items-end relative gap-[2.6666%] md:gap-[4.111%] w-[clamp(91.4666vw,_91.4666vw,_536.087px)] max-w-[536px] h-[clamp(0px,_75.466vw,_442.3111px)] pl-[clamp(0px,_5.333vw,_32px)] pt-[clamp(0px,_8.533vw,_50.013px)] md:w-[clamp(50vw,_50vw,_542px)] md:flex-col md:items-center md:justify-center md:min-h-[calc(43.489vw_+_40px)] md:h-screen md:p-0 xl:w-[33.541vw] 3xl:min-h-[774px]">
        <CardFrontSide {...props}></CardFrontSide>
        <CardBackSide CVCNumber={props.CVCNumber}></CardBackSide>
      </div>
    </div>
  );
};

export default Card;
