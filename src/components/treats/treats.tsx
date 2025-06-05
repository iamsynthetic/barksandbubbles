import { useEffect, useRef, useCallback } from "react";

import { usePreloaderStore } from "../../store/preloaderStore";
import { useMemo } from "react";
import { gsap } from "gsap";
const Treats = () => {
  const { ispreloading } = usePreloaderStore();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<number | null>(null);
  const elementIdCounter = useRef(0);
  const images = useMemo(
    () => [
      "images/hero-apple.png",
      "images/hero-broc.png",
      "images/hero-popcorn1.png",
      "images/hero-salmon.png",
      "images/hero-treat1.png",
      "images/hero-treat2.png",
      "images/hero-watermelon.png",
    ],
    []
  );

  const createRandomElement = useCallback(() => {
    if (!containerRef.current) return;

    const element = document.createElement("div");
    const size = Math.random() * 200 + 50;
    const imageIndex = Math.floor(Math.random() * 7);
    // const startX = Math.random() * (window.innerWidth - size * 2);
    const startX = Math.random() * (window.innerWidth * 0.5);

    element.className = "falling-element";
    element.style.cssText = `
      position: absolute;
      width: 80%;
      height: ${size}px;
      left: ${startX}px;
      top: -160px;
      background-image: url('${images[imageIndex]}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
      pointer-events: none;
    `;

    const elementId = elementIdCounter.current++;
    element.id = `element-${elementId}`;

    containerRef.current.appendChild(element);
    elementsRef.current.push(element);

    // GSAP animation - slow falling with slight horizontal drift
    const tl = gsap.timeline();

    tl.to(element, {
      y: window.innerHeight - size + Math.random() * 50, // Pool at bottom with slight variation
      x: startX + (Math.random() - 0.5) * 100, // Slight horizontal drift
      duration: 20 + Math.random() * 4, // 8-12 seconds fall time
      ease: "power2.out",
      rotation: Math.random() * 360,
    }).to(
      element,
      {
        scale: 0.8 + Math.random() * 0.4, // Slight size variation when settling
        duration: 0.5,
        ease: "bounce.out",
      },
      "-=1"
    );

    // Add floating/bobbing effect while falling
    gsap.to(element, {
      x: `+=${(Math.random() - 2) * 30}`,
      duration: 2 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Remove element after animation completes
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
        elementsRef.current = elementsRef.current.filter(
          (el) => el !== element
        );
      }
    }, 24000);
  }, [containerRef, elementsRef, elementIdCounter, images]);

  const startAnimation = useCallback(() => {
    intervalRef.current = setInterval(createRandomElement, 3000); // New element every 500ms
  }, [createRandomElement]);

  useEffect(() => {
    if (!ispreloading) {
      // startanim();
      startAnimation();
    }
    // startAnimation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      elementsRef.current.forEach((element) => {
        if (gsap) {
          gsap.killTweensOf(element);
        }
      });
    };
  }, [ispreloading, startAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative lg:h-[880px] overflow-hidden"
    ></div>
  );
};

export default Treats;
