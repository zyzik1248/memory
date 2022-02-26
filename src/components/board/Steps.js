import Step from "./Step";

const Steps = ({ color = "green", step, steps={steps} }) => {
  return (
    <div className="grid grid-cols-10">
      {Array(steps)
        .fill("")
        .map((el, index) => (
          <Step
            color={color}
            step={index + 1}
            key={index}
            isActive={index + 1 <= step}
          />
        ))}
    </div>
  );
};

export default Steps;
