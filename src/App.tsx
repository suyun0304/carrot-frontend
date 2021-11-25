import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";

import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";

import { KeyboardEvent } from "react";

import { useState } from "react";
import Button from "./Button";

import Calculator from "./Calculator";
import Test from "./pages/Test";

const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <>
      <Button name="hello" callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="nextop" callback={updateLatestName} />
      <article>{latestName} is clicked</article>

      <Calculator />

      <Test />
    </>
  );
};

export default App;
