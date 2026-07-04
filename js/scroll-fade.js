document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.post-image');
  if (!images.length) return;

  if (!('IntersectionObserver' in window)) {
    images.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  images.forEach(function (el) { observer.observe(el); });
});
