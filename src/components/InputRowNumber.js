import{TextControl} from "@wordpress/components";
import { memo } from "react";
const InputRowNumber = memo(({codeMode, excerptLength, setAttributes}) => {
  // console.log("InputRowNumberレンダー"); //デバック
  if (codeMode === "code-excerpt") {
    return (
      <TextControl
        label="表示する行数を設定"
        type="number"
        className="row-number"
        value={excerptLength}
        onChange={(val) => setAttributes({ excerptLength: val })}
      />
    )
  }
  return null;
});
export default InputRowNumber;
