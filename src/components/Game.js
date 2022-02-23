import { useState } from "react";
import { useEffect } from "react";
import { randColor, randField } from "../utilis";
import Board from "./board/Board";

const Game = () => {
  const [color, setColor] = useState("");
  const [activeFields, setActiveFields] = useState([]);
  const [step, setStep] = useState(3);
  const countFields = 16;

  useEffect(() => {
    setColor(randColor());
    for (let i = 0; i < 3; i++) {
      addField();
    }
  }, []);

  const addField = () => {
    const randNumber = randField(countFields);
    const list = activeFields;
    list.push(randNumber);
    setActiveFields(list.slice());
  };

  return (
    <div className="flex h-screen items-center justify-center gap-5">
      <Board
        color={color}
        countFields={countFields}
        activeFields={activeFields}
        step={step}
      />
      <Board
        color={color}
        countFields={countFields}
        activeFields={activeFields}
        step={step}
      />
    </div>
  );
};

export default Game;
