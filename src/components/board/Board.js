import Fields from "./Fields";
import Steps from "./Steps";

const Board = ({
  color = "green",
  countFields,
  activeFields,
  step = 1,
  fieldStep=1,
  disabled=false,
  onClick
}) => {
  return (
    <div className="w-[min(25%,100vh)]">
      <div className="mb-4">
        <Steps color={color} step={step}/>
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
