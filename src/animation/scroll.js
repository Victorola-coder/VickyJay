import Lenis from "lenis";

export default function Scroll() {
  const lenis = new Lenis({
    duration: 1.6,
    easing: function (t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    infinite: false,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  // Return cleanup function
  return () => {
    lenis.destroy();
  };
}
