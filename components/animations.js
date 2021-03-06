import React, { useEffect, useState } from "react";
import useWindowSize from "shared/hooks/useWindowSize.js";
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
import Wolf from "./animations/wolf.js";
import { isMobile } from "react-device-detect";

const Animations = ({ scale, mapImage }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400,
  };

  const size = useWindowSize();
  const [multiplier, setMultiplier] = useState({
    x: size.width / bgImageDimensions.width,
    y: size.height / bgImageDimensions.height,
  });
  useEffect(() => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height,
    });
  }, [scale, size, mapImage]);
  return (
    <>
      {/* CSS animations */}
      <BirdsCastle
        width={698}
        height={194}
        left={2337 * multiplier.x}
        top={825 * multiplier.y}
        animate={!isMobile}
      />
      <BirdsHills
        width={735}
        height={129}
        left={0 * multiplier.x}
        top={2085 * multiplier.y}
        animate={!isMobile}
      />
      <Boat
        width={70}
        height={120}
        left={1150 * multiplier.x}
        top={965 * multiplier.y}
        animate={!isMobile}
      />

      <Boat
        width={56}
        height={96}
        left={58 * multiplier.x}
        top={1410 * multiplier.y}
        animate={!isMobile}
      />
      <Boat
        width={56}
        height={96}
        left={2678 * multiplier.x}
        top={1479 * multiplier.y}
        animate={!isMobile}
      />
      <Croc
        animationLength={3.6}
        width={70}
        height={36}
        left={1080 * multiplier.x}
        top={1960 * multiplier.y}
        animate={!isMobile}
      />
      <Croc
        animationLength={4.2}
        width={70}
        height={36}
        left={1500 * multiplier.x}
        top={1875 * multiplier.y}
        animate={!isMobile}
      />
      <Gopher
        animationLength={3.4}
        width={30}
        height={49}
        left={2187 * multiplier.x}
        top={1120 * multiplier.y}
        animate={!isMobile}
      />
      <Gopher
        animationLength={3.7}
        width={30}
        height={49}
        left={2141 * multiplier.x}
        top={935 * multiplier.y}
        animate={!isMobile}
      />
      <MountainsBirds
        width={700}
        height={270}
        left={500 * multiplier.x}
        top={815 * multiplier.y}
        animate={!isMobile}
      />
      <Mouse
        animationLength={3.2}
        width={36}
        height={57}
        left={478 * multiplier.x}
        top={135 * multiplier.y}
        animate={!isMobile}
      />
      <Mouse
        animationLength={3.8}
        width={36}
        height={57}
        left={1185 * multiplier.x}
        top={300 * multiplier.y}
        animate={!isMobile}
      />
      <Toucan
        width={146}
        height={166}
        left={2057 * multiplier.x}
        top={1960 * multiplier.y}
        animate={!isMobile}
      />
      <Windmill
        width={122}
        height={122}
        left={1825 * multiplier.x}
        top={538 * multiplier.y}
        animate={!isMobile}
      />

      {/* Lottie animations */}
      <Armadillo
        width={200}
        height={200}
        left={735 * multiplier.x}
        top={1750 * multiplier.y}
      />
      <Bear
        width={145}
        height={145}
        left={1062 * multiplier.x}
        top={595 * multiplier.y}
      />
      <Chameleon
        width={264}
        height={264}
        left={2250 * multiplier.x}
        top={1890 * multiplier.y}
      />
      <Crab
        width={140}
        height={140}
        left={306 * multiplier.x}
        top={1051 * multiplier.y}
      />
      <Crane
        width={212}
        height={212}
        left={1561 * multiplier.x}
        top={1541 * multiplier.y}
      />
      <Deer
        width={170}
        height={170}
        left={1800 * multiplier.x}
        top={740 * multiplier.y}
      />
      <Elephant
        width={200}
        height={200}
        left={2770 * multiplier.x}
        top={1620 * multiplier.y}
      />
      <FishSplash
        width={250}
        height={250}
        left={530 * multiplier.x}
        top={400 * multiplier.y}
      />
      <FishSplash
        width={250}
        height={250}
        left={110 * multiplier.x}
        top={1080 * multiplier.y}
      />
      <FishSplash
        width={250}
        height={250}
        left={350 * multiplier.x}
        top={1750 * multiplier.y}
      />
      <FishSplash
        width={250}
        height={250}
        left={2610 * multiplier.x}
        top={1900 * multiplier.y}
      />
      <FishSplash
        width={250}
        height={250}
        left={2900 * multiplier.x}
        top={150 * multiplier.y}
      />
      <Frog
        width={286}
        height={286}
        left={1765 * multiplier.x}
        top={1315 * multiplier.y}
      />
      <Frog
        width={242}
        height={242}
        left={1580 * multiplier.x}
        top={2218 * multiplier.y}
      />
      <Rams
        width={263}
        height={263}
        left={1227 * multiplier.x}
        top={1255 * multiplier.y}
      />
      <Squirrel
        width={200}
        height={200}
        left={2225 * multiplier.x}
        top={540 * multiplier.y}
      />
      <Tiger
        width={180}
        height={180}
        left={70 * multiplier.x}
        top={1602 * multiplier.y}
      />
      <Walrus
        width={300}
        height={300}
        left={1680 * multiplier.x}
        top={98 * multiplier.y}
      />
      <Whale
        width={240}
        height={240}
        left={2570 * multiplier.x}
        top={970 * multiplier.y}
      />
      <Wolf
        width={330}
        height={330}
        left={530 * multiplier.x}
        top={1 * multiplier.y}
      />
      <Wolf
        width={330}
        height={330}
        left={2780 * multiplier.x}
        top={580 * multiplier.y}
      />
    </>
  );
};
export default Animations;
