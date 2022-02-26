import { useEffect } from "react";
import { useState } from "react";
import Board from "./Board";

const ClikableBoard = ({
  color,
  open,
  isLost,
  win,
  lost,
  step,
  steps,
  play
 }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fieldId, setFieldId] = useState(-1);

  useEffect(()=>{
    if(!play){
      setCurrentStep(0)
      setFieldId(-1)
    }
  }, [play])

  const onClick = (id) => {
    setFieldId(id);
    setCurrentStep(currentStep + 1);
    setTimeout(() => move(id), 300);
  };

  const move = (id) => {
    if (isLost(id, currentStep)) {
      setCurrentStep(0);
      lost();
    } else {
      if (currentStep + 1 === step) {
        setCurrentStep(0);
        win();
      }
    }
    setFieldId(-1);
  };

  return (
    <Board
      countFields={16}
      color={color}
      disabled={!open || fieldId !== -1}
      onClick={onClick}
      fieldStep={currentStep}
      step={currentStep}
      activeFields={fieldId !== -1 ? [fieldId] : []}
      steps={steps}
    />
  );
};

export default ClikableBoard;
