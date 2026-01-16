import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (watchRef.current) {
      gsap.to(watchRef.current, {
        y: -30,
        rotation: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
      });
    }

    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -80, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Text */}
          <div className="space-y-8">
            <motion.div
              ref={subtitleRef}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cyan-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase"
            >
              AN ENTIRELY NEW DEVICE
            </motion.div>

            <motion.h1
              ref={titleRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] tracking-tight uppercase"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              THE
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
                FreezeFrame
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                WHEN 5 MINUTES
              </p>
              <p className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-cyan-400">
                CAN CHANGE EVERYTHING
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              The revolutionary device that freezes time, giving you the power to think before you act.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToTestimonials}
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg px-10 py-7 rounded-none uppercase tracking-wider transition-all duration-300"
                >
                  SEE HOW IT WORKS
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Watch image */}
          <motion.div
            ref={watchRef}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Watch image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/watch.jpeg"
                alt="FreezeFrame Watch"
                className="w-full max-w-lg md:max-w-2xl rounded-none shadow-2xl border-4 border-cyan-400/50"
              />
            </motion.div>

            {/* Decorative elements */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-cyan-400/20"
                style={{
                  width: `${300 + i * 100}px`,
                  height: `${300 + i * 100}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: i % 2 === 0 ? '50%' : '0%'
                }}
                animate={{
                  rotate: 360,
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
