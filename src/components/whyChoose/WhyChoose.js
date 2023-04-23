import React from "react";
import { Icon } from "@iconify/react";

const WhyChoose = () => {
  return (
    <div className="container mx-auto py-[20px]">
      <div className="text-center my-[30px]">
        <h3 className="text-[24px] font-[600] leading-[29px] uppercase">
          WHY CHOOSE US?
        </h3>
        <div className="h-[2px] mx-auto mt-[10px] max-w-[300px] bg-[#fed03d]"></div>
        <p className="text-[18] font-[500] mt-[40px] leading-[29px] uppercase">
          HERE ARE JUST A FEW REASONS TO CHOOSE SCOPE ENVIRONMENTAL AS YOUR FIRE
          DAMAGE SPECIALISTS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-[50px]">
        <div className="text-center flex justify-center flex-col items-center border rounded p-[20px] duration-300 cursor-pointer hover:translate-y-[-7px]">
          <Icon
            icon="gridicons:multiple-users"
            color="#25A52B"
            fontSize="100px"
          />
          <h3>HIGHLY TRAINED STAFF</h3>
        </div>
        <div className="text-center flex justify-center flex-col items-center border rounded p-[20px] duration-300 cursor-pointer hover:translate-y-[-7px]">
          <Icon icon="fa6-solid:rotate" color="#25A52B" fontSize="100px" />
          <h3>WE RESTORE NOT DESTROY</h3>
        </div>
        <div className="text-center flex justify-center flex-col items-center border rounded p-[20px] duration-300 cursor-pointer hover:translate-y-[-7px]">
          <Icon
            icon="tabler:thumb-up-filled"
            color="#25A52B"
            fontSize="100px"
          />
          <h3>FAST RESPONSE</h3>
        </div>
        <div className="text-center flex justify-center flex-col items-center border rounded p-[20px] duration-300 cursor-pointer hover:translate-y-[-7px]">
          <Icon
            icon="material-symbols:nest-clock-farsight-analog-outline"
            color="#25A52B"
            fontSize="100px"
          />
          <h3>24/7 LIVE OPERATOR AND DISPATCH</h3>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
