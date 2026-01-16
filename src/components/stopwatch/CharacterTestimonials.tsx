import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "SOLOMON VANDY",
    role: "Diamond miner, father",
    source: "Blood Diamond",
    image: "https://www.spiritualityandpractice.com/uploads/film_reviews/images/blooddiamondlrg5.jpg",
    before: "My son Dia was brainwashed by rebels. When I finally found him, he didn't recognize me. Rebels pointed guns at me. I had no time to talk to him privately, to remind him who he really was. I was desperate, and any wrong move meant death for both of us.",
    after: "I froze time the moment I saw Dia pointing a gun at me. Those 5 minutes alone with my son—no rebels watching, no pressure—I held him and reminded him of our village, our family, the stories I used to tell him. When time resumed, he lowered the gun. He came home with me. We're together now."
  },
  {
    name: "HAMLET",
    role: "Prince of Denmark",
    source: "Hamlet",
    image: "https://i.imgur.com/4Mjort6.jpeg",
    before: "I heard a noise behind the tapestry while speaking to my mother. I acted before I thought — I stabbed through the curtain. It was Polonius.\n\nThat one moment destroyed everything. Ophelia went into madness and possibly committed suicide. Laertes challenged me to the death. Both of us died, along with Gertrude.",
    after: "With the STOP-watch, when I heard the noise, I could freeze time. I'd look behind the tapestry to see who is there. Those five minutes would give me time to meditate on what my next course of action would be.\n\nThis prevents Ophelia's madness, Polonius's death, Laertes' and my deaths, and Gertrude's death. The battle would never occur."
  },
  {
    name: "AMIR",
    role: "Author",
    source: "The Kite Runner",
    image: "https://ncowie.wordpress.com/wp-content/uploads/2012/08/amir.jpg",
    before: "When I went to free Sohrab, I met Assef. He was accompanied by other Taliban members — I was in a very tight position. I had to fight Assef to the death in order to leave with Sohrab.",
    after: "With the STOP-watch, I froze time. In the five minutes, Sohrab and I escaped and got in the car. We drove away without any physical altercation. This prevented me from getting hospitalized due to my injuries."
  },
  {
    name: "WERNER PFENNIG",
    role: "German soldier",
    source: "All the Light We Cannot See",
    image: "https://i.imgur.com/1vdQJd8.png",
    before: "I stepped on a landmine. Once I took the weight off, the mine would go off and I would die. There was no escape.",
    after: "With the STOP-watch, I froze time, giving me the ability to step off the landmine with no consequences and get far enough away from the mine to not be affected by the explosion once time resumes."
  },
  {
    name: "OFFRED",
    role: "Handmaid",
    source: "The Handmaid's Tale",
    image: "https://imgix.bustle.com/2017/4/20/17e60f76-757a-40ff-a10e-81913aa87893.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
    before: "During my time in Gilead, I went to the Commander's room frequently. Every step was a risk — Serena Joy could catch me at any moment.",
    after: "With the STOP-watch, I could freeze time to ensure that I make it in undetected by anyone. While in the room, I could snoop around and dig for any information on the outside world, giving me a better understanding of what is truly going on.\n\nFor the first time, I had control."
  }
];

const CharacterTestimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-black text-white relative overflow-hidden">
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
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-4"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl md:text-2xl text-[#adadad]">
            Hear from those who needed it most.
          </p>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card relative border-2 border-white/10 bg-black hover:border-cyan-400 transition-all duration-500 group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="p-8 md:p-12 border-b-2 border-white/10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-none border-4 border-cyan-400/50 overflow-hidden flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3
                      className="text-3xl md:text-4xl font-bold uppercase mb-2 tracking-wider"
                      style={{ fontFamily: "'Audiowide', sans-serif" }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300 mb-2 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-cyan-400 text-sm font-bold">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="p-8 md:p-12 bg-red-500/5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                      BEFORE STOP-watch:
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                    "{testimonial.before}"
                  </p>
                </div>
                <div className="p-8 md:p-12 bg-green-500/5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/30">
                      WITH STOP-watch:
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                    "{testimonial.after}"
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

export default CharacterTestimonials;
