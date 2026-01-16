import { Clock } from "lucide-react";

const StopwatchFooter = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-cyan-400" />
            <div>
              <span className="text-white font-semibold">STOP-watch</span>
              <span className="text-slate-500 text-sm ml-2">| When 5 Minutes Can Change Everything</span>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              A creative English project by Naman
            </p>
            <p className="text-slate-600 text-xs mt-1">
              © 2025 | Not a real product
            </p>
          </div>
        </div>

        {/* Literary references */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-xs">
            Texts explored: Blood Diamond • Hamlet • The Kite Runner • All the Light We Cannot See • The Handmaid's Tale
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StopwatchFooter;
