// built with tailwindcss classes
'use client'; 

import { useRef } from "react";
import { text } from "stream/consumers";

interface tCardProps {
  title?: string;
  textContent: string;
  bgOpacity?: number | string;
  textOpacity?: number | string;
  fullOonHover?: boolean;
  textClass?: string;
  titleClass?: string;
  bgClass?: string;
  className?: string;
}

function OpacityCard({
  title,
  textContent,
  bgOpacity = ".5",
  textOpacity = ".75",
  fullOonHover = true,
  className,
  titleClass,
  textClass,
  bgClass,
}: tCardProps) {


  const cardStyle = {
    bgStyle: {
      opacity: bgOpacity,
    },
    textStyle: {
      opacity: textOpacity,
    },
  };

  // check if optional classes are undefined
  const titleClassTrue = titleClass || "";
  const textClassTrue = textClass || "";
  const bgClassTrue = bgClass || "";
  const classNameTrue = className || "";

  // set opacity props to strings if they are numbers
  const bgOpacityStr = typeof bgOpacity === "number" ? bgOpacity.toString() : bgOpacity;
  const textOpacityStr = typeof textOpacity === "number" ? textOpacity.toString() : textOpacity;

  const bgEl = useRef<null | HTMLDivElement>(null);
  const textEl = useRef<null | HTMLDivElement>(null);

  const handleEnter = () => {
    bgEl.current ? bgEl.current.style.opacity = ".9" : null; 
    textEl.current ? textEl.current.style.opacity = "1" : null;
  }
  
  const handleExit = () => {
    bgEl.current ? bgEl.current.style.opacity = bgOpacityStr : null; 
    textEl.current ? textEl.current.style.opacity = textOpacityStr : null;
  }
  // const handleExit = (e) => {e.target.style.opacity = .5}
  // const handleEnter = (e) => {console.log(bgBox.current.style.opacity)}
  

  return (
    <div
      data-name="positioned"
      className={`relative flex w-full rounded-lg ${classNameTrue}`}
      onMouseOver={fullOonHover ? handleEnter : undefined}
      onMouseOut={fullOonHover ? handleExit : undefined}
    >
      <div
        className={`relative h-fit w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800  ${bgClassTrue}`}
        style={cardStyle.bgStyle}
        ref={bgEl}
      >
        <div
          data-name="hidden-child-copy"
          className={`invisible relative flex-grow justify-center p-6 ${textClassTrue}`}
          style={cardStyle.textStyle}
        >
          {title ? <h2 className={`overflow-clip border-b pb-2 ${titleClassTrue}`}>{title}</h2> : null}
          <p className={`relative border overflow-clip pt-3 ${textClassTrue}`}>
            {textContent}
          </p>
        </div>
      </div>
      <div className="w-full absolute">
        <div
          className={`relative flex-grow justify-center p-6 ${textClassTrue}`}
          style={cardStyle.textStyle}
          ref={textEl}
        >
          {title ? (
            <h2 className={`overflow-clip border-b pb-2 ${titleClassTrue}`}>{title}</h2>
          ) : null}
          <p className={`relative overflow-clip pt-3 ${textClassTrue}`}>
            {textContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpacityCard;
