import { Quote } from "lucide-react";

const themes = [
  {
    theme: "The Pressure of Time",
    description: "In moments of crisis, characters across literature are forced to make split-second decisions that determine their fate. Hamlet hears a noise and stabs blindly. Solomon confronts his brainwashed son with guns pointed at him. Werner steps on a landmine. Time itself becomes the enemy.",
    quote: "\"Had I but time—as this fell sergeant, Death, is strict in his arrest—O, I could tell you...\"",
    source: "— Hamlet, Act 5"
  },
  {
    theme: "Impulsive Decisions",
    description: "Without time to process emotions, characters act on instinct. Hamlet's impulsive stabbing kills Polonius and sets off a chain reaction of deaths. Amir's fight with Assef nearly costs him his life. These moments of rashness become irreversible turning points.",
    quote: "\"A rat! Dead for a ducat, dead!\"",
    source: "— Hamlet, before killing Polonius"
  },
  {
    theme: "Lack of Control",
    description: "From Offred's constant surveillance to Werner's impossible position in war, these characters are trapped by circumstances beyond their control. They lack the autonomy to step back, to think, to choose their own path. The STOP-watch restores what was stolen: agency.",
    quote: "\"We lived, as usual, by ignoring. Ignoring isn't the same as ignorance, you have to work at it.\"",
    source: "— Offred, The Handmaid's Tale"
  }
];

const ThemeConnection = () => {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">
            Literary Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Why This Product Matters
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Across the texts we've studied this semester, one theme emerges again and again: 
            the devastating consequences of decisions made under impossible pressure, 
            without the time to truly think.
          </p>
        </div>

        <div className="space-y-12">
          {themes.map((item, index) => (
            <div 
              key={index}
              className="p-8 md:p-10 rounded-2xl bg-slate-900/50 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {item.theme}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl">
                <Quote className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white italic text-lg mb-2">
                    {item.quote}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {item.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeConnection;
