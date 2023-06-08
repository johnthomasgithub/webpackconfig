import React from "react";
import Dropdown from "./Dropdown";

const Cards = ({ Title, Image, Value, Bg }: any) => {
  return (
    <div className="cards-parent" style={{ backgroundColor: `${Bg}` }}>
      <div className="icon"> {Image}</div>
      <div className="">
        {" "}
        <div className="Title">{Title}</div>
        <div className="value">{Value}</div>
      </div>
    </div>
  );
};

export default Cards;
