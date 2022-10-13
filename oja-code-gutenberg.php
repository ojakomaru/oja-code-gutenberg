<?php
/**
 * Plugin Name:     Oja Code Gutenberg
 * Description:     プログラミング言語をシンタックスハイライトします。   詳細な設定をお好みで追加することでサイトのデザインにマッチします
 * Version:         1.1
 * Author:          おジャコ丸
 *
 * @package         oja
 */

use function PHPSTORM_META\type;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

new OjaCodeGutenberg;
class OjaCodeGutenberg{
  public function __construct() {
    add_action( 'init', array($this, 'oja_code_gutenberg') );
    add_action('enqueue_block_assets', array($this,'add_code_prettify_scripts_and_styles'));
  }

  // ▼ブロックスクリプトの登録
  public function oja_code_gutenberg() {
    $dir = dirname( __FILE__ );

    //依存スクリプトの配列とバージョンが記述されたアセットファイルの読み込み
    $script_asset = require( "$dir/build/index.asset.php" );

    //ブロック用のスクリプトの登録
    wp_register_script(
      //スクリプトのハンドル名
      'oja_code_gutenberg-script',
      //スクリプトの URL
      plugins_url( 'build/index.js', __FILE__ ),
      //依存するスクリプト
      $script_asset['dependencies'],
      //スクリプトのバージョン
      $script_asset['version']
    );

    //エディタ用のスタイルの登録
    wp_register_style(
      'oja_code_gutenberg-editor-style',
      plugins_url( 'build/index.css', __FILE__ ),
      array(),
      filemtime( "$dir/build/index.css" )
    );

    //フロントエンド及びエディタ用のスタイルの登録
    wp_register_style(
      'oja-code-gutenberg-style',
      plugins_url( 'build/style-index.css', __FILE__ ),
      array(),
      filemtime( "$dir/build/style-index.css" )
    );

    //ブロックを登録
    register_block_type(
      //名前空間/ブロック名
      'oja/code-gutenberg',
      //スクリプトやスタイルをブロックに関連付け
      array(
        'editor_script' => 'oja_code_gutenberg-script',
        'editor_style'  => 'oja_code_gutenberg-editor-style',
        'style'         => 'oja-code-gutenberg-style',
        //PHP でレンダリングするコールバック関数を指定
        'render_callback' => 'oja_code_render',
        //属性を追加
        'attributes' => [
          //プレビューモードへのフラグ
          'isEditMode' => [
            'type' => 'boolean',
            'default' => true //編集モード
          ],
          //コードの表示方法
          'codeMode' => [
            'type' => 'string',
            'default' => 'code-all'
          ],
          //抜粋表示数
          'excerptLength' => [
            'type' => 'number',
            'default' => 3
          ],
          //ファイル名を保存する属性を追加
          'fileName' => [
            'type' => 'string',
            'default' => ''
          ],
          //属性 codeArea を設定
          'codeArea' => [
            'type'    => 'string',
            'default' => ''
          ],
          //行番号トグル
          'linenums' => [
            'type'    => 'boolean',
            'default' => true
          ],
          //行番号開始ナンバー
          'linenumStart' => [
            'type' => 'number',
            'default' => 1
          ],
          //ブロックの配置
          'align' => [
            'type'    => 'string',
            'default' => ''
          ],
          //最大幅を指定するか
          'maxWidthEnable' => [
            'type'    => 'boolean',
            'default' => false
          ],
          //最大幅設定
          'maxWidth' => [
            'type'    => 'number',
            'default' => 0
          ],
          //言語指定
          'lang' => [
            'type'   => 'string',
            'default'=> ''
          ],
          //書式設定
          'fontFamily' => [
            'type'   => 'string',
            'default'=> ''
          ],
          //デザインスキン
          'skin' => [
            'type' => 'string',
            'default' => ''
          ]
        ],
      )
    );
  }


  // ▼Code-Prettifyのスクリプトを登録（エンキュー）
  public function add_code_prettify_scripts_and_styles() {
    $dir = dirname( __FILE__ );

    //Code-Prettify の JavaScript ファイルの読み込み（エンキュー）
    wp_enqueue_script(
      'code-prettify',
      plugins_url( '/code-prettify/prettify.js', __FILE__ ),
      array(),
      filemtime( "$dir/code-prettify/prettify.js" ),
      true
    );

    //言語ハンドラーの JavaScript ファイルの読み込み（エンキュー）
    wp_enqueue_script(
      'code-prettify-css-lang',
      plugins_url( '/code-prettify/lang-css.js', __FILE__ ),
      array('code-prettify'),
      filemtime( "$dir/code-prettify/lang-css.js" ),
      true
    );
    wp_enqueue_script(
      'code-prettify-sql-lang',
      plugins_url( '/code-prettify/lang-sql.js', __FILE__ ),
      array('code-prettify'),
      filemtime( "$dir/code-prettify/lang-sql.js" ),
      true
    );

    //管理画面以外（フロントエンド側でのみ読み込む）
    if(! is_admin()) {
      //PR.prettyPrint() を実行する JavaScript ファイルの読み込み（エンキュー）
      wp_enqueue_script(
        'code-prettify-init',
        plugins_url( '/code-prettify/init-prettify.js', __FILE__ ),
        array('code-prettify'),
        filemtime( "$dir/code-prettify/init-prettify.js" ),
        true
      );
    }

    //Code-Prettify の基本スタイルの読み込み（エンキュー）
    wp_enqueue_style(
      'code-prettify-style',
      plugins_url( '/code-prettify/prettify.css', __FILE__ ),
      array(),
      filemtime( "$dir/code-prettify/prettify.css" )
    );

    //アコーディオン用のオリジナルJS
    if(! is_admin()) {
      wp_enqueue_script(
        'code_gutenberg_script',
        plugins_url( '/js/main.js', __FILE__ ),
        array(),
        filemtime( "$dir/js/main.js" ),
        true
      );
    }
  }
} //class OjaCodeGutenberg{


//ブロックレンダリングClass
require_once dirname(__FILE__) . '/views/oja_code_render.php';

