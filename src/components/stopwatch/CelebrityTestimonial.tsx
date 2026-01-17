import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const celebrities = [
  {
    name: "JEFF HOFFMAN",
    title: "MLB Pitcher, Toronto Blue Jays",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeff_Hoffman_%289tZfLF_3qzU%29.png",
    quote: "In high-stakes moments, timing is everything. FreezeFrame gives me the clarity I need to make the right decisions when seconds matter most."
  }
];

const CelebrityTestimonial = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".celebrity-card");
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 80,
        rotation: index % 2 === 0 ? -5 : 5,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="celebrity" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-cyan-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
            CELEBRITY ENDORSEMENT
          </div>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            EVEN GLOBAL
            <br />
            <span className="text-cyan-400">SUPERSTARS</span>
            <br />
            NEED A MOMENT
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={index}
              className="celebrity-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 group overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition-all duration-500" />
              
              <div className="p-8 border-b-2 border-white/10 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-none border-4 border-cyan-400/50 overflow-hidden mb-6 group-hover:border-cyan-400 transition-colors">
                    <img
                      src={celebrity.image}
                      alt={celebrity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold uppercase mb-2 tracking-wider"
                    style={{ fontFamily: "'Audiowide', sans-serif" }}
                  >
                    {celebrity.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xs">
                    {celebrity.title}
                  </p>
                  <div className="flex items-center justify-center">
                    <Star className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-black relative z-10">
                <div className="flex items-start gap-4">
                  <Quote className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <blockquote className="text-gray-300 leading-relaxed italic text-sm">
                    "{celebrity.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrityTestimonial;
