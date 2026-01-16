import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const UrgencyCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".cta-element");
    elements?.forEach((element, index) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="urgency-cta" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[80vw] mx-auto"
      >
        <h2
          className="text-[6vw] md:text-[8vw] font-bold uppercase mb-[4vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          How Many Tragedies Could You Prevent?
        </h2>

        <div className="cta-element text-[1.5vw] text-[#adadad] leading-relaxed space-y-[2vh] mb-[6vh] text-left max-w-[70vw] mx-auto">
          <p>Hamlet killed six people because he didn't pause to look behind the curtain.</p>
          <p>Kiner-Falefa was inches from winning the World Series but couldn't give himself half a second more.</p>
          <p>Jeff Hoffman threw one hanging slider and lost the championship.</p>
          <p>Werner stepped on a landmine with no way out.</p>
          <p>Malcolm was pulled under by an undertow with no time to escape.</p>
          <p className="text-cyan-400 font-bold text-[2vw] mt-[3vh]">Don't wait until it's too late.</p>
        </div>

        <motion.div
          className="cta-element"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-[2vw] px-[6vw] py-[3vh] rounded-none uppercase tracking-wider transition-all duration-300"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Get Your STOP-watch Today →
          </Button>
        </motion.div>

        <p className="cta-element text-[1.2vw] text-gray-500 mt-[3vh]">
          Limited quantities available. Time waits for no one — except STOP-watch owners.
        </p>
      </motion.div>
    </section>
  );
};

export default UrgencyCTA;
