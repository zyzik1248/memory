import { getColor } from "../../utilis";

const Field = ({ isActive, step = 1, color = "green" }) => {
  return (
    <div className="border-[1px] p-2 border-gray-500 after:content-[''] after:block after:pb-[100%]">
      <div
        className={`${
          isActive ? getColor(color, step) : "bg-transparent"
        } w-full h-full cursor-pointer -rotate-2`}
      ></div>
    </div>
  );
};

export default Field;
