import Lenis from "lenis";

export default function Scroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  let rafId;
  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // Route in-page anchor clicks through Lenis so they animate and respect scroll-margin
  const onClick = (e) => {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id === "#") {
      e.preventDefault();
      lenis.scrollTo(0);
      return;
    }
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    lenis.scrollTo(el, { offset: -96 });
  };
  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}
