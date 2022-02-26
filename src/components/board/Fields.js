import { useEffect } from "react";
import { useState } from "react";
import Field from "./Field";

const Fields = ({
  disabled = false,
  color = "green",
  countFields,
  activeFields = [],
  fieldStep = 1,
  onClick
}) => {
  
  return (
    <div className="grid grid-cols-4 border-[1px] border-gray-500">
      {Array(countFields)
        .fill(0)
        .map((el, index) => (
          <Field
            key={index}
            id={index}
            color={color}
            isActive={activeFields.find((el) => el === index)!==undefined}
            step={fieldStep}
            disabled={disabled}
            onClick={onClick}
          />
        ))}
    </div>
  );
};

export default Fields;
