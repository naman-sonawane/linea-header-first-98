import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "SOLOMON VANDY",
    role: "Diamond miner, father",
    source: "Blood Diamond",
    image: "https://www.spiritualityandpractice.com/uploads/film_reviews/images/blooddiamondlrg5.jpg",
    before: "My family was split apart by the conflict in Sierra Leone. My son Dia was captured by a rebel group and brainwashed. When I found him with other rebels, he pretended not to recognize me. Dia caused a scene, resulting in multiple rebels pointing their guns at me. I had no time to act, and any wrong move meant death for both of us.",
    after: "Instead of rushing into a group of rebels, I froze time for everyone but me and Danny Archer. This gave us the opportunity to pull Dia out while everyone is frozen. This way, I got Dia out without getting captured, and Danny did not have to free us. Danny avoided his tragic ending because he never ended up in the situation he was in when he died."
  },
  {
    name: "HAMLET",
    role: "Prince of Denmark",
    source: "Hamlet",
    image: "https://i.imgur.com/4Mjort6.jpeg",
    before: "I heard a noise behind the tapestry when speaking to my mother. I acted before I thought, stabbing through the curtain without knowing who was there. This resulted in the death of Polonius, which sent Ophelia into madness, leading her to possibly commit suicide. This also resulted in Laertes challenging me to the death, causing both of us to die, as well as Gertrude in the process.",
    after: "With FreezeFrame, when I heard the noise behind the tapestry, I could freeze time. I'd look behind the curtain to see who is there. Those five minutes would give me time to meditate on what my next course of action would be.\n\nThis prevents Ophelia's madness, Polonius's death, Laertes' and my deaths, and Gertrude's death. The battle would never occur."
  },
  {
    name: "AMIR",
    role: "Author",
    source: "The Kite Runner",
    image: "https://ncowie.wordpress.com/wp-content/uploads/2012/08/amir.jpg",
    before: "When I went to free Sohrab, I met Assef. He was accompanied by other Taliban members. I was in a very tight position. I had to fight Assef to the death in order to leave with Sohrab.",
    after: "With FreezeFrame, I froze time. In the five minutes, Sohrab and I escaped and got in the car. We drove away without any physical altercation. This prevented me from getting hospitalized due to my injuries."
  },
  {
    name: "WERNER PFENNIG",
    role: "German soldier",
    source: "All the Light We Cannot See",
    image: "https://i.imgur.com/1vdQJd8.png",
    before: "I was about to cross a field when an American soldier warned me and told me to halt. I didn't stop to think about why he might be telling me to stop. I stepped on a landmine and was blown up instantly. I died because I didn't have time to process the warning.",
    after: "With the FreezeFrame, I was able to freeze time, giving me the ability to stop and think about why the American soldier might be telling me to stop. I could choose to not cross the field, so I would not die, avoiding my tragic ending."
  },
  {
    name: "OFFRED",
    role: "Handmaid",
    source: "The Handmaid's Tale",
    image: "https://imgix.bustle.com/2017/4/20/17e60f76-757a-40ff-a10e-81913aa87893.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
    before: "During my time in Gilead, I went to the Commander's room frequently. Every step was a risk. Serena Joy could catch me at any moment.",
    after: "With FreezeFrame, I could freeze time to ensure that I make it in undetected by anyone. While in the room, I could snoop around and dig for any information on the outside world, giving me a better understanding of what is truly going on.\n\nFor the first time, I had control."
  }
];

const CharacterTestimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-black text-white relative overflow-hidden">
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

        <div className="space-y-12">
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

              {testimonial.before ? (
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="p-8 md:p-12 bg-red-500/5">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-4 py-2 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                        BEFORE FreezeFrame:
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                      "{testimonial.before}"
                    </p>
                  </div>
                  <div className="p-8 md:p-12 bg-green-500/5">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/30">
                        WITH FreezeFrame:
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                      "{testimonial.after}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 md:p-12 bg-green-500/5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/30">
                      WITH FreezeFrame:
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                    "{testimonial.after}"
                  </p>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterTestimonials;
