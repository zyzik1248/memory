import { useState } from "react";
import { useEffect } from "react";
import { randColor, randField } from "../utilis";
import ClikableBoard from "./board/ClickableBoard";
import PreviewBoard from "./board/PreviewBoard";
import { BsAward, BsAwardFill } from "react-icons/bs";

const Game = ({ play, steps }) => {
  const [color, setColor] = useState("");
  const [activeFields, setActiveFields] = useState([]);
  const [step, setStep] = useState(0);
  const [openClickBoard, setOpenClickBoard] = useState(false);
  const [win, setWin] = useState(false)

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        setColor(randColor());
        addField();
      }, 2000);
    } else {
      setStep(0);
      setActiveFields([]);
      setOpenClickBoard(false);
      setWin(false)
    }
  }, [play]);

  const addField = () => {
    const randNumber = randField(16);
    const list = activeFields;
    list.push(randNumber);
    setActiveFields(list.slice());
    setStep(step + 1);
  };

  const isLostMove = (id, stepId) => {
    return id !== activeFields[stepId];
  };

  const lostMove = () => {
    setActiveFields(activeFields.slice());
    setOpenClickBoard(false);
  };

  const winMove = () => {
    if (step < steps) {
      addField();
      setOpenClickBoard(false);
    } else {
      setWin(true)
      setOpenClickBoard(false)
    }
  };

  return (
    <>
      <div className={`flex flex-col items-center justify-center`}>
        {win ? (
          <BsAwardFill className="text-[5rem] mb-6 text-yellow-600 animate-bounce" />
        ) : (
          <BsAward className="text-[5rem] mb-6 text-gray-500" />
        )}
        <div className="flex flex-col w-full gap-10 items-center justify-center sm:flex-row">
          <PreviewBoard
            activeFields={activeFields}
            color={color}
            step={step}
            finishShow={() => setOpenClickBoard(true)}
            steps={steps}
          />
          <ClikableBoard
            color={color}
            open={openClickBoard}
            step={step}
            isLost={isLostMove}
            lost={lostMove}
            win={winMove}
            steps={steps}
            play={play}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
