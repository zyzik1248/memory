import Step from "./Step";

const Steps = ({ color = "green", step }) => {
  return (
    <div className="grid grid-cols-10">
      {Array(10)
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
