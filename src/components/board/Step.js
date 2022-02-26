import { getColor } from "../../utilis";

const Step = ({ step = 1, color = "green", isActive = false }) => {
  return (
    <div
      className={`${
        isActive ? getColor(color, step) : "bg-gray-500"
      } border-[1px] mx-[2px] border-gray-500 max-w-[25px] p-0 rounded-full after:content-[''] after:block after:pb-[100%]`}
    />
  );
};

export default Step;
