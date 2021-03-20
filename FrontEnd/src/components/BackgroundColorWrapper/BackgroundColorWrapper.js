import React, { useState } from "react";
import {
  BackgroundColorContext,
  backgroundColors,
} from "C:/Users/win10/Desktop/mdp/FrontEnd/src/contexts/BackgroundColorContext";

export default function BackgroundColorWrapper(props) {
  const [color, setColor] = useState(backgroundColors.blue);

  function changeColor(color) {
    setColor(color);
  }

  return (
    <BackgroundColorContext.Provider
      value={{ color: color, changeColor: changeColor }}
    >
      {props.children}
    </BackgroundColorContext.Provider>
  );
}
