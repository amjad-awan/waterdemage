import Image from "next/image";
import React from "react";
// console.log("img ===", img)


const BgImage = () => {

  return (
    <div className="mt-[100px] wow fadeInUp  delay-0-2s h-[500px] w-[100%] overflow-hidden">
      <div
        style={{
          backgroundImage: "url('/images/copy-space-sink.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize:"cover",

          height:"100%",
          width: "100%"
        }}
      
        className={`bg-cover bg-center bg-fixed h-[100%]`}
      >
        {/* <Image src={img} class="h-[100%] w-full flex items-center justify-center"/> */}
      </div>
    </div>
  );
};

export default BgImage;
