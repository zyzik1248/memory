import { getColor } from "../../utilis";

const Field = ({id, isActive=false, step = 1, color = "green", disabled = false, onClick }) => {
  const handleClick = () =>{
    onClick && onClick(id)
  }

  return (
    <div className="border-[1px] p-2 bg-transparent relative border-gray-500 after:content-[''] after:block after:pb-[100%]">
      <button
        className={`${
          isActive ? getColor(color, step) : "bg-transparent"
        } absolute w-[calc(100%-1rem)] h-[calc(100%-1rem)] -rotate-2`}
        disabled={disabled}
        onClick={handleClick}
      />
    </div>
  );
};

export default Field;
