import React, { useState } from "react";
import { Arrow } from "./utils/Icons";

const Dropdown = ({ onchange, changer }: any) => {
  const [selectedValue, setSelectedValue] = useState("May-June 2021");
  const [ispen, setIsOpen] = useState(false);
  const values = [
    "May-June 2021",
    "May-Aug 2021",
    "Jan-June 2021",
    "May-Dec 2021",
  ];
  return (
    <div className="downdown-parent">
      <div className="selectedValue" onClick={() => setIsOpen(!ispen)}>
        {selectedValue}{" "}
        <Arrow style={{ transform: ispen ? "rotate(180deg)" : "" }} />
      </div>
      {ispen && (
        <div className="menu">
          {values.map((val: any, index: any) => {
            return (
              <div
                key={index}
                onClick={(ev: any) => {
                  console.log(ev.target.innerText);
                  setIsOpen(!ispen);
                  setSelectedValue(ev.target.innerText);
                  onchange(!changer);
                }}
              >
                {val}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
