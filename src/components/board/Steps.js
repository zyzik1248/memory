import { colors } from "../../utilis";
import Step from "./Step";

const Steps = () => {
  return (
    <div className="grid grid-cols-10">
      {Array(10).fill("").map((el, index)=><Step color={colors.blue} step={index+1} key={index}/>)}
    </div>
  );
};

export default Steps;
