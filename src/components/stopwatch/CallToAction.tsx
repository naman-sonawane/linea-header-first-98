import { Clock, Sparkles, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    name: "STANDARD",
    price: "$∞",
    tagline: "For everyday heroes",
    features: [
      "5 minutes of frozen time",
      "Solo use only",
      "Unlimited activations",
      "Lifetime warranty"
    ],
    highlighted: false
  },
  {
    name: "PREMIUM",
    price: "$∞∞",
    tagline: "Most popular",
    features: [
      "5 minutes of frozen time",
      "Bring +1 person with you",
      "Unlimited activations",
      "24/7 temporal support",
      "Time-proof carrying case"
    ],
    highlighted: true
  },
  {
    name: "LITERARY HERO",
    price: "PRICELESS",
    tagline: "For tragic protagonists",
    features: [
      "5 minutes of frozen time",
      "Bring your whole family",
      "Retrospective activation*",
      "Fate reversal guarantee",
      "*Only available in fiction"
    ],
    highlighted: false
  }
];

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".pricing-card");
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-cyan-400/50 bg-cyan-400/10 mb-8"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">LIMITED TIME OFFER</span>
            <span className="text-gray-500 text-xs uppercase">(IRONIC, WE KNOW)</span>
          </motion.div>
          
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            GET YOUR
            <br />
            <span className="text-cyan-400">FreezeFrame</span>
            <br />
            TODAY
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Don't wait until it's too late. Every second you delay is a second you might need back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="pricing-card relative border-2 p-8 group transition-all duration-500"
              style={{
                borderColor: tier.highlighted ? "rgba(34, 211, 238, 0.5)" : "rgba(255, 255, 255, 0.1)",
                backgroundColor: tier.highlighted ? "rgba(34, 211, 238, 0.05)" : "transparent"
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider border-2 border-cyan-400">
                  BESTSELLER
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3
                  className="text-2xl font-bold uppercase mb-3 tracking-wider"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-xs mb-6">
                  {tier.tagline}
                </p>
                <div className="flex items-center justify-center gap-1 mb-8">
                  <span
                    className="text-5xl font-bold text-cyan-400"
                    style={{ fontFamily: "'Audiowide', sans-serif" }}
                  >
                    {tier.price}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className={`text-xs ${feature.startsWith('*') ? 'text-gray-500 italic' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className={`w-full border-2 rounded-none uppercase tracking-wider font-bold text-sm py-6 transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-cyan-400 hover:bg-cyan-300 text-black border-cyan-400"
                      : "bg-transparent hover:bg-white/10 text-white border-white/20 hover:border-white/40"
                  }`}
                >
                  ORDER NOW
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 border-2 border-white/10 bg-black hover:border-cyan-400/50 transition-all duration-500"
        >
          <Infinity className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h3
            className="text-3xl font-bold uppercase mb-4 tracking-wider"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            THE "NO TRAGIC ENDING" GUARANTEE
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed mb-4">
            If you still experience a tragic ending while using FreezeFrame, we'll refund your purchase in full.
          </p>
          <p className="text-gray-500 text-xs">
            (Excludes tragedies caused by user error, hubris, or ignoring the ghost of your father)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
