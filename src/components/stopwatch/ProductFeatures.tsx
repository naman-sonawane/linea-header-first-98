import { Clock, Shield, Heart, Eye, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Freeze Time",
    description: "Stop the world for up to 5 minutes. Only you can move—everyone and everything else is frozen in place."
  },
  {
    icon: Heart,
    title: "Bring Someone With You",
    description: "Optionally extend the time-freeze bubble to include one other person. Perfect for private conversations."
  },
  {
    icon: Shield,
    title: "Escape Danger",
    description: "Remove yourself from life-threatening situations. Walk away from violence before it happens."
  },
  {
    icon: Eye,
    title: "Process Emotions",
    description: "Take a breath when anger or fear clouds your judgment. Make decisions with a clear mind."
  },
  {
    icon: Lock,
    title: "Reclaim Privacy",
    description: "Move through public spaces undetected. Gather information. Find escape routes."
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "One touch is all it takes. In moments of crisis, every millisecond counts."
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The STOP-watch harnesses temporal manipulation technology to give you 
            what every tragic hero desperately needed: time to think.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
