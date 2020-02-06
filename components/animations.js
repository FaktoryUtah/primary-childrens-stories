import React, { useEffect, useState } from "react";
import useWindowSize from "../shared/hooks/useWindowSize.js";
import Armadillo from "./animations/armadillo.js";
import Bear from "./animations/bear.js";
import Boat from "./animations/boat.js";
import Chameleon from "./animations/chameleon.js";
import Crab from "./animations/crab.js";
import Crane from "./animations/crane.js";
import Croc from "./animations/croc.js";
import Deer from "./animations/deer.js";
import Frog from "./animations/frog.js";
import Gopher from "./animations/gopher.js";
import MountainsBirds from "./animations/mountains-birds.js";
import Mouse from "./animations/mouse.js";
import Rams from "./animations/rams.js";
import Squirrel from "./animations/squirrel.js";
import Tiger from "./animations/tiger.js";
import Toucan from "./animations/toucan.js";
import Windmill from "./animations/windmill.js";
import BirdsCastle from "./animations/birds-castle.js";
import BirdsHills from "./animations/birds-hills.js";
import FishSplash from "./animations/fish-splash.js";
import Whale from "./animations/whale.js";
import Walrus from "./animations/walrus.js";
import Elephant from "./animations/elephant.js";

const Animations = ({ scale, mapImage }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };

  const size = useWindowSize();
  const [multiplier, setMultiplier] = useState({
    x: size.width / bgImageDimensions.width,
    y: size.height / bgImageDimensions.height
  });
  useEffect(() => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height
    });
  }, [scale, size, mapImage]);
  return (
    <>
      {/* CSS animations */}
      <Boat
        width={70 * multiplier.x}
        height={120 * multiplier.y}
        left={1150 * multiplier.x}
        top={965 * multiplier.y}
      />
      <Boat
        width={56 * multiplier.x}
        height={96 * multiplier.y}
        left={58 * multiplier.x}
        top={1410 * multiplier.y}
      />
      <Boat
        width={56 * multiplier.x}
        height={96 * multiplier.y}
        left={2678 * multiplier.x}
        top={1479 * multiplier.y}
      />
      <Croc
        animationLength={3.6}
        width={70 * multiplier.x}
        height={36 * multiplier.y}
        left={1080 * multiplier.x}
        top={1960 * multiplier.y}
      />
      <Croc
        animationLength={4.2}
        width={70 * multiplier.x}
        height={36 * multiplier.y}
        left={1500 * multiplier.x}
        top={1875 * multiplier.y}
      />
      <Mouse
        animationLength={3.2}
        width={36 * multiplier.x}
        height={57 * multiplier.y}
        left={478 * multiplier.x}
        top={135 * multiplier.y}
      />
      <Mouse
        animationLength={3.8}
        width={36 * multiplier.x}
        height={57 * multiplier.y}
        left={1185 * multiplier.x}
        top={300 * multiplier.y}
      />
      <Windmill
        width={122 * multiplier.x}
        height={122 * multiplier.y}
        left={1825 * multiplier.x}
        top={538 * multiplier.y}
      />
      <Gopher
        animationLength={3.4}
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2187 * multiplier.x}
        top={1120 * multiplier.y}
      />
      <Gopher
        animationLength={3.7}
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2141 * multiplier.x}
        top={935 * multiplier.y}
      />
      <Toucan
        width={146 * multiplier.x}
        height={166 * multiplier.y}
        left={2057 * multiplier.x}
        top={1960 * multiplier.y}
      />
      <MountainsBirds
        width={700 * multiplier.x}
        height={270 * multiplier.y}
        left={500 * multiplier.x}
        top={815 * multiplier.y}
      />
      <BirdsCastle
        width={698.4 * multiplier.x}
        height={194.6 * multiplier.y}
        left={2337 * multiplier.x}
        top={825 * multiplier.y}
      />
      <BirdsHills
        width={735.7 * multiplier.x}
        height={129.5 * multiplier.y}
        left={0 * multiplier.x}
        top={2085 * multiplier.y}
      />

      {/* Lottie animations */}
      <Armadillo
        width={270 * multiplier.x}
        height={194.4 * multiplier.y}
        left={695 * multiplier.x}
        top={1750 * multiplier.y}
      />
      <Bear
        width={90 * multiplier.x}
        height={150 * multiplier.y}
        left={1062 * multiplier.x}
        top={595 * multiplier.y}
      />
      <Chameleon
        width={264 * multiplier.x}
        height={200 * multiplier.y}
        left={2250 * multiplier.x}
        top={1924 * multiplier.y}
      />
      <Crab
        width={140 * multiplier.x}
        height={100 * multiplier.y}
        left={306 * multiplier.x}
        top={1071 * multiplier.y}
      />
      <Crane
        width={212 * multiplier.x}
        height={212 * multiplier.y}
        left={1561 * multiplier.x}
        top={1541 * multiplier.y}
      />
      <Deer
        width={170 * multiplier.x}
        height={170 * multiplier.y}
        left={1800 * multiplier.x}
        top={740 * multiplier.y}
      />
      <Elephant
        width={200 * multiplier.x}
        height={200 * multiplier.y}
        left={2770 * multiplier.x}
        top={1620 * multiplier.y}
      />
      <FishSplash
        width={250 * multiplier.x}
        height={250 * multiplier.y}
        left={530 * multiplier.x}
        top={400 * multiplier.y}
      />
      <FishSplash
        width={250 * multiplier.x}
        height={250 * multiplier.y}
        left={110 * multiplier.x}
        top={1080 * multiplier.y}
      />
      <FishSplash
        width={250 * multiplier.x}
        height={250 * multiplier.y}
        left={350 * multiplier.x}
        top={1750 * multiplier.y}
      />
      <FishSplash
        width={250 * multiplier.x}
        height={250 * multiplier.y}
        left={2610 * multiplier.x}
        top={1900 * multiplier.y}
      />
      <FishSplash
        width={250 * multiplier.x}
        height={250 * multiplier.y}
        left={2900 * multiplier.x}
        top={150 * multiplier.y}
      />
      <Frog
        width={286.1794 * multiplier.x}
        height={263.2227 * multiplier.y}
        left={1765 * multiplier.x}
        top={1330 * multiplier.y}
      />
      <Frog
        width={242 * multiplier.x}
        height={222 * multiplier.y}
        left={1580 * multiplier.x}
        top={2228 * multiplier.y}
      />
      <Rams
        width={263 * multiplier.x}
        height={128 * multiplier.y}
        left={1227 * multiplier.x}
        top={1305 * multiplier.y}
      />
      <Squirrel
        width={200 * multiplier.x}
        height={120 * multiplier.y}
        left={2225 * multiplier.x}
        top={580 * multiplier.y}
      />
      <Tiger
        width={180 * multiplier.x}
        height={75 * multiplier.y}
        left={70 * multiplier.x}
        top={1672 * multiplier.y}
      />
      <Walrus
        width={240 * multiplier.x}
        height={240 * multiplier.y}
        left={1700 * multiplier.x}
        top={98 * multiplier.y}
      />
      <Whale
        width={240 * multiplier.x}
        height={240 * multiplier.y}
        left={2570 * multiplier.x}
        top={970 * multiplier.y}
      />
    </>
  );
};
export default Animations;
