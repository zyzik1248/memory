import { getColor } from "../../utilis";

const Step = ({ step = 1, color = "green" }) => {
  return (
    <div
      className={`${getColor(
        color,
        step
      )} border-[1px] border-gray-500 max-w-[25px] p-0 rounded-full after:content-[''] after:block after:pb-[100%]`}
    />
  );
};

export default Step;
