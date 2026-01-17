import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const WhyItMatters = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="why-it-matters" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[80vw] mx-auto"
      >
        <h2
          className="text-[5vw] md:text-[7vw] font-bold uppercase mb-[4vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          The Problem: When Time Runs Out
        </h2>
        <div className="text-[1.5vw] text-[#adadad] leading-relaxed space-y-[2vh]">
          <p>
            Throughout this course, we looked at many tragedies. Oftentimes, it was people in war or some sort of battle, resulting in lots of unnecessary violence and hardship.
          </p>
          <p>
            It can be argued that one theme was time, or the lack thereof.
          </p>
          <p>
            Characters often found themselves in situations where they simply did not have enough time, or they were in high-pressure situations with no ability to act accordingly.
          </p>
          <p>
            FreezeFrame alleviates the pressure, giving our beloved characters the precious time that they need to think and act.
          </p>
        </div>

        <div
          ref={quoteRef}
          className="mt-[10vh] text-center p-[6vw] border-2 border-cyan-400/30 bg-black/50"
        >
          <p
            className="text-[4vw] md:text-[5vw] font-bold text-cyan-400 italic"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            "Five minutes can go a long way."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyItMatters;
