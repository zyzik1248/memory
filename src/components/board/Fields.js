import { colors } from "../../utilis";
import Field from "./Field";

const Fields = ({disable = false}) => {
  return (
    <div className="grid grid-cols-4 border-[1px] border-gray-500">
      {Array(16)
        .fill(0)
        .map((el, index) => (
          <Field key={index} color={colors.blue} isActive={true} />
        ))}
    </div>
  );
};

export default Fields;
