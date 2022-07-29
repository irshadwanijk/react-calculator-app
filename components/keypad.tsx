import React from "react";
import cx from "classnames";

type KeypadProps = {
  onBtnClick: (name: string) => void;
  result: string;
};

const buttons = [
  //
  "7",
  "8",
  "9",
  "DEL",
  //
  "4",
  "5",
  "6",
  "+",
  //
  "1",
  "2",
  "3",
  "-",
  //
  ".",
  "0",
  "/",
  "*",
  //
  "RESET",
  "=",
];

const specialButtons = ["DEL", "RESET"];

export default function Keypad(props: KeypadProps) {
  return (
    <div className="calculator">
      <div className="heading">
        <label className="heading-calc" htmlFor="calculator">
          calc
        </label>
      </div>
      <div>
        <input
          id="calc-display"
          type="text"
          placeholder="0"
          value={props.result}
        />
      </div>
      <div className="calculator-buttons">
        {buttons.map((btn) => {
          const className = cx("calc-button", {
            [btn.toLowerCase()]: specialButtons.includes(btn),
            equal: btn === "=",
          });

          return (
            <button
              key={btn}
              className={className}
              onClick={(e) => {
                e.preventDefault();
                props.onBtnClick(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}
