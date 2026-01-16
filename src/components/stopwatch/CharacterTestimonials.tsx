import { User } from "lucide-react";

const testimonials = [
  {
    name: "Solomon Vandy",
    source: "Blood Diamond",
    before: "My son Dia was brainwashed by rebels. When I finally found him, he didn't recognize me. Rebels pointed guns at me. I had no time to talk to him privately, to remind him who he really was. I was desperate, and any wrong move meant death for both of us.",
    after: "I froze time the moment I saw Dia pointing a gun at me. Those 5 minutes alone with my son—no rebels watching, no pressure—I held him and reminded him of our village, our family, the stories I used to tell him. When time resumed, he lowered the gun. He came home with me. We're together now.",
    theme: "The STOP-watch gives you what war takes away: the chance to reach someone you love."
  },
  {
    name: "Hamlet",
    source: "Hamlet by Shakespeare",
    before: "I heard a noise behind the tapestry in my mother's chamber. Rage consumed me—I was certain it was Claudius spying on us. I stabbed through the curtain without thinking. It was Polonius. That one impulsive moment destroyed everything: Ophelia went mad and drowned. Laertes challenged me to a duel. My mother drank poison. We all died.",
    after: "When I heard the noise, I froze time. I walked to the tapestry and looked behind it—just Polonius, eavesdropping as usual. Those 5 minutes let me calm the fire in my blood. I chose NOT to kill him. Ophelia lived. Laertes and I never fought. My mother never touched that poisoned cup. One pause saved six lives.",
    theme: "The difference between tragedy and survival is often just 5 minutes of clarity."
  },
  {
    name: "Amir",
    source: "The Kite Runner",
    before: "To rescue Sohrab from the Taliban, I had to face Assef—the same monster who assaulted Hassan decades ago. He beat me nearly to death while his guards watched. I spent weeks in the hospital. Even now, my face bears the scars of that day. Sohrab was so traumatized he attempted suicide.",
    after: "I froze time the moment I entered that room with Assef. In 5 quiet minutes, I walked Sohrab past the frozen guards, out the door, into my car. We drove away while Assef stood frozen mid-sentence. No fight. No broken bones. No trauma. Just two people escaping their past, finally free.",
    theme: "Redemption doesn't require suffering. Sometimes it just requires a moment to act."
  },
  {
    name: "Werner Pfennig",
    source: "All the Light We Cannot See",
    before: "I stepped on a landmine. The click beneath my boot told me everything—any movement and I would explode. I stood frozen, not by choice but by terror, knowing these were my final moments. I was sixteen years old, and I was going to die in a war I never believed in.",
    after: "I froze time the instant I felt the mine click. In those 5 minutes, I carefully lifted my foot and ran. I ran until I was far enough away that when time resumed and the mine exploded, I felt only the shockwave at my back. The watch saved my life. I got to see the end of the war.",
    theme: "War steals futures. The STOP-watch gave Werner his back."
  },
  {
    name: "Offred",
    source: "The Handmaid's Tale",
    before: "Every moment of my life is watched. Trips to the Commander's study risk discovery by Serena Joy. Eyes follow me everywhere—Guardians, Marthas, other Handmaids who might report me. I have no privacy, no autonomy, no way to gather information about the resistance or the outside world. I am a prisoner in my own body.",
    after: "I freeze time to move through the house unseen. In 5 minutes, I search the Commander's office for documents about the resistance. I slip into rooms I'm forbidden to enter. I return to my position before anyone knows I moved. Those 5 minutes give me back something Gilead stole: agency over my own existence.",
    theme: "Surveillance only works if you can't stop time. Offred learned to disappear."
  }
];

const CharacterTestimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Character Testimonials
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Hear from those who used the STOP-watch to rewrite their tragic endings.
          </p>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-slate-700/50 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-cyan-400">
                    {testimonial.source}
                  </p>
                </div>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                      Before STOP-watch
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">
                    "{testimonial.before}"
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                      With STOP-watch
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">
                    "{testimonial.after}"
                  </p>
                </div>
              </div>

              {/* Theme */}
              <div className="p-6 md:p-8 bg-cyan-500/5 border-t border-slate-700/50">
                <p className="text-cyan-300 font-medium text-center">
                  {testimonial.theme}
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
