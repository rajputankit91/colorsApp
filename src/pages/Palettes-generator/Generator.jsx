import React from "react";
import "./Generator.css";
import { useState } from "react";
import images from "../../../public/images.json";
import PalettesShow from "../palettes/Palettes";
import Button from "../../common/Button";
import { extractColors } from "extract-colors";
import { ColorExtractor } from "react-color-extractor";

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

  const handleClick = (e) => {
    e.preventDefault();
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  extractColors(images[0])
  .then(console.log)
  .catch(console.error)

  return (
    <>
      <section className="section generator">
        <div className="sectionWrapper">
          <div className="left wrapper">
            <div className="innerleftContainer">
              <h1>The easiest place to get colors from your photos</h1>
              <p>
                Want a color scheme that perfectly matches your favorite images?
                With Canva’s color palette generator, you can create color
                combinations in seconds. Simply upload a photo, and we’ll use
                the hues in the photo to create your palette.
              </p>
              <div className="btnDiv">
                <Button className="uploadBtn" type="select">
                  Upload an image
                </Button>
                <Button className="demoBtn" onClick={handleClick}>
                  Try demo image
                </Button>
              </div>
            </div>
          </div>

          <div className="right wrapper">
            <span className="selectImages">

              <ColorExtractor getColors={getColors}>
                <img
                  src={images[index]}
                  style={{ width: 700, height: 500 }}
                  alt="sample"
                />
              </ColorExtractor>
            </span>
            <div className="colorPalette">{renderSwatches()}</div>
          </div>
        </div>
      </section>
      <section className="divider">
        <hr className="divideLine"></hr>
      </section>
      <section className="color explorer">
        <div className="heading">
          <h3>
            For endless color palette ideas, visit our color combinations
            resource
          </h3>
        </div>
        <PalettesShow></PalettesShow>
        <div className="exploreAndCustonColor">
          <Button className="exploreBtn">Explore color combinations</Button>
          <Button className="customBtn">Create a custom color palette</Button>
        </div>
      </section>
    </>
  );
}
