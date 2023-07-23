import React, { useState, useEffect } from "react";

const TypewriterEffect = ({texts}) => {
  const [text, setText] = useState("");
  const fullText = texts; // Replace with your desired text

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText.charAt(currentIndex);
        setText(currentText);
        currentIndex++;
        setTimeout(typeNextCharacter, 100); // Adjust the typing speed here
      }
    };

    typeNextCharacter();
  }, [fullText]);

  return <div className="absolute top-[17%] left-[25%] lg:left-[27%] font-bold lg:text-2xl text-5xl font-text break-words w-[50%] lg:w-[45%] tracking-wide">{text}</div>;
};

export default TypewriterEffect;
