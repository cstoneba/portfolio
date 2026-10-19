(function () {
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var pending = targets.slice();

  function settle(el) {
    el.classList.add('is-visible');
    observer.unobserve(el);
    var i = pending.indexOf(el);
    if (i > -1) pending.splice(i, 1);
    if (!pending.length) window.removeEventListener('scroll', sweep);
  }

  /* A target the viewport jumps clean past never crosses an intersection
     threshold, so the observer stays silent and the section sits at opacity 0
     for the rest of the visit. That happens on an anchor jump (the nav Work
     link lands on index.html#work) and on End/scroll restoration. Anything
     already above the viewport top counts as seen. */
  function sweep() {
    pending.slice().forEach(function (el) {
      if (el.getBoundingClientRect().top < 0) settle(el);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) settle(entry.target);
    });
    sweep();
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
  window.addEventListener('scroll', sweep, { passive: true });
})();
