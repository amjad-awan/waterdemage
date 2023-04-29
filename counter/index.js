import { useEffect } from "react";
import Counter from "./Counter";

const TerioCounter = () => {
   
  return (
    <div className="container mt-[60px] mb-[100px] mx-auto gap-8 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-col-1">
      <div className="border-[1px] wow fadeInUp  delay-0-2s h-[170px] flex items-center justify-center flex-col text-center border-gray-200 rounded">
        <div className="flex font-[600] text-[30px] font-[Quicksand] items-center justify-center">
          <Counter end={300} />
          <h6 className="font-[Quicksand]">+</h6>
        </div>
        <div className="boder" />
        <p className="font-[Quicksand] font-[600] text-[22px]">Finished Projects</p>
      </div>
      <div className="border-[1px] wow fadeInUp  delay-0-4s h-[170px] flex items-center justify-center flex-col text-center border-gray-200 rounded">
        <div className="flex font-[600] text-[30px] font-[Quicksand] items-center justify-center">
          <Counter end={850} />
          <h6 className="font-[Quicksand]">+</h6>
        </div>
        <div className="boder" />
        <p className="font-[Quicksand] font-[600] text-[22px]">Happy Client</p>
      </div>
      <div className="border-[1px] wow fadeInUp  delay-0-6s h-[170px] flex items-center justify-center flex-col text-center border-gray-200 rounded">
        <div className="flex font-[600] text-[30px] font-[Quicksand] items-center justify-center">
           <Counter end={9} />
           <h6 className="font-[Quicksand]">+</h6>

        </div>
        <div className="boder" />
        <p className="font-[Quicksand] font-[600] text-[22px]">Years in Business</p>
      </div>
      <div className="border-[1px] wow fadeInUp  delay-0-8s h-[170px] flex items-center justify-center flex-col text-center border-gray-200 rounded">
        <div className="flex font-[600] text-[30px] font-[Quicksand] items-center justify-center">
          <Counter end={36} />
          <h6 className="font-[Quicksand]">+</h6>

        </div>
        <div className="boder" />
        <p className="font-[Quicksand] font-[600] text-[22px]">Experts</p>
      </div>
    </div>
  );
};
export default TerioCounter;
