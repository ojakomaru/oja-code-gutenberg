import { TextareaControl } from '@wordpress/components';
import React, { memo } from "react";
const TextCodeArea = memo(({ codeArea, setAttributes }) => {
  // console.log("TextCodeAreaレンダー"); //デバック
  //▼テキストエリア（TextareaControl）の行数
  let codeAreaRows =
    codeArea.split(/\r|\r\n|\n/).length > 3
      ? codeArea.split(/\r|\r\n|\n/).length
      : 3;

  return (
    <TextareaControl
      placeholder="Code..."
      value={codeArea}
      onChange={(code) => setAttributes({ codeArea: code })}
      rows={codeAreaRows}
    />
  );
});
export default TextCodeArea;