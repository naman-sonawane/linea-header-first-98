import { Clock, Users } from "lucide-react";

const characters = [
  { name: "Solomon", source: "Blood Diamond" },
  { name: "Hamlet", source: "Shakespeare" },
  { name: "Amir", source: "The Kite Runner" },
  { name: "Werner", source: "All the Light" },
  { name: "Offred", source: "Handmaid's Tale" },
  { name: "Chappell", source: "Real World" }
];

const Conclusion = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Character icons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {characters.map((char, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 border border-slate-600/50 flex items-center justify-center">
                <Users className="w-8 h-8 text-cyan-400/60" />
              </div>
              <span className="text-sm text-slate-400">{char.name}</span>
            </div>
          ))}
        </div>

        {/* Main message */}
        <div className="mb-12">
          <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Whether you're facing war, family crisis, impossible decisions, 
            or just need a moment to breathe—
            <span className="text-cyan-400"> the STOP-watch gives you what every tragic hero needed:</span>
          </h2>
          <p className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            TIME.
          </p>
        </div>

        {/* Final call to action */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20">
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
            Don't let pressure, impulse, or lack of time destroy your life.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Take control. Stop time. 
          </p>
          <p className="text-3xl md:text-4xl font-bold text-cyan-400">
            Change your fate.
          </p>
        </div>

        {/* Credits */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-slate-500 text-sm">
            A creative project exploring themes of time, pressure, and tragic decisions 
            across literary texts and contemporary life.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Texts Referenced: Blood Diamond • Hamlet • The Kite Runner • All the Light We Cannot See • The Handmaid's Tale
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
