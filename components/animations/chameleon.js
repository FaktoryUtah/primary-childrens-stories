import React from "react";
import Lottie from "lottie-react";
import * as animationData from "./chameleon.json";

const Chameleon = ({ width, height, left, top }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    width: width,
    height: height,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="absolute inline-block z-20 animation"
      id="chameleon"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${left}px, ${top}px, 0)`,
      }}
    >
      <Lottie
        role="figure"
        aria-labelledby="chameleon"
        {...defaultOptions}
        height={height}
        width={width}
      />
    </div>
  );
};
export default Chameleon;
