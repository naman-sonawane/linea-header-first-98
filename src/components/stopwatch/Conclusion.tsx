import { Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const characters = [
  { name: "SOLOMON", source: "Blood Diamond" },
  { name: "HAMLET", source: "Shakespeare" },
  { name: "AMIR", source: "The Kite Runner" },
  { name: "WERNER", source: "All the Light" },
  { name: "OFFRED", source: "Handmaid's Tale" },
  { name: "CHAPPELL", source: "Real World" }
];

const Conclusion = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeRef.current) {
      gsap.from(timeRef.current, {
        scrollTrigger: {
          trigger: timeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.5,
        rotation: -180,
        duration: 1.5,
        ease: "back.out(1.7)"
      });
    }

    const chars = sectionRef.current?.querySelectorAll(".character-item");
    chars?.forEach((char, index) => {
      gsap.from(char, {
        scrollTrigger: {
          trigger: char as Element,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {characters.map((char, index) => (
            <motion.div
              key={index}
              className="character-item flex flex-col items-center gap-3"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="w-20 h-20 border-2 border-cyan-400/30 bg-black flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <Users className="w-10 h-10 text-cyan-400/60" />
              </div>
              <div className="text-center">
                <span className="text-sm text-white font-bold uppercase tracking-wider block">{char.name}</span>
                <span className="text-xs text-gray-500">{char.source}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Clock className="w-20 h-20 text-cyan-400 mx-auto mb-12" />
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-12 leading-tight max-w-5xl mx-auto"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            WHETHER YOU'RE FACING WAR, FAMILY CRISIS, IMPOSSIBLE DECISIONS, OR JUST NEED A MOMENT TO BREATHE,
            <span className="text-cyan-400 block mt-4">FREEZEFRAME GIVES YOU WHAT EVERY TRAGIC HERO NEEDED:</span>
          </h2>
          <div
            ref={timeRef}
            className="text-7xl md:text-9xl lg:text-[180px] font-bold bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            TIME.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-16 border-2 border-cyan-400/30 bg-black hover:border-cyan-400 transition-all duration-500 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
            Don't let pressure, impulse, or lack of time destroy your life.
          </p>
          <p
            className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            TAKE CONTROL. STOP TIME.
          </p>
          <p
            className="text-4xl md:text-5xl font-bold uppercase text-cyan-400 tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            CHANGE YOUR FATE.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t-2 border-white/10"
        >
          <p className="text-gray-500 text-sm mb-2">
            A creative project exploring themes of time, pressure, and tragic decisions across literary texts and contemporary life.
          </p>
          <p className="text-gray-600 text-xs">
            Texts Referenced: Blood Diamond • Hamlet • The Kite Runner • All the Light We Cannot See • The Handmaid's Tale
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
