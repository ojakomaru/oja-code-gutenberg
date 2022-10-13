import { BlockControls } from "@wordpress/block-editor";
import { Toolbar, Button } from "@wordpress/components";
import { memo } from "react";
// ▼プレビューボタンの判定関数
const GetViewMode = memo(({ isEditMode, setAttributes }) => {
  // console.log("GetViewModeレンダー"); //,メモ化成功
  return (
    <BlockControls>
      <Toolbar>
        <Button
          //属性 isEditMode の値により表示するラベルを切り替え
          label={isEditMode ? "Preview" : "Edit"}
          //属性 isEditMode の値により表示するアイコンを切り替え
          icon={isEditMode ? "format-image" : "edit"}
          className="preview-button"
          //setAttributes を使って属性の値を更新（真偽値を反転）
          onClick={() => setAttributes({ isEditMode: !isEditMode })}
        />
      </Toolbar>
    </BlockControls>
  );
});
export default GetViewMode;