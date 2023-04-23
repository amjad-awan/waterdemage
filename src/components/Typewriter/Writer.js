import Typewriter from "typewriter-effect";

import React from "react";

const Writer = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("RESTORATION SERVICE")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Writer;
