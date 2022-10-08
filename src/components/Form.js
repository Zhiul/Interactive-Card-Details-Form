import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        noValidate
        className="px-[24px] pb-[45px] flex flex-col gap-[11px] mx-auto max-w-[780px] sm:w-[80vw] md:justify-center items-center md:pb-0"
      >
        <div className="w-full md:max-w-[381px]">
          <label
            htmlFor=""
            className="inline-block uppercase text-[color:var(--veryDarkViolet)] text-[0.77rem] mb-[5px] tracking-[1.9px] font-semibold"
          >
            Cardholder Name
          </label>
          <div className="relative rounded-[8px] overflow-hidden border border-[transparent] px-px py-px">
            <input
              noValidate
              type="text"
              name=""
              id=""
              placeholder="e.g. Jane Appleseed"
              className="w-full relative placeholder-[#cdcbce] focus-visible:placeholder-[#ae80c9] hover:placeholder-[#ae80c9] text-[1.1341rem] px-[0.9411rem] pt-[8px] pb-[8px] rounded-[8px] focus-visible:outline-none text-black focus-visible:text-[color:var(--veryDarkViolet)] hover:text-[color:var(--veryDarkViolet)] peer transition-colors duration-200 z-[1]"
            />
            <div className="absolute inset-0 z-[0] rounded-[10px] bg-[color:var(--lightGrayishViolet)]"></div>
            <div className="i-bg opacity-0 absolute inset-0 z-[0] rounded-[10px] [background:linear-gradient(to_right_,_var(--activeInput))] peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-200"></div>
          </div>
        </div>

        <div className="w-full mb-[7px] md:max-w-[381px]">
          <label
            htmlFor=""
            className="inline-block uppercase text-[color:var(--veryDarkViolet)] text-[0.77rem] mb-[6px] tracking-[1.9px] font-semibold"
          >
            Card Number
          </label>
          <div className="relative rounded-[8px] overflow-hidden border border-[transparent] px-px py-px">
            <input
              noValidate
              type="number"
              name=""
              id=""
              placeholder="e.g. 1234 5678 9123 0000"
              className="w-full relative placeholder-[#cdcbce] focus-visible:placeholder-[#ae80c9] hover:placeholder-[#ae80c9] text-[1.1341rem] px-[0.9411rem] pt-[8px] pb-[8px] rounded-[8px] focus-visible:outline-none text-black focus-visible:text-[color:var(--veryDarkViolet)] hover:text-[color:var(--veryDarkViolet)] peer transition-colors duration-200 z-[1]"
            />
            <div className="absolute inset-0 z-[0] rounded-[10px] bg-[color:var(--lightGrayishViolet)]"></div>
            <div className="i-bg opacity-0 absolute inset-0 z-[0] rounded-[10px] [background:linear-gradient(to_right_,_var(--activeInput))] peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-200"></div>
          </div>
        </div>

        <div className="flex gap-x-[6px] md:max-w-[381px]">
          <div className="inline-flex flex-col">
            <label
              htmlFor=""
              className="inline-block uppercase text-[color:var(--veryDarkViolet)] text-[0.77rem] mb-[5px] tracking-[1.9px] font-semibold"
            >
              Exp. Date (MM/YY)
            </label>
            <div className="inline-flex gap-x-[8px]">
              <div className="relative rounded-[8px] overflow-hidden border border-[transparent] px-px py-px">
                <input
                  noValidate
                  type="number"
                  name=""
                  id=""
                  placeholder="MM"
                  className="w-[71px] relative placeholder-[#cdcbce] focus-visible:placeholder-[#ae80c9] hover:placeholder-[#ae80c9] text-[1.1341rem] px-[0.9411rem] pt-[8px] pb-[8px] rounded-[8px] focus-visible:outline-none text-black focus-visible:text-[color:var(--veryDarkViolet)] hover:text-[color:var(--veryDarkViolet)] peer transition-colors duration-200 z-[1]"
                />
                <div className="absolute inset-0 z-[0] rounded-[10px] bg-[color:var(--lightGrayishViolet)]"></div>
                <div className="i-bg opacity-0 absolute inset-0 z-[0] rounded-[10px] [background:linear-gradient(to_right_,_var(--activeInput))] peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-200"></div>
              </div>

              <div className="relative rounded-[8px] overflow-hidden border border-[transparent] px-px py-px">
                <input
                  noValidate
                  type="number"
                  name=""
                  id=""
                  placeholder="YY"
                  className="w-[71px] relative placeholder-[#cdcbce] focus-visible:placeholder-[#ae80c9] hover:placeholder-[#ae80c9] text-[1.1341rem] px-[0.9411rem] pt-[8px] pb-[8px] rounded-[8px] focus-visible:outline-none text-black focus-visible:text-[color:var(--veryDarkViolet)] hover:text-[color:var(--veryDarkViolet)] peer transition-colors duration-200 z-[1]"
                />
                <div className="absolute inset-0 z-[0] rounded-[10px] bg-[color:var(--lightGrayishViolet)]"></div>
                <div className="i-bg opacity-0 absolute inset-0 z-[0] rounded-[10px] [background:linear-gradient(to_right_,_var(--activeInput))] peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-200"></div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-1 flex-col">
            <label
              htmlFor=""
              className="inline-block uppercase text-[color:var(--veryDarkViolet)] text-[0.77rem] mb-[5px] tracking-[1.9px] font-semibold"
            >
              CVC
            </label>
            <div className="relative rounded-[8px] overflow-hidden border border-[transparent] px-px py-px">
              <input
                noValidate
                type="number"
                name=""
                id=""
                placeholder="e.g. 123"
                className="w-full relative placeholder-[#cdcbce] focus-visible:placeholder-[#ae80c9] hover:placeholder-[#ae80c9] text-[1.1341rem] px-[0.9411rem] pt-[8px] pb-[8px] rounded-[8px] focus-visible:outline-none text-black focus-visible:text-[color:var(--veryDarkViolet)] hover:text-[color:var(--veryDarkViolet)] peer transition-colors duration-200 z-[1]"
              />
              <div className="absolute inset-0 z-[0] rounded-[10px] bg-[color:var(--lightGrayishViolet)]"></div>
              <div className="i-bg opacity-0 absolute inset-0 z-[0] rounded-[10px] [background:linear-gradient(to_right_,_var(--activeInput))] peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>
        </div>

        <button className="btn-submit opacity-80 cursor-not-allowed relative mt-[16px] bg-[color:var(--veryDarkViolet)] rounded-[7px] text-[1.08rem] text-white pt-[15px] pb-[12px] w-full tracking-[0.2px] md:max-w-[381px] z-[1]">
          Confirm
        </button>
      </form>
    );
  }
}

export default Form;
