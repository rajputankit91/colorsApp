import React, { useEffect, useState } from "react";
import palettesData from "../public/palettes.json";
import "./palettes.css";
import { IoMdSearch } from "react-icons/io";
import ReusableInput from "./common/Input";
import MainHeading from "./mainHeading/MainHeading";

const Palettes = () => {
  const [palettes, setPalettes] = useState(palettesData);
  const [searchVal, setSearchVal] = useState("");
  
  useEffect(() =>{
  },[searchVal])

  const keyUpFunction = (e) =>{
    if(e.key === "Enter"){
      e.preventDefault();
      if (searchVal === "") {
        setPalettes(palettes);
        return;
      }
      const filterBySearch = palettes.filter((item) => {
        if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
          return item;
        }
      });
      setPalettes(filterBySearch);
    }
  }
  console.log(searchVal);

  return (
    <>
      <form onSubmit={(e) =>e.preventDefault()}>
        <ReusableInput
          icon={<IoMdSearch />}
          type={"text"}
          placeholder={"Search with colors, topics, styles or hex values..."}
          onChange={(e) => setSearchVal(e.target.value)}
          keyupfunction={keyUpFunction} 
        />
      </form>
      

      <MainHeading />

      <div className="container">
        <h1>Container</h1>
        <div className="innerContainer">
          {palettes.map((palette, index) => {
            return (
              <div className="explore-palettes_col">
                <div className="palette_card">
                  <div className="palette_cardColor">
                    {palette.colors.map((color, index) => {
                      {console.log(color,"00000000000000")}
                      return (
                        <div style={{ backgroundColor: `${color}` }}>
                          <span></span>
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className="cardDetails">card Details</div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Palettes;
