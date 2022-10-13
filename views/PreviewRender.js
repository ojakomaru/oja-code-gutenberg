import React, { memo, useMemo, useCallBack } from "react";
//プレビューをレンダリングする関数
const PreviewRender = ({ className, attributes }) => {
  console.log("PreviewRenderレンダー"); //デバック
  const {
    codeArea,
    align,
    skin,
    fileName,
    maxWidthEnable,
    linenumStart,
    linenums,
    lang,
    fontFamily,
    maxWidth,
  } = attributes;
  // コードが入力されていない時
  if (codeArea === "") {
    return null;
  }

  // ブロックスタイル用クラス
  let addBlockClass = "",
    addInlineStyle = {},
    addPreClass = "",
    addFontFamily = {};
  //配置
  if (align) {
    addBlockClass = " align" + align;
  }

  //デザインスキン
  if (skin) {
    addBlockClass += " " + skin;
  }

  //ファイル名が指定されていれば filename_wrapper クラスを追加
  if (fileName) {
    addBlockClass += " filename_wrapper";
  }

  // maxWidthEnable が true なら max-width をインラインスタイルで設定
  if (maxWidthEnable) {
    addInlineStyle = { maxWidth: maxWidth };
  }

  // linenums がtrueならクラスを追加
  if (linenums) {
    addPreClass = " linenums";
    // 行の開始番号が指定されていればその値をクラスに追加
    if (linenumStart !== 1) {
      addPreClass += ":" + linenumStart;
    }
  }

  //言語が指定されていればそのクラスを指定
  if (lang) {
    addPreClass += " lang-" + lang;
  }

  //書式設定があればインラインスタイルで指定
  if (fontFamily !== "default") {
    addFontFamily = { fontFamily: fontFamily };
  }

  //最終的なマークアップをレンダリング
  return (
    <div className={className + addBlockClass} style={addInlineStyle}>
      {attributes.fileName && (
        <p className="file_name">{attributes.fileName}</p>
      )}
      <pre className={"prettyprint" + addPreClass} style={addFontFamily}>
        {attributes.codeArea}
      </pre>
    </div>
  );
};
export default PreviewRender;
