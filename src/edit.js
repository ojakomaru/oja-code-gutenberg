import {
  TextControl,
  Button,
} from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import RequiredFileName from "./components/RequiredFileName.js";
import CodeFileShowMode from "./components/CodeFileShowMode.js";
import TextCodeArea from './components/TextCodeArea.js';
import GetViewMode from "./components/GetViewMode.js";
import OjaInspector from "./components/OjaInspector.js";
import PreviewRender from "../views/PreviewRender.js";
import {useBlockProps} from "@wordpress/block-editor";
import "./editor.scss";
// import React, {memo, useMemo, useCallBack} from 'react';

export default function Edit(props) {
  const blockProps = useBlockProps();
  const {
    attributes: { codeArea, fileName },
    attributes,
    className,
    setAttributes,
  } = props;
  const {isEditMode, codeMode, excerptLength, ...renderAttr } = attributes;

  // 実行結果をメモしたいけど、、上手く行かない、、
  // renderAttrをuseEffectの依存配列に渡すと、ナンバーのレンダリングが反映されるけど、バグが起きるので一旦保留にする
  // 依存配列をオブジェクトから配列に変換してみた、、けど、、
  // const dependenceAttr = Object.keys(renderAttr);
  // const previewRender = useMemo(() => PreviewRender(props), [dependenceAttr]);

  // ▼管理画面上でcode−prettifyを実行する関数を登録するフック
  useEffect(() => {
    PR.prettyPrint();
  }, [isEditMode]);

  // returnを組み立てる
  return (
    <Fragment>
      <GetViewMode isEditMode={isEditMode} setAttributes={setAttributes} />
      <OjaInspector attributes={attributes} setAttributes={setAttributes} />
      {isEditMode && [
        <div {...blockProps} className={className}>
          <RequiredFileName codeMode={codeMode} fileName={fileName} />
          <TextControl
            label="File Name"
            type="string"
            className="filename"
            value={fileName}
            onChange={(val) => setAttributes({ fileName: val })}
          />
          <CodeFileShowMode
            codeMode={codeMode}
            excerptLength={excerptLength}
            setAttributes={setAttributes}
          />
          <TextCodeArea codeArea={codeArea} setAttributes={setAttributes} />
        </div>,
      ]}
      {!attributes.isEditMode && [
        <Button
          onClick={() => setAttributes({ isEditMode: true })}
          isLink
          icon="edit"
        >
          編集モード
        </Button>,
        PreviewRender(props),
      ]}
    </Fragment>
  );
} //export default function Edit(props)
