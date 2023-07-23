import React, { useState, useEffect } from "react";
import Main from "../assets/main2.jpg";
import Scroll from "../assets/scroll2.gif";
import NewImage from "../assets/new_scroll.png";

import TypewriterEffect from "./Type.jsx";
import Pen from "../assets/pen.png";

export default function Home() {
  const [scrollImage, setScrollImage] = useState(Scroll);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollImage(NewImage);
      setDisplayText(
        "In publishing and graphic design, Lorem.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );
    }, 3400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const cursorElement = document.querySelector(".custom-cursor");
    cursorElement.style.cursor = `url(${Pen}), auto`;
  }, []);

  return (
    <div className="custom-cursor">
      <div>
        <img alt="" src={Main} className="god__img" />
      </div>
      <div className="h-screen  w-screen lg:flex  lg:flex-row ">
        <div className=" scontent  flex basis-1/2 h-[75vh] md:h-max-[60%] lg:h-screen align-middle justify-center my-auto relative top-[25%] lg:top-0">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black  z-20">
            <TypewriterEffect texts={displayText} />
          </div>
          <img
            alt=""
            src={scrollImage}
            height={596}
            width={600}
            className="relative z-10 scroll-img"
          />
        </div>
      </div>
    </div>
  );
}
