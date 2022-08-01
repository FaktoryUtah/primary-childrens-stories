import React from "react";
import Lottie from "lottie-react";
import * as animationData from "./welcome-map.json";

const WelcomeMap = ({ className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "max-w-full",
    },
  };
  return (
    <div
      className={className}
      id="welcomeMap"
      style={{
        maxWidth: "100%",
      }}
    >
      <Lottie role="figure" aria-labelledby="map" {...defaultOptions} />
    </div>
  );
};
export default WelcomeMap;
