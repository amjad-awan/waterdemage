import React, { useEffect } from "react";
import Writer from "../Typewriter/Writer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const Hero = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "linear" },
      });
    }
  }, [animation, inView]);
  return (
    <div className="flex relative justify-center wow fadeInLeft  delay-0-2s  items-center bg-[url('https://www.scopeclean.com/wp-content/uploads/2017/10/Restoration-e1508749225133.jpg')] bg-no-repeat bg-cover bg-center w-[100%] h-[100vh]">
      <div className="container w-[100%]  mx-auto flex gap-[50px] mt-[-100px] justify-center items-center flex-col">
        <h1
          // animate={{opacity:0, y: 10 }}
          // transition={{ opacity:1, y: 0 ,type: "spring", stiffness: 100 }}
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, delay: 1, ease: "linear" }}

          className="font-[700] wow fadeInLeft  delay-0-4s  text-[53px] leading-[52px] text-[#fff]"
        >
          Water Damage Restoration Pro’s
          {/* <Writer /> */}
        </h1>

        <p className="font-[400] text-[22px] wow fadeInLeft  delay-0-6s  leading-[25px] text-[#fff]">
          From loss to repairs we offer full scope services. Just Like Before.
        </p>
        <div className=" absolute bottom-[40px] wow fadeInLeft delay-0-2s right-[40px] flex items-center justify-center gap-7 ">
        <a href="tel:03027543636" className="bg-[#fff] caller w-[60px] h-[60px] rounded-[50%] flex items-center justify-center ">
            <Icon
              icon="ic:round-call"
              fontSize="25px"
              className="text-[#25A52B] "
            />
          </a>
          <p className="text-[#fff]  text-[30px]">03027543636</p>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
