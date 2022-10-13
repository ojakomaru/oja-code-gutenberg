import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import "./style.scss";

registerBlockType("oja/code-gutenberg", {
  title: "Oja Code Gutenberg",
  description:
    "プログラミング言語をシンタックスハイライトします ", //説明（オプション）
  icon: "smiley", //アイコン（オプション）
  category: "common",
  keywords: ["code", "oja", "pre"],
  supports: {
    customClassName: false,
    anchor: false,
  },
  edit: Edit,
  save: () => {
    return null;
  },
});
