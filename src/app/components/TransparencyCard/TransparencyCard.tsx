// built with tailwindcss classes
'use client'; 

import { useRef } from "react";
import { text } from "stream/consumers";

interface tCardProps {
  title?: string;
  textContent: string;
  bgOpacity?: number;
  textOpacity?: number;
  fullOonHover?: boolean;
  textClass?: string;
  titleClass?: string;
  bgClass?: string;
  className?: string;
}

function TansparencyCard({
  title,
  textContent,
  bgOpacity,
  textOpacity,
  fullOonHover = true,
  className,
  titleClass,
  textClass,
  bgClass,
}: tCardProps) {
  bgOpacity = bgOpacity || 1;
  textOpacity = textOpacity || 1;

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

  const bgEl = useRef(null);
  const textEl = useRef(null);

  const handleEnter = () => {
    bgEl.current.style.opacity = 1; 
    textEl.current.style.opacity = 1
  }
  
  const handleExit = () => {
    bgEl.current.style.opacity = bgOpacity; 
    textEl.current.style.opacity = textOpacity
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
          {title ? <h1 className={titleClassTrue}>{title}</h1> : null}
          <p className={`relative border border-red-600 ${textClassTrue}`}>
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
            <h1 className={`overflow-clip ${titleClassTrue}`}>{title}</h1>
          ) : null}
          <p className={`relative overflow-clip ${textClassTrue}`}>
            {textContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TansparencyCard;
