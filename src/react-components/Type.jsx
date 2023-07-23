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

  return <div className="absolute top-[17%] left-[27%] font-bold text-2xl font-text break-words w-[45%] tracking-wide">{text}</div>;
};

export default TypewriterEffect;
