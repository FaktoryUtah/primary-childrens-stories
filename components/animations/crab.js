import React from "react";
import Lottie from "lottie-react";
import * as animationData from "./crab.json";

const Crab = ({ width, height, left, top }) => {
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
      id="crab"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${left}px, ${top}px, 0)`,
      }}
    >
      <Lottie
        role="figure"
        aria-labelledby="crab"
        {...defaultOptions}
        height={height}
        width={width}
      />
    </div>
  );
};
export default Crab;
