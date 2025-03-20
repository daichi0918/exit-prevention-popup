$(document).ready(function () {
  /* フォーカスを当てたら、URLに#hashを追加 */
  $('input').on('focus', () => {
    addHash();
  });

  const addHash = () => {
    if (location.href.search(/hasn/g) === -1) {
      history.pushState({}, '', '#hash');
    }
  };

  /* 離脱(ブラウザバッグなど)した際にalertが出るようにする */
  $(window).on('hashchange', () => {
    const url = window.location.href;
    if (url.indexOf('#') !== -1 || sessionStorage.getItem('hashStorage')) {
      return;
    }
    if (confirm('本当にこのページを離脱しますか？')) {
      sessionStorage.setItem('hashStorage', true);
      history.back(); // Yes → 前のページに戻る
    } else {
      // No → 何もしない（現在のページに留まる）
    }
  });
});
