import React from "react";
import "./Generator.css";
import { useState } from "react";
import { extractColors } from "extract-colors";
import { ColorExtractor } from "react-color-extractor";
import images from "../../../public/images.json"

console.log(images)
export default function Generator() {
  const [colors, setColors] = useState(null);
  let [index, setIndex] = useState(0);

  const renderSwatches = () => {
    if (Array.isArray(colors) && colors?.length > 0) {
      const swatches = colors.map((color, id) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100,
            }}
          />
        );
      });

      return swatches;
    }
  };

  const getColors = (detectedColorCodes) => {
    setColors(detectedColorCodes);
  };

  const handleClick = (e) =>{
    e.preventDefault();
    (index < images.length - 1) ? setIndex(index + 1) : setIndex(0)
  }

  return (
    <div>
      <button class="tryImage" type="button" onClick={handleClick}>
        <span class="ICWnuyV">Try demo image</span>
      </button>
      <ColorExtractor getColors={getColors}>
        <img
          src={images[index]}
          style={{ width: 700, height: 500 }}
          alt="sample"
        />
      </ColorExtractor>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {renderSwatches()}
      </div>
    </div>
  );
}
