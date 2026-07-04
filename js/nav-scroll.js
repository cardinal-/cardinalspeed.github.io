(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  var lastY = window.scrollY;
  var hidden = false;
  var threshold = 8;

  function onScroll() {
    var y = window.scrollY;
    var diff = y - lastY;
    if (Math.abs(diff) < threshold) return;

    if (diff > 0 && y > nav.offsetHeight) {
      if (!hidden) {
        nav.classList.add('nav-hidden');
        hidden = true;
      }
    } else if (hidden) {
      nav.classList.remove('nav-hidden');
      hidden = false;
    }
    lastY = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
