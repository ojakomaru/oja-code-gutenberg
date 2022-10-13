
import { memo } from "react";
const RequiredFileName = memo(({codeMode, fileName}) => {
  // console.log("RequiredFileNameレンダー"); //デバック
  if (codeMode === "code-onclick" && fileName === "") {
    return <p className="filename-err">※表示方法が全文省略の場合必須です</p>;
  }
  return null;
});
export default RequiredFileName;