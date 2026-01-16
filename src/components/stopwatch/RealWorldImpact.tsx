import { useRef } from "react";
import { motion } from "framer-motion";

const athletes = [
  {
    name: "ISIAH KINER-FALEFA",
    role: "MLB Player, Toronto Blue Jays",
    image: "https://i.imgur.com/Us6m11L.jpeg",
    moment: "Game 7. The final game of the World Series. The Toronto Blue Jays hadn't made it to the World Series since 1993. The game was tied. Kiner-Falefa was sliding to the base — just inches away — he was out. This ultimately cost the Blue Jays the game.",
    help1: {
      title: "Win the World Series",
      text: "With the STOP-watch, I could have given myself even just half a second to slide just a bit farther. That would have secured the Jays the point and won us the World Series. Just. Five. More. Inches.",
      connection: "Like Werner Pfennig facing the landmine where one wrong move means death, Kiner-Falefa faced a split-second where inches determined everything. The STOP-watch gives both the time they need to adjust and survive."
    },
    help2: {
      title: "Protect His Reputation",
      text: "I received so much hate following the game for my decision to start farther away from the base, which led to me not making it in time. My image was destroyed overnight. With those five frozen seconds, I could have changed my approach. I wouldn't be known as the guy who cost Toronto the World Series.",
      connection: "Like Hamlet whose one impulsive decision (stabbing Polonius) defined his tragic fate, Kiner-Falefa's one moment of being inches short defined his career. Time to think changes everything."
    }
  },
  {
    name: "MALCOLM JAMAL-WARNER",
    role: "Actor, known for The Cosby Show",
    image: "https://cdn.britannica.com/53/249453-050-C957022F/Malcolm-Jamal-Warner.jpg",
    moment: "Malcolm Jamal-Warner was swimming with his daughter in the ocean last year when he was pulled by a strong undertow. He drowned, leaving his daughter and family devastated.",
    help1: {
      title: "Survive the Undertow",
      text: "With the STOP-watch, I could have stopped time the moment I felt the current pulling me under. Time freezes — the undertow stops. In those five minutes, both my daughter and I could swim to safety before resuming time. We'd escape before I got pulled under. I'd still be here.",
      connection: "Like Werner stepping on the landmine with no way out, Malcolm was caught in a force of nature that would kill him. The STOP-watch gives both the ability to escape certain death."
    },
    help2: {
      title: "Navigate Public Life with Privacy",
      text: "As a public figure, paparazzi and fans constantly approach me. Sometimes I just need space. With the STOP-watch, I could freeze time to get out of overwhelming public interactions, avoid paparazzi when I'm with my family, and move through the world on my own terms.",
      connection: "Like Offred who is constantly surveilled in Gilead with no privacy, Malcolm lost the ability to exist without being watched. The STOP-watch gives back the autonomy to choose when to be public and when to be private."
    }
  },
  {
    name: "JEFF HOFFMAN",
    role: "MLB Pitcher, Toronto Blue Jays",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeff_Hoffman_%289tZfLF_3qzU%29.png",
    moment: "November 1st, 2025. Game 7 of the World Series. Jeff Hoffman was two outs away from giving the Toronto Blue Jays their first championship since 1993. Toronto leading 4-3 in the 9th inning. Hoffman threw a hanging slider to Dodgers second baseman Miguel Rojas, who hit a game-tying home run. The Dodgers won 5-4 in 11 innings.",
    help1: {
      title: "Perfect the Crucial Pitch",
      text: "With two outs and a 3-2 count, the STOP-watch would have let me: Recognize the slider was hanging before releasing it and adjust my grip or switch pitches entirely. Process that Rojas was sitting on the slider and choose a different pitch selection. Calm my nerves in the highest-pressure moment of my career without the ticking clock. Visualize perfect execution rather than rushing the most important pitch of my life. One perfect pitch and Toronto wins the World Series. I'm a hero instead of the guy who blew it.",
      connection: "Like Hamlet who acted impulsively without thinking (stabbing Polonius), Jeff threw the pitch without the mental space to recognize it was hanging. Both needed five minutes to think before acting. One pause changes everything."
    },
    help2: {
      title: "Mental Recovery & Career Reputation",
      text: "After giving up the home run, I was devastated in front of 50,000 fans and millions watching. I told reporters: 'I cost everybody here a World Series ring. It feels pretty shitty.' With time-freeze, I could have: Mentally reset before the game went to extra innings, potentially staying in to pitch and redeem myself. Processed the devastating mistake without spiraling emotionally in public. Protected my reputation — I'm now forever known as the closer who blew the World Series rather than the hero who won it. As I enter 2026, fans and media will constantly reference this moment. Five minutes could have saved my legacy.",
      connection: "Like Amir in The Kite Runner who carries guilt for abandoning Hassan and spends his life trying to redeem himself, Jeff will carry the guilt of this moment forever. The STOP-watch prevents the trauma that defines your entire future."
    }
  }
];

const RealWorldImpact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="real-world-impact" className="min-h-screen bg-[#232025] text-[#d1d1d1] py-[15vh] px-[6vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-[10vh]"
      >
        <h2
          className="text-[5vw] md:text-[7vw] font-bold uppercase mb-[2vh] leading-tight"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          It's Not Just Fiction.
        </h2>
        <h3
          className="text-[3vw] md:text-[4vw] font-bold uppercase text-cyan-400"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Real Athletes and Public Figures Need This Too.
        </h3>
      </motion.div>

      <div className="space-y-[10vh] max-w-[90vw] mx-auto">
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
                  HOW THE STOP-WATCH HELPS (WAY 1): {athlete.help1.title}
                </h4>
                <p className="text-sm md:text-base text-[#adadad] leading-relaxed mb-4 whitespace-pre-line">
                  "{athlete.help1.text}"
                </p>
                <p className="text-xs md:text-sm text-gray-500 italic">
                  Literary Connection: {athlete.help1.connection}
                </p>
              </div>
              <div className="p-6 bg-cyan-500/10 border border-cyan-400/30">
                <h4 className="text-lg md:text-xl font-bold uppercase mb-4 text-cyan-400">
                  HOW THE STOP-WATCH HELPS (WAY 2): {athlete.help2.title}
                </h4>
                <p className="text-sm md:text-base text-[#adadad] leading-relaxed mb-4 whitespace-pre-line">
                  "{athlete.help2.text}"
                </p>
                <p className="text-xs md:text-sm text-gray-500 italic">
                  Literary Connection: {athlete.help2.connection}
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
