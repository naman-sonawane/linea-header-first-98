import { useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "SELECTIVE FREEZE",
    description: "You choose who moves with you. Freeze everyone except yourself, or bring one ally into the bubble. Perfect for:",
    points: [
      "Private conversations in dangerous situations",
      "Escaping threats with loved ones",
      "Moments that require focus without distraction"
    ]
  },
  {
    title: "FULL MOBILITY",
    description: "Unlike other time-freeze tech, you can move freely through the frozen world. Walk away from threats. Reposition yourself. Change the scene entirely before time resumes."
  },
  {
    title: "MENTAL CLARITY",
    description: "Five minutes might not sound like much, but when the world is silent and still, it's enough to:",
    points: [
      "Process intense emotions",
      "Make life-changing decisions",
      "Plan your next move",
      "Breathe without pressure"
    ]
  }
];

const ProductFeaturesDetailed = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="product-features-detailed" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
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
          How It Works
        </h2>
      </motion.div>

      <div className="space-y-[6vh] max-w-[80vw] mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-detail-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[4vw]"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3
              className="text-[3vw] md:text-[4vw] font-bold uppercase mb-[2vh] tracking-wider"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              FEATURE {index + 1}: {feature.title}
            </h3>
            <p className="text-[1.5vw] text-[#adadad] leading-relaxed mb-[2vh]">
              {feature.description}
            </p>
            {feature.points && (
              <ul className="space-y-[1vh] mt-[2vh]">
                {feature.points.map((point, i) => (
                  <li key={i} className="text-[1.3vw] text-cyan-400 flex items-start gap-[1vw]">
                    <span className="text-cyan-400">→</span>
                    <span className="text-[#adadad]">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeaturesDetailed;
