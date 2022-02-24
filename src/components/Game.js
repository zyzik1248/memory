import { useState } from "react";
import { useEffect } from "react";
import { randColor, randField } from "../utilis";
import ClikableBoard from "./board/ClickableBoard";
import PreviewBoard from "./board/PreviewBoard";

const Game = () => {
  const countFields = 16;

  const [color, setColor] = useState("");
  const [activeFields, setActiveFields] = useState([]);
  const [step, setStep] = useState(1);
  const [openClickBoard, setOpenClickBoard] = useState(false);

  useEffect(() => {
    setColor(randColor());
    addField();
  }, []);

  const addField = () => {
    const randNumber = randField(countFields);
    const list = activeFields;
    list.push(randNumber);
    setActiveFields(list.slice());
  };

  const isLostMove = (id, stepId) => {
    return id !== activeFields[stepId];
  };

  const lostMove = () => {
    setActiveFields(activeFields.slice());
    setOpenClickBoard(false);
  };

  const winMove = () => {
    addField();
    setStep(step + 1);
    setOpenClickBoard(false);
  };

  return (
    <div className="flex h-screen items-center justify-center gap-5">
      <PreviewBoard
        activeFields={activeFields}
        color={color}
        countFields={countFields}
        step={step}
        finishShow={()=>setOpenClickBoard(true)}
      />
      <ClikableBoard
        countFields={countFields}
        color={color}
        open={openClickBoard}
        step={step}
        isLost={isLostMove}
        lost={lostMove}
        win={winMove}
      />
    </div>
  );
};

export default Game;
