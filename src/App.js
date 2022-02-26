import React, { useState } from "react";
import Button from "./components/Button";
import Game from "./components/Game";
import OpenGame from "./components/OpenGame";

const App = () => {
  const maxSteps = 10;
  const defaultStep = 5;

  const [play, setPlay] = useState(false);
  const [steps, setSteps] = useState(defaultStep);

  const startPlay = (steps) => {
    setPlay(true);
    setSteps(steps * 1);
  };

  const restart = () => {
    setPlay(false);
  };

  return (
    <div className="relative m-10">
      <div
        className={`${
          play ? "blur-0" : "blur-sm"
        } transition ease-in-out delay-500 duration-1000`}
      >
        <Game play={play} steps={steps} />
        <div className="flex justify-center items-center mt-6">
          <Button label="resetuj" onClick={restart} />
        </div>
      </div>
      <OpenGame
        maxSteps={maxSteps}
        defaultStep={defaultStep}
        play={play}
        startPlay={startPlay}
      />
    </div>
  );
};

export default App;
