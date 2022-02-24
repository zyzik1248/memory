import { useEffect, useState } from "react";
import Board from "./Board";

const PreviewBoard = ({
  activeFields,
  color,
  countFields,
  step,
  finishShow,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  let steps = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      steps++;
      if (steps > step +1) {
        setCurrentStep(0);
        finishShow && finishShow();
        clearInterval(intervalId);
      } else {
        setCurrentStep((currentStep) => currentStep + 1);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [activeFields]);

  return (
    <Board
      activeFields={currentStep ? [activeFields[currentStep - 1]] : []}
      countFields={countFields}
      color={color}
      step={step}
      fieldStep={currentStep}
      disabled
    />
  );
};

export default PreviewBoard;
