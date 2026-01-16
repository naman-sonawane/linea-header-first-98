import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ProductOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".overview-card");
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="product-overview" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-[10vh]"
      >
        <h2
          className="text-[5vw] md:text-[7vw] font-bold uppercase mb-[4vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          What Is The STOP-watch?
        </h2>
        <p className="text-[1.5vw] text-[#adadad] max-w-[60vw] mx-auto leading-relaxed">
          The STOP-watch is a revolutionary device that freezes time for up to five minutes — except for you and one person of your choice.
        </p>
        <p className="text-[1.5vw] text-[#adadad] max-w-[60vw] mx-auto leading-relaxed mt-[2vh]">
          While the world stands still, you have the clarity to think, the space to act, and the power to rewrite your story.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-[4vw] max-w-[90vw] mx-auto">
        <motion.div
          className="overview-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[4vw] group"
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <div className="text-[4vw] mb-[2vh]">⏸️</div>
          <h3
            className="text-[2.5vw] font-bold uppercase mb-[2vh] tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            FREEZE TIME
          </h3>
          <p className="text-[1.2vw] text-[#adadad] leading-relaxed">
            Stop everything and everyone for up to 5 minutes
          </p>
        </motion.div>

        <motion.div
          className="overview-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[4vw] group"
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <div className="text-[4vw] mb-[2vh]">👤</div>
          <h3
            className="text-[2.5vw] font-bold uppercase mb-[2vh] tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            BRING SOMEONE
          </h3>
          <p className="text-[1.2vw] text-[#adadad] leading-relaxed">
            Unfreeze one person to act alongside you
          </p>
        </motion.div>

        <motion.div
          className="overview-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[4vw] group"
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <div className="text-[4vw] mb-[2vh]">🔄</div>
          <h3
            className="text-[2.5vw] font-bold uppercase mb-[2vh] tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            RESUME ANYTIME
          </h3>
          <p className="text-[1.2vw] text-[#adadad] leading-relaxed">
            Return to real-time whenever you're ready
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
