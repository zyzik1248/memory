import { useEffect, useState } from "react";
import Board from "./Board";

const PreviewBoard = ({
  activeFields,
  color,
  step,
  finishShow,
  steps
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  let countSteps = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      countSteps++;
      if (countSteps > step +1) {
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
      countFields={16}
      color={color}
      step={step}
      fieldStep={currentStep}
      disabled
      steps={steps}
    />
  );
};

export default PreviewBoard;
