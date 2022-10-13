// アコーディオン関数
class SlideCodeFile {
  constructor(obj) {
    // アコーディオンを全て取得
    const accordions = document.querySelectorAll(obj.accordeContainer);
    // 取得したアコーディオンをArrayに変換(IE対策)
    const accordionsArr = Array.prototype.slice.call(accordions);

    accordionsArr.forEach((accordion) => {
      // Triggerを全て取得
      const accordionTriggers = accordion.querySelectorAll(obj.triggerEl);
      // TriggerをArrayに変換(IE対策)
      const accordionTriggersArr =
        Array.prototype.slice.call(accordionTriggers);
      accordionTriggersArr.forEach((trigger) => {
        // Triggerにクリックイベントを付与
        trigger.addEventListener("click", () => {
          // '.is-active'クラスを付与or削除
          trigger.classList.toggle("is-active");
          // 開閉させる要素を取得
          const content = trigger.nextElementSibling;
          // 要素を展開or閉じる
          this.slideToggle(content);
        });
      });
    });
  }

  // 要素をスライドしながら非表示にする関数(jQueryのslideUpと同じ)
  slideUp(el, duration = 300) {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
      el.classList.remove("is-open");
    }, duration);
  }

  // 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)
  slideDown(el, duration = 300) {
    el.classList.add("is-open");
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  }

  // 要素をスライドしながら交互に表示/非表示にする関数(jQueryのslideToggleと同じ)
  slideToggle(el, duration = 300) {
    if (window.getComputedStyle(el).display === "none") {
      return this.slideDown(el, duration);
    } else {
      return this.slideUp(el, duration);
    }
  }
} //class SlideCodeFile

const codeAccordion = new SlideCodeFile({
  accordeContainer: ".code-onclick",
  triggerEl: ".accordion__title",
});

// コードのクリップボードコピー関数
class CopyAndPaste {
  constructor(obj) {
    this.copyBtn = obj.copyBtn;
    this.copy = obj.copyEl;

    //コピーのイベントリスナー
    if(this.copyBtn && this.copy ) {
      let copyButton = document.querySelectorAll(this.copyBtn);
      let texts = document.querySelectorAll(this.copy);
      for (let i = 0; i < copyButton.length; i++) {
        copyButton[i].addEventListener("click", () => {
          this.copyToClipboard(i)}, false);
      }
    }
  }

  copyToClipboard = (i) => {
    let texts = document.querySelectorAll(this.copy);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(texts[i].innerText).then(
        (success) => alert("テキストのコピーに成功😆"),
        (error) => alert("テキストのコピーに失敗😫")
      );
    } else {
      alert("このブラウザは対応していません");
    }
  };

} //class CopyAndPaste

const codeCopy = new CopyAndPaste({
  copyBtn: ".copyButton",
  copyEl: ".copyCode",
});

