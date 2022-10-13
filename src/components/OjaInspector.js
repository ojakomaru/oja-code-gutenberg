import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  ToggleControl,
  SelectControl,
  TextControl,
  RangeControl,
  CheckboxControl,
} from "@wordpress/components";

//▼インスペクターを表示する関数
const OjaInspector = ({ attributes, setAttributes }) => {
  // console.log('OjaInspectorレンダー'); //デバック
  return (
    <InspectorControls>
      <PanelBody title="シンタックスハイライト設定" initialOpen={true}>
        <PanelRow>
          <ToggleControl
            // トグル切替時にレンダリングしたい
            label={attributes.linenums ? "行番号(表示）" : "行番号（非表示）"}
            checked={attributes.linenums}
            onChange={(val) => setAttributes({ linenums: val })}
          />
        </PanelRow>
        {attributes.linenums && (
          <PanelRow>
            <TextControl
              // 行番号を指定してハイライトするようにしたい
              label="開始する行番号"
              type="number"
              value={attributes.linenumStart}
              onChange={(val) => setAttributes({ linenumStart: parseInt(val) })}
            />
          </PanelRow>
        )}
        <PanelRow>
          <SelectControl
            // 配置を変更するとレンダリング後におかしくなるため要検証
            label="ブロックの配置"
            value={attributes.align}
            options={[
              { label: "なし", value: "" },
              { label: "左寄せ", value: "left" },
              { label: "中央寄せ", value: "center" },
              { label: "右寄せ", value: "right" },
              { label: "幅広", value: "wide" },
            ]}
            onChange={(val) => setAttributes({ align: val })}
          />
        </PanelRow>
        <PanelRow>
          <CheckboxControl
            label="最大幅を指定"
            checked={attributes.maxWidthEnable}
            onChange={(val) => setAttributes({ maxWidthEnable: val })}
            help="※ インラインスタイルで設定します"
          />
        </PanelRow>
        {attributes.maxWidthEnable && (
          <PanelRow>
            <RangeControl
              label="最大幅設定"
              value={attributes.maxWidth}
              onChange={(val) => setAttributes({ maxWidth: parseInt(val) })}
              min={300}
              max={1800}
              step={10}
              help="最大幅を px で指定します"
            />
          </PanelRow>
        )}
        <PanelRow>
          <SelectControl
            label="言語選択"
            value={attributes.lang}
            options={[
              { label: "Default", value: "" },
              { label: "CSS", value: "css" },
              { label: "SQL", value: "sql" },
              { label: "PHP", value: "php" },
              { label: "JavaScript", value: "js" },
              { label: "SASS", value: "scss" },
              { label: "Bash", value: "bash" },
              { label: "Java", value: "java" },
              { label: "C++", value: "c++" },
            ]}
            help="※ 適切な言語を設定することで綺麗にハイライトされます"
            onChange={(val) => setAttributes({ lang: val })}
          />
        </PanelRow>
        <PanelRow>
          <SelectControl
            // デフォルト何する？
            label="書式設定"
            value={attributes.fontFamily}
            options={[
              { label: "デフォルト", value: "default" },
              { label: "MS P明朝", value: "MS P明朝" },
              { label: "Menlo", value: "Menlo" },
              { label: "monospace", value: "monospace" },
              { label: "Courier", value: "Courier" },
              { label: "Ricty Diminished", value: "Ricty Diminished" },
            ]}
            onChange={(val) => setAttributes({ fontFamily: val })}
          />
        </PanelRow>
        <PanelRow>
          <SelectControl
            label="デザインスキン"
            value={attributes.skin}
            options={[
              { label: "Basic", value: "" },
              { label: "Desert", value: "desert" },
              { label: "Doxy", value: "doxy" },
              { label: "Sons-of-obsidian", value: "sons-of-obsidian" },
              { label: "Sunburst", value: "sunburst" },
            ]}
            onChange={(val) => setAttributes({ skin: val })}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};
export default OjaInspector;
