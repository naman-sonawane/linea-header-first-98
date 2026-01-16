import { ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Watch icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-cyan-400/50 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm">
              <Clock className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-cyan-400/20 animate-ping" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
          The STOP-watch
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-3xl text-cyan-100/80 font-light mb-4">
          When 5 Minutes Can Change Everything
        </p>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          The revolutionary device that freezes time, giving you the power to think before you act. 
          Because tragedy is just one impulsive decision away.
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToTestimonials}
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          See How It Works
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
