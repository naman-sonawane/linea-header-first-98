import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    title: "FOR THOSE IN WAR ZONES",
    description: "Escape violence, landmines, and life-or-death situations"
  },
  {
    title: "FOR ATHLETES IN CRUCIAL MOMENTS",
    description: "Adjust your approach when inches determine victory or defeat"
  },
  {
    title: "FOR THE IMPULSIVE",
    description: "Stop yourself before you act. Think first. Prevent tragedy."
  },
  {
    title: "FOR THOSE IN DANGER",
    description: "Whether rebels, undertows, or threats — escape before it's too late"
  },
  {
    title: "FOR THE OVERWHELMED",
    description: "Find calm in chaos. Make decisions without the pressure of ticking time"
  }
];

const WhoNeedsThis = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".usecase-card");
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="who-needs-this" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
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
          Who Is The STOP-watch For?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3vw] max-w-[90vw] mx-auto">
        {useCases.map((usecase, index) => (
          <motion.div
            key={index}
            className="usecase-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[3vw] group"
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <h3
              className="text-[2vw] font-bold uppercase mb-[2vh] tracking-wider"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              {usecase.title}
            </h3>
            <p className="text-[1.2vw] text-[#adadad] leading-relaxed">
              {usecase.description}
            </p>
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoNeedsThis;
