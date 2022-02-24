import { useState } from "react";
import Board from "./Board";

const ClikableBoard = ({
  countFields,
  color,
  open,
  isLost,
  win,
  lost,
  step,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fieldId, setFieldId] = useState(-1);

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
      countFields={countFields}
      color={color}
      disabled={!open || fieldId !== -1}
      onClick={onClick}
      fieldStep={currentStep}
      step={currentStep}
      activeFields={fieldId !== -1 ? [fieldId] : []}
    />
  );
};

export default ClikableBoard;
