import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import useWindowSize from "shared/hooks/useWindowSize";

const Arrow = ({ arrow }) => {
  const [resetAnimation, setResetAnimation] = useState(false);
  const [animating, setAnimating] = useState(true);

  const props = useSpring(
    animating
      ? {
          from: { opacity: 0, transform: `translate3d(-60px, 0, 0)` },
          to: [
            { opacity: 1, transform: `translate3d(0, 0, 0)` },
            { opacity: 1, transform: `translate3d(-20px, 0, 0)` },
            { opacity: 1, transform: `translate3d(0, 0, 0)` },
          ],
          config: {
            duration: 1000,
            mass: 1,
            tension: 140,
            friction: 12,
          },
          delay: 1000,
        }
      : {}
  );

  useEffect(() => {
    setInterval(() => {
      setAnimating(false);

      setTimeout(() => {
        setAnimating(true);
      }, 100);
    }, 6000);
  }, []);

  return (
    <animated.button
      onClick={() => {
        arrow.onClickFunction();
      }}
      type="button"
      style={props}
    >
      <svg
        className="w-full h-full stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <title>arrow</title>
        <polyline
          points="328 112 184 256 328 400"
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48px",
          }}
        />
      </svg>
    </animated.button>
  );
};

const PageArrows = ({ translation, setTranslation }) => {
  const size = useWindowSize();

  const arrows = [
    // left arrow
    {
      transform: `translate3d(0, ${size.height / 2 - 20}px, 0)`,
      positionClass: `left-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x + 50 });
      },
    },
    // right arrow
    {
      transform: `translate3d(0, ${size.height / 2 - 20}px, 0) rotate(180deg)`,
      positionClass: `right-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x - 50 });
      },
    },
    // bottom arrow
    {
      transform: `translate3d(${size.width / 2 - 40}px, 0, 0) rotate(-90deg)`,
      positionClass: `left-0 bottom-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, y: translation.y - 50 });
      },
    },
  ];

  return (
    <>
      {arrows.map((arrow) => {
        return (
          <div
            className={`absolute overflow-hidden ${arrow.positionClass} z-50 w-20 h-20 rounded-full flex items-center justify-center text-white focus:outline-none focus:text-blue-100`}
            key={arrow.positionClass}
            style={{ transform: arrow.transform }}
          >
            <Arrow arrow={arrow} />
          </div>
        );
      })}
    </>
  );
};
export default PageArrows;
