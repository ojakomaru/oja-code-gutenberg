import {RadioControl} from '@wordpress/components';
import InputRowNumber from './InputRowNumber';
import {memo} from 'react';

const CodeFileShowMode = memo(({ codeMode, excerptLength, setAttributes}) => {
  // console.log("CodeFileShowModeレンダー"); //デバック
  return(
    <>
      <RadioControl
        className="fileShowMode"
        label="Codeの表示方法"
        selected={codeMode}
        options={[
          { label: "全文表示", value: "code-all" },
          { label: "全文省略（ClickでOPEN）", value: "code-onclick" },
          { label: "行数指定", value: "code-excerpt" },
        ]}
        onChange={(val) => setAttributes({ codeMode: val })}
      />
      <InputRowNumber
        codeMode={codeMode}
        excerptLength={excerptLength}
        setAttributes={setAttributes}
      />
    </>
  )
});
export default CodeFileShowMode;