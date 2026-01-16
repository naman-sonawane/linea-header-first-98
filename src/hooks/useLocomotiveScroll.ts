import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLocomotiveScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed'
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: containerRef.current.style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    scrollRef.current = locoScroll;

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
    };
  }, [containerRef]);

  return scrollRef.current;
};
