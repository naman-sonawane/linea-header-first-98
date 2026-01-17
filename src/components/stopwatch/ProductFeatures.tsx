import { Clock, Shield, Heart, Eye, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock,
    title: "FREEZE TIME",
    number: "01",
    description: "Stop the world for up to 5 minutes. Only you can move, everyone and everything else is frozen in place."
  },
  {
    icon: Heart,
    title: "BRING SOMEONE",
    number: "02",
    description: "Optionally extend the time-freeze bubble to include one other person. Perfect for private conversations."
  },
  {
    icon: Shield,
    title: "ESCAPE DANGER",
    number: "03",
    description: "Remove yourself from life-threatening situations. Walk away from violence before it happens."
  },
  {
    icon: Eye,
    title: "PROCESS EMOTIONS",
    number: "04",
    description: "Take a breath when anger or fear clouds your judgment. Make decisions with a clear mind."
  },
  {
    icon: Lock,
    title: "RECLAIM PRIVACY",
    number: "05",
    description: "Move through public spaces undetected. Gather information. Find escape routes."
  },
  {
    icon: Zap,
    title: "INSTANT ACTIVATION",
    number: "06",
    description: "One touch is all it takes. In moments of crisis, every millisecond counts."
  }
];

const ProductFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
    }

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={titleRef}
          className="mb-20 text-center"
        >
          <div className="text-cyan-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
            HOW IT WORKS
          </div>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            THE FreezeFrame
            <br />
            <span className="text-cyan-400">HARNESSES</span>
            <br />
            TEMPORAL POWER
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card group relative p-8 border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute top-4 right-4 text-cyan-400/20 text-6xl font-bold"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                {feature.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 border-2 border-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-400/10 transition-colors">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3
                  className="text-2xl font-bold uppercase mb-4 tracking-wider"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
