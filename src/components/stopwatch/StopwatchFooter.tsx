import { Clock } from "lucide-react";

const FreezeFrameFooter = () => {
  return (
    <footer className="bg-[#232025] border-t-2 border-white/10 text-[#d1d1d1]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-cyan-400" />
            <span
              className="text-white font-bold text-2xl uppercase tracking-wider"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              FreezeFrame
            </span>
          </div>
          <p className="text-[#adadad] text-sm">
            © 2025 | ENG4U
          </p>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[#adadad] text-xs">
            Texts Explored: Blood Diamond • Hamlet • The Kite Runner • All the Light We Cannot See • The Handmaid's Tale
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FreezeFrameFooter;
