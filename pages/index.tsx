import type { NextPage } from "next";
// import { useImmer } from "use-immer";
import React, { useState } from "react";
import Keypad from "../components/keypad";

const operators = ["+", "-", "/", "*"];

const Home: NextPage = (props: string) => {
  const [result, setResult] = useState("");
  function calculate() {
    try {
      setResult(eval(result) + "");
    } catch (e) {
      setResult("error");
    }
  }

  function backspace() {
    setResult((prevResult) => prevResult.slice(0, -1));
  }
  function reset() {
    setResult("");
  }

  function onBtnClick(keyName: string) {
    let lastIndex = result.length - 1;
    switch (keyName) {
      case "DEL":
        backspace();
        break;
      case "RESET":
        reset();
        break;
      case "=":
        if (result) {
          calculate();
        }
        break;
      default:
        if (
          operators.includes(result[lastIndex]) &&
          operators.includes(keyName)
        ) {
          setResult(result.slice(0, -1) + keyName);
        } else {
          setResult(result + keyName);
        }
    }
  }

  return (
    <div>
      <div className="">
        {/* <Theme /> */}
        <Keypad onBtnClick={onBtnClick} result={result} />
      </div>
    </div>
  );
};

export default Home;
