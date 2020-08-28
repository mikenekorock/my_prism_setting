// data-messageにいれた値がツールバーに表示される。
// show languageをいじっただけのjs。使うならshow languageを入れないでjsとcssをダウンロードし直して
// 使いたかったら使う感じで
(function () {
  Prism.plugins.toolbar.registerButton('show-language', function (env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    var language = pre.getAttribute('data-message')

    if (!language) {
      return;
    }
    var element = document.createElement('span');
    element.textContent = language;

    return element;
  });
})();

