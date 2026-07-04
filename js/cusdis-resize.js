document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('cusdis_thread');
  if (!container) return;

  function resize(iframe) {
    var doc;
    try {
      doc = iframe.contentDocument;
    } catch (e) {
      return;
    }
    if (!doc || !doc.documentElement) return;
    var height = doc.documentElement.scrollHeight;
    if (height) iframe.style.height = height + 'px';
  }

  function attach(iframe) {
    resize(iframe);

    var attachObservers = function () {
      var doc = iframe.contentDocument;
      if (!doc || !doc.body) return;
      new ResizeObserver(function () { resize(iframe); }).observe(doc.documentElement);
      new MutationObserver(function () { resize(iframe); }).observe(doc.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    };
    iframe.addEventListener('load', attachObservers);
    attachObservers();

    // Safety net: comment data and fonts can resize the thread without
    // triggering a mutation (e.g. late async render), so poll briefly too.
    var tries = 0;
    var poll = setInterval(function () {
      resize(iframe);
      if (++tries > 20) clearInterval(poll);
    }, 400);
  }

  var observer = new MutationObserver(function () {
    var iframe = container.querySelector('iframe');
    if (iframe) {
      observer.disconnect();
      attach(iframe);
    }
  });
  observer.observe(container, { childList: true });
});
