import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Field from "./Field";

const Fields = ({
  disable = false,
  color = "green",
  countFields,
  activeFields=[],
  step=1
}) => {
  const [intervalId, setIntervalId] = useState(0);
  const [currentStep, setCurrentStep] = useState(0)
  let steps = 0

  useEffect(()=>{
    const intervalId = setInterval(() => {
      showFields()
    }, 500);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId)
  }, [])

  const showFields = () =>{
    steps++
    if(steps > step){
      setCurrentStep(0)
      clearInterval(intervalId)
    } else {
      setCurrentStep(currentStep => currentStep + 1);
    }
  }

  return (
    <div className="grid grid-cols-4 border-[1px] border-gray-500">
      {Array(countFields)
        .fill(0)
        .map((el, index) => (
          <Field
            key={index}
            color={color}
            isActive={currentStep && activeFields[currentStep-1] === index}
            step={currentStep}
          />
        ))}
    </div>
  );
};

export default Fields;
