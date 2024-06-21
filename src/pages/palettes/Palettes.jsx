import "./palettes.css";
import React, { useEffect, useState } from "react";
import palettesData from "../../../public/palettes.json";

const PalettesShow = () => {
  const [palettes, setPalettes] = useState(palettesData);

  return (
    <>
      <div className="container">
        <div className="innerContainer">
          {palettes.map((palette, index) => {
            return (
              <div className="explore-palettes_col" key={index}>
                <div className="palette_card">
                  <div className="palette_cardColor" key={index}>
                    {palette.colors.map((color, index) => {
                      return (
                        <div
                          style={{ backgroundColor: `${color}` }}
                          key={index}
                        >
                          <p>{color}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PalettesShow;
