import Fields from "./Fields";
import Steps from "./Steps";

const Board = () => {
  return (
    <div className="w-[min(25%,100vh)]">
      <div className="mb-4">
        <Steps />
      </div>
      <Fields />
    </div>
  );
};

export default Board;
