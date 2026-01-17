import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const themes = [
  {
    theme: "THE PRESSURE OF TIME",
    description: "In moments of crisis, characters across literature are forced to make split-second decisions that determine their fate. Hamlet hears a noise and stabs blindly. Solomon confronts his brainwashed son with guns pointed at him. Werner steps on a landmine. Time itself becomes the enemy.",
    quote: "\"Had I but time, as this fell sergeant, Death, is strict in his arrest, O, I could tell you...\"",
    source: "Hamlet, Act 5"
  },
  {
    theme: "IMPULSIVE DECISIONS",
    description: "Without time to process emotions, characters act on instinct. Hamlet's impulsive stabbing kills Polonius and sets off a chain reaction of deaths. Amir's fight with Assef nearly costs him his life. These moments of rashness become irreversible turning points.",
    quote: "\"A rat! Dead for a ducat, dead!\"",
    source: "Hamlet, before killing Polonius"
  },
  {
    theme: "LACK OF CONTROL",
    description: "From Offred's constant surveillance to Werner's impossible position in war, these characters are trapped by circumstances beyond their control. They lack the autonomy to step back, to think, to choose their own path. FreezeFrame restores what was stolen: agency.",
    quote: "\"We lived, as usual, by ignoring. Ignoring isn't the same as ignorance, you have to work at it.\"",
    source: "Offred, The Handmaid's Tale"
  }
];

const ThemeConnection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".theme-item");
    items?.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item as Element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="themes" className="py-32 bg-black text-white relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-cyan-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
            LITERARY ANALYSIS
          </div>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            WHY THIS
            <br />
            <span className="text-cyan-400">PRODUCT</span>
            <br />
            MATTERS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Across the texts we've studied this semester, one theme emerges again and again: the devastating consequences of decisions made under impossible pressure, without the time to truly think.
          </p>
        </motion.div>

        <div className="space-y-16">
          {themes.map((item, index) => (
            <motion.div
              key={index}
              className="theme-item relative p-12 md:p-16 border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all duration-500" />
              
              <div className="flex items-start gap-6 mb-8">
                <div className="text-cyan-400 text-6xl font-bold"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex-1"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {item.theme}
                </h3>
              </div>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl">
                {item.description}
              </p>

              <div className="flex items-start gap-6 p-8 bg-white/5 border border-white/10">
                <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl md:text-2xl text-white italic mb-3">
                    {item.quote}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeConnection;
