import React, { useEffect } from "react";
import Writer from "../Typewriter/Writer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    <div className="flex justify-center items-center bg-[url('https://www.scopeclean.com/wp-content/uploads/2017/10/Restoration-e1508749225133.jpg')] bg-no-repeat bg-cover bg-center w-[100%] h-[100vh]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={animation}
        className="container mx-auto flex gap-[50px] mt-[-150px] justify-center items-center flex-col"
      >
        <h1
          // animate={{opacity:0, y: 10 }}
          // transition={{ opacity:1, y: 0 ,type: "spring", stiffness: 100 }}
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, delay: 1, ease: "linear" }}

          className="font-[700] text-[53px] leading-[52px] text-[#fff]"
        >
        Water Damage Restoration Pro’s  

          {/* <Writer /> */}
        </h1>

        <h3 className="font-[500] text-[19px] leading-[32px] text-[#fff]">
          From loss to repairs we offer full scope services. Just Like Before.
        </h3>
      </motion.div>
    </div>
  );
};

export default Hero;
