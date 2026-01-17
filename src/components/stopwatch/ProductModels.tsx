import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    name: "FF1",
    price: "$299",
    features: [
      "5 minutes of frozen time",
      "Solo use only",
      "Unlimited activations",
      "Basic design"
    ]
  },
  {
    name: "FF1",
    price: "$499",
    features: [
      "5 minutes of frozen time",
      "Bring +1 person with you",
      "Unlimited activations",
      "Premium design",
      "24/7 support"
    ],
    highlighted: true
  },
  {
    name: "FF67",
    price: "$799",
    features: [
      "5 minutes of frozen time",
      "Bring multiple people",
      "Unlimited activations",
      "Luxury design",
      "Priority support",
      "Extended warranty"
    ]
  }
];

const ProductModels = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="product-models" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-[10vh]"
      >
        <h2
          className="text-[4vw] md:text-[5vw] font-bold uppercase mb-[3vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Choose Your Model
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-[4vw] max-w-[90vw] mx-auto">
        {models.map((model, index) => (
          <motion.div
            key={index}
            className="model-card relative border-2 p-[4vw] group transition-all duration-500"
            style={{
              borderColor: model.highlighted ? "rgba(34, 211, 238, 0.5)" : "rgba(255, 255, 255, 0.1)",
              backgroundColor: model.highlighted ? "rgba(34, 211, 238, 0.05)" : "transparent",
            }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {model.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider border-2 border-cyan-400">
                BESTSELLER
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3
                className="text-[3vw] font-bold uppercase mb-3 tracking-wider"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                {model.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-8">
                <span
                  className="text-[5vw] font-bold text-cyan-400"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {model.price}
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {model.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-[1.2vw]">
                  <span className="text-cyan-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className={`w-full border-2 rounded-none uppercase tracking-wider font-bold text-sm py-6 transition-all duration-300 ${
                  model.highlighted
                    ? "bg-cyan-400 hover:bg-cyan-300 text-black border-cyan-400"
                    : "bg-transparent hover:bg-white/10 text-white border-white/20 hover:border-white/40"
                }`}
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                ORDER NOW
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductModels;
