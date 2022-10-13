<?php
// render_callback 関数の定義
function oja_code_render($attributes) {
  //属性 codeArea が空なら何も表示しない
  if (empty($attributes['codeArea'])) {
    return '';
  }

  //ブロックスタイル用クラス
  $add_block_class  = '';
  $add_inline_style = '';
  $add_pre_style  = '';

  //配置
  if ($attributes['align']) {
    $add_block_class = ' align'. $attributes['align'];
  }

  //デザインスキン
  if ($attributes['skin']) {
    $add_block_class .= ' '.$attributes['skin'];
  }

  //ファイル名が指定されていれば filename_wrapper クラスを追加
  if($attributes['fileName']) {
    $add_block_class .= ' filename_wrapper';
  }

  // maxWidthEnable が true なら max-width をインラインスタイルで設定
  if ($attributes['maxWidthEnable']) {
    $add_inline_style = ' style="max-width: '. $attributes['maxWidth']. 'px"';
  }

  //preタグに追加するクラス
  $add_pre_class = '';
  //Coddfileの表示モード設定
  if($attributes['codeMode'] === "code-excerpt") {
    $add_block_class .= " code-excerpt";
    $add_pre_style .= ' style="-webkit-line-clamp: '.$attributes['excerptLength'].'"';
  } elseif ($attributes['codeMode'] === "code-onclick") {
    $add_block_class .= " code-onclick";
    $add_pre_class = ' accordion__content';
  }

  // ブロックの div 要素に追加のクラスとスタイルを指定
  $output = '<div class="wp-block-oja-code-gutenberg'. $add_block_class. '"'. $add_inline_style. '>';

  //ファイル名の要素を格納する変数
  $file_name = '';
  //ファイル名が指定されていればファイル名を p 要素で出力
  if($attributes['fileName']) {
    $file_name = '<p class="file_name accordion__title">' . esc_html($attributes['fileName']) . '</p>';
    $output .= $file_name;
  }

  // linenums がtrueならクラスを追加
  if($attributes['linenums']) {
    $add_pre_class .= ' linenums';
    // 行の開始番号が指定されていればその値をクラスに追加
    if($attributes['linenumStart'] !== 1 ) {
      $add_pre_class .= ':' . $attributes['linenumStart'];
    }
  }

  // 言語が指定されていればそのクラス（lang-xxxx）を設定
  if ($attributes['lang']) {
    $add_pre_class .= ' lang-' . ($attributes['lang']);
  }

  //書式設定があればインラインスタイルで指定
  if($attributes['fontFamily'] !== 'default' || $attributes['codeMode'] === "code-excerpt") {
    $add_pre_style .= ' style="font-family: '. $attributes['fontFamily']. '"';
    $output .= '<pre class="prettyprint copyCode'  . $add_pre_class . '"' . $add_pre_style . '><button class="copyButton">コピーする</button>';
  } else {
    $output .= '<pre class="prettyprint copyCode' . $add_pre_class . '"><button class="copyButton">コピーする</button>';
  }
  //入力された値を esc_html() でエスケープ処理して出力
  $output .= esc_html($attributes['codeArea']).'</pre></div>';

  return $output;
}