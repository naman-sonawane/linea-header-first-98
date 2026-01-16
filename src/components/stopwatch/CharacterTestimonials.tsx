const testimonials = [
  {
    name: "SOLOMON VANDY",
    role: "Diamond miner, father",
    source: "Blood Diamond",
    image: "https://www.spiritualityandpractice.com/uploads/film_reviews/images/blooddiamondlrg5.jpg",
    before: "My son Dia was brainwashed by rebels. When I finally found him, he didn't recognize me. Rebels pointed guns at me. I had no time to talk to him privately, to remind him who he really was. I was desperate, and any wrong move meant death for both of us.",
    after: "I froze time the moment I saw Dia pointing a gun at me. Those 5 minutes alone with my son—no rebels watching, no pressure—I held him and reminded him of our village, our family, the stories I used to tell him. When time resumed, he lowered the gun. He came home with me. We're together now.",
    visual: "Solomon and Dia embracing, gun lowered on the ground"
  },
  {
    name: "HAMLET",
    role: "Prince of Denmark",
    source: "Hamlet",
    image: "https://i.imgur.com/4Mjort6.jpeg",
    before: "I heard a noise behind the tapestry while speaking to my mother. I acted before I thought — I stabbed through the curtain. It was Polonius.\n\nThat one moment destroyed everything. Ophelia went into madness and possibly committed suicide. Laertes challenged me to the death. Both of us died, along with Gertrude.",
    after: "With the STOP-watch, when I heard the noise, I could freeze time. I'd look behind the tapestry to see who is there. Those five minutes would give me time to meditate on what my next course of action would be.\n\nThis prevents Ophelia's madness, Polonius's death, Laertes' and my deaths, and Gertrude's death. The battle would never occur.",
    visual: "Hamlet pausing, hand on tapestry, NOT stabbing"
  },
  {
    name: "AMIR",
    role: "Author",
    source: "The Kite Runner",
    image: "https://ncowie.wordpress.com/wp-content/uploads/2012/08/amir.jpg",
    before: "When I went to free Sohrab, I met Assef. He was accompanied by other Taliban members — I was in a very tight position. I had to fight Assef to the death in order to leave with Sohrab.",
    after: "With the STOP-watch, I froze time. In the five minutes, Sohrab and I escaped and got in the car. We drove away without any physical altercation. This prevented me from getting hospitalized due to my injuries.",
    visual: "Amir and Sohrab in a car, driving away safely"
  },
  {
    name: "WERNER PFENNIG",
    role: "German soldier",
    source: "All the Light We Cannot See",
    image: "https://i.imgur.com/1vdQJd8.png",
    before: "I stepped on a landmine. Once I took the weight off, the mine would go off and I would die. There was no escape.",
    after: "With the STOP-watch, I froze time, giving me the ability to step off the landmine with no consequences and get far enough away from the mine to not be affected by the explosion once time resumes.",
    visual: "Werner walking away from an explosion in the distance"
  },
  {
    name: "OFFRED",
    role: "Handmaid",
    source: "The Handmaid's Tale",
    image: "https://imgix.bustle.com/2017/4/20/17e60f76-757a-40ff-a10e-81913aa87893.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
    before: "During my time in Gilead, I went to the Commander's room frequently. Every step was a risk — Serena Joy could catch me at any moment.",
    after: "With the STOP-watch, I could freeze time to ensure that I make it in undetected by anyone. While in the room, I could snoop around and dig for any information on the outside world, giving me a better understanding of what is truly going on.\n\nFor the first time, I had control.",
    visual: "Offred moving through a frozen hallway, confident"
  }
];

const CharacterTestimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Hear from those who needed it most.
          </p>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Header with image */}
              <div className="p-6 md:p-8 border-b border-slate-700/50">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-300 mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-cyan-400">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                      Before STOP-watch:
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    "{testimonial.before}"
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                      With STOP-watch:
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    "{testimonial.after}"
                  </p>
                </div>
              </div>

              {/* Visual description */}
              <div className="p-6 md:p-8 bg-cyan-500/5 border-t border-slate-700/50">
                <p className="text-cyan-300 text-sm italic text-center">
                  [Visual: {testimonial.visual}]
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterTestimonials;
