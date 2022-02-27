import Fields from "./Fields";
import Steps from "./Steps";

const Board = ({
  color = "green",
  countFields,
  activeFields,
  step = 1,
  fieldStep = 1,
  disabled = false,
  onClick,
  steps
}) => {
  return (
    <div className="xl:w-[min(25%,50vh)] md:w-[min(50%,50vh)] w-[min(100%,calc(50vh-80px))]">
      <div className="mb-4">
        <Steps color={color} step={step} steps={steps} />
      </div>
      <Fields
        color={color}
        countFields={countFields}
        activeFields={activeFields}
        step={step}
        fieldStep={fieldStep}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
};

export default Board;
