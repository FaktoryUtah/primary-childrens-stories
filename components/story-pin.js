import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const StoryPin = ({
  id,
  left,
  pinColor,
  pinDimensions,
  setActiveStory,
  setHoveredPin,
  story,
  title,
  top,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const contentProps = useSpring({
    transform: isAnimated
      ? "translate3d(0,-5px,0) scale(1.15)"
      : "translate3d(0,0px,0) scale(1)",
  });
  const [clickPosition, setClickPosition] = useState({
    x: null,
    y: null,
  });

  const handleClickStart = (e) => {
    setClickPosition({
      x: e.nativeEvent.screenX,
      y: e.nativeEvent.screenY,
    });
  };

  const handleClickEnd = (e) => {
    if (
      clickPosition.x === e.nativeEvent.screenX &&
      clickPosition.y === e.nativeEvent.screenY
    ) {
      setActiveStory(story);
      setHoveredPin(null);
    }
    setClickPosition({
      x: null,
      y: null,
    });
  };

  return (
    <animated.div
      className={`absolute ${isAnimated ? "z-40" : "z-30"} flex text-base`}
      style={{
        left,
        top,
        ...contentProps,
      }}
      onMouseEnter={() => {
        setHoveredPin(story.sys.id);
        setIsAnimated(true);
      }}
      onMouseLeave={() => setIsAnimated(false)}
    >
      <button
        className="z-30"
        href={`/?id=${id}`}
        onMouseDown={handleClickStart}
        onMouseUp={handleClickEnd}
        onTouchStart={handleClickStart}
        onTouchEnd={handleClickEnd}
        style={{
          width: `${pinDimensions[0]}px`,
          height: `${pinDimensions[1]}px`,
        }}
        type="button"
      >
        <img
          alt={title}
          style={{
            width: `${pinDimensions[0]}px`,
            height: `${pinDimensions[1]}px`,
          }}
          src={`/pins/${pinColor}.svg`}
        />
      </button>
      <button
        className={`${
          isAnimated ? "" : "hidden"
        } ml-2 shadow-lg z-20 bg-white py-3 px-8 text-right rounded-lg cursor-pointer`}
        onClick={() => setActiveStory(story)}
        onTouchEnd={() => setActiveStory(story)}
        type="button"
      >
        <span
          className={`relative block z-50 w-20 h-20 mx-auto mt-1 rounded-full shadow-md bg-blue-100 border-2 border-white`}
          style={{
            backgroundImage: `url(${story.fields.featuredImage.fields.file.url}?w=150)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          title={story.fields.title}
        ></span>
        <span className="block text-base font-normal mt-3 normal-case text-blue-500">
          {story.fields.title}
        </span>
      </button>
    </animated.div>
  );
};
export default StoryPin;
