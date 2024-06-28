// built with tailwindcss classes
'use client'; 

import { useRef } from "react";
import Image from "next/image";

// union type to match up with the requirements of the Image component from nextJS
type cardImgProps = (
  {URL: string, alt: string, height: number, width: number, fill?: undefined | false } | 
  {URL: string, alt: string, height: number, fill: true, width?: undefined } |
  {URL: string, alt: string, width: number, fill: true, height?: undefined }  
)

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
  cardImg?: cardImgProps;
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
  cardImg,
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

  return (
    <div
      data-name="positioned"
      className={`relative flex w-full rounded-lg ${classNameTrue}`}
      onMouseOver={fullOonHover ? handleEnter : undefined}
      onMouseOut={fullOonHover ? handleExit : undefined}
    >
      {/* this is the background element, the content is hidden and only used to adjust the size */}
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
          {cardImg ? (
            <div className="pb-2 mb-2">
              {(cardImg?.height && cardImg?.width) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                width={cardImg.width} 
                height={cardImg.height} 
                />
              ) : null}
              {(cardImg?.height && cardImg?.fill) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                height={cardImg.height} 
                fill={cardImg.fill} 
                />
              ) : null}
              {(cardImg?.width && cardImg?.fill) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                width={cardImg.width} 
                fill={cardImg.fill}
                />
              ) : null}
            </div>
          ) : null}

          {title ? <h2 className={`overflow-clip border-b pb-2 ${titleClassTrue}`}>{title}</h2> : null}
          <p className={`relative border overflow-clip pt-3 ${textClassTrue}`}>
            {textContent}
          </p>
        </div>
      </div>
      {/* this element contains the visible content */}
      <div className="w-full absolute">
        <div
          className={`relative flex-grow justify-center p-6 ${textClassTrue}`}
          style={cardStyle.textStyle}
          ref={textEl}
        >
          {cardImg ? (
            <div className="pb-2 mb-2">
              {(cardImg?.height && cardImg?.width) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                width={cardImg.width} 
                height={cardImg.height} 
                />
              ) : null}
              {(cardImg?.height && cardImg?.fill) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                height={cardImg.height} 
                fill={cardImg.fill} 
                />
              ) : null}
              {(cardImg?.width && cardImg?.fill) ? (
                <Image 
                src={cardImg.URL}
                alt="positioning placeholder" 
                width={cardImg.width} 
                fill={cardImg.fill}
                />
              ) : null}
            </div>
          ) : null}
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
