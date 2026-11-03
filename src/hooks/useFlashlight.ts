import { useEffect, type RefObject } from "react";

// Port of the original "flashlight" script: a blurred glow follows the mouse inside the wrapper.
// Desktop only (window wider than 1025px), like the original.
export function useFlashlight(wrapperRef: RefObject<HTMLElement>, lightRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const light = lightRef.current;
    if (!wrapper || !light) return;

    const move = (e: MouseEvent) => {
      if (window.innerWidth <= 1025) return;
      requestAnimationFrame(() => {
        light.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });
    };
    const enter = () => {
      light.style.opacity = "1";
      document.addEventListener("mousemove", move);
    };
    const leave = () => {
      light.style.opacity = "0";
      document.removeEventListener("mousemove", move);
    };

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);
    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
      document.removeEventListener("mousemove", move);
    };
  }, [wrapperRef, lightRef]);
}
