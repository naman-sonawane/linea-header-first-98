import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const FinalConclusion = () => {
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
        scale: 0.8,
        duration: 1.5,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="final-conclusion" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[80vw] mx-auto text-center"
      >
        <h2
          className="text-[5vw] md:text-[7vw] font-bold uppercase mb-[4vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          The Power of Pause
        </h2>

        <div className="text-[1.5vw] text-[#adadad] leading-relaxed space-y-[2vh] mb-[6vh] text-left max-w-[70vw] mx-auto">
          <p>Every tragedy shares one thing: someone acted without time to think.</p>
          <p>War, pressure, impulse, nature — they all steal the one thing we need most: a moment to breathe.</p>
          <p>The STOP-watch gives you that moment.</p>
          <p className="text-cyan-400 font-bold text-[2vw]">Five minutes can save a life.</p>
          <p className="text-cyan-400 font-bold text-[2vw]">Five minutes can win a championship.</p>
          <p className="text-cyan-400 font-bold text-[2vw]">Five minutes can change everything.</p>
        </div>

        <div
          ref={quoteRef}
          className="p-[6vw] border-2 border-cyan-400/50 bg-black/50 mb-[6vh]"
        >
          <p
            className="text-[5vw] md:text-[7vw] font-bold text-cyan-400"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            "Don't let time run out on you."
          </p>
        </div>

        <div className="text-[1.2vw] text-gray-500 space-y-[1vh]">
          <p className="font-bold text-[2vw] text-cyan-400 mb-[2vh]">
            The STOP-watch — When 5 minutes can change your fate
          </p>
          <div className="flex justify-center gap-[3vw] mt-[4vh]">
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-[1.5vw] font-bold uppercase tracking-wider">
              Learn More →
            </button>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-[1.5vw] font-bold uppercase tracking-wider">
              Watch Demo →
            </button>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-[1.5vw] font-bold uppercase tracking-wider">
              Order Now →
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalConclusion;
