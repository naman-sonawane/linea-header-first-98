import { useRef } from "react";
import { motion } from "framer-motion";

const athletes = [
  {
    name: "ISIAH KINER-FALEFA",
    role: "MLB Player, Toronto Blue Jays",
    image: "https://i.imgur.com/Us6m11L.jpeg",
    moment: "Game 7. The final game of the World Series. The Toronto Blue Jays hadn't made it to the World Series since 1993. The game was tied. Kiner-Falefa was sliding to the base, just inches away, he was out. This ultimately cost the Blue Jays the game.",
    help1: {
      title: "Win the World Series",
      text: "With FreezeFrame, I could have given myself even just half a second to slide just a bit farther. That would have secured the Jays the point and won us the World Series. Just. Five. More. Inches."
    },
    help2: {
      title: "Protect His Reputation",
      text: "I received so much hate following the game for my decision to start farther away from the base, which led to me not making it in time. My image was destroyed overnight. With those five frozen seconds, I could have changed my approach. I wouldn't be known as the guy who cost Toronto the World Series."
    }
  }
];

const RealWorldImpact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="real-world-impact" className="bg-[#232025] text-[#d1d1d1] py-[8vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-[10vh]"
      >
        <h2
          className="text-[4vw] md:text-[5vw] font-bold uppercase mb-[2vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          It's Not Just Fiction.
        </h2>
        <h3
          className="text-[2.5vw] md:text-[3vw] font-bold uppercase text-cyan-400"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Real Athletes and Public Figures Need This Too.
        </h3>
      </motion.div>

      <div className="space-y-[6vh] max-w-[90vw] mx-auto">
        {athletes.map((athlete, index) => (
          <motion.div
            key={index}
            className="athlete-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 p-[4vw]"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row gap-[4vw] mb-[4vh]">
              <div className="w-full md:w-[30vw] h-[40vh] border-4 border-cyan-400/50 overflow-hidden flex-shrink-0">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3
                  className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-wider"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {athlete.name}
                </h3>
                <p className="text-lg md:text-xl text-cyan-400 mb-4 font-bold">
                  {athlete.role}
                </p>
                <div className="mb-6">
                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">The Moment That Defined a Career:</h4>
                  <p className="text-base md:text-lg text-[#adadad] leading-relaxed">{athlete.moment}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-cyan-500/10 border border-cyan-400/30">
                <h4 className="text-lg md:text-xl font-bold uppercase mb-4 text-cyan-400">
                  HOW FREZEFRAME HELPS (WAY 1): {athlete.help1.title}
                </h4>
                <p className="text-sm md:text-base text-[#adadad] leading-relaxed mb-4 whitespace-pre-line">
                  "{athlete.help1.text}"
                </p>
              </div>
              <div className="p-6 bg-cyan-500/10 border border-cyan-400/30">
                <h4 className="text-lg md:text-xl font-bold uppercase mb-4 text-cyan-400">
                  HOW FREEZEFRAME HELPS (WAY 2): {athlete.help2.title}
                </h4>
                <p className="text-sm md:text-base text-[#adadad] leading-relaxed mb-4 whitespace-pre-line">
                  "{athlete.help2.text}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RealWorldImpact;
