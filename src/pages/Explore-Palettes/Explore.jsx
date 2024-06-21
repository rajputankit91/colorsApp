import "./Explore.css";
import React, { useEffect, useState } from "react";
import palettesData from "../../../public/palettes.json";
import { IoMdSearch } from "react-icons/io";
import ReusableInput from "../../common/Input";
import MainHeading from "../../mainHeading/MainHeading";
import PalettesShow from "../palettes/Palettes";

const Palettes = () => {
  const [palettes, setPalettes] = useState(palettesData);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {}, [searchVal]);

  const keyUpFunction = (e) => {
    if (e.key === "Enter") {
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
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <ReusableInput
          icon={<IoMdSearch />}
          type={"text"}
          placeholder={"Search with colors, topics, styles or hex values..."}
          onChange={(e) => setSearchVal(e.target.value)}
          keyupfunction={keyUpFunction}
        />
      </form>

      <MainHeading />
      <PalettesShow></PalettesShow>
    </>
  );
};

export default Palettes;