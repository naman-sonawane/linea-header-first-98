import { Clock, Sparkles, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Standard",
    price: "$∞",
    tagline: "For everyday heroes",
    features: [
      "5 minutes of frozen time",
      "Solo use only",
      "Unlimited activations",
      "Lifetime warranty"
    ],
    highlighted: false
  },
  {
    name: "Premium",
    price: "$∞∞",
    tagline: "Most popular",
    features: [
      "5 minutes of frozen time",
      "Bring +1 person with you",
      "Unlimited activations",
      "24/7 temporal support",
      "Time-proof carrying case"
    ],
    highlighted: true
  },
  {
    name: "Literary Hero",
    price: "Priceless",
    tagline: "For tragic protagonists",
    features: [
      "5 minutes of frozen time",
      "Bring your whole family",
      "Retrospective activation*",
      "Fate reversal guarantee",
      "*Only available in fiction"
    ],
    highlighted: false
  }
];

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Limited Time Offer</span>
            <span className="text-slate-500 text-sm">(Ironic, we know)</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your STOP-watch Today
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't wait until it's too late. Every second you delay is a second you might need back.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted 
                  ? 'bg-gradient-to-b from-cyan-500/20 to-slate-800 border-2 border-cyan-500/50' 
                  : 'bg-slate-800/50 border border-slate-700/50'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-slate-900 text-sm font-semibold rounded-full">
                  Bestseller
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {tier.tagline}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold text-cyan-400">
                    {tier.price}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className={feature.startsWith('*') ? 'text-sm text-slate-500 italic' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  tier.highlighted 
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-900' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Order Now
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30">
          <Infinity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            The "No Tragic Ending" Guarantee
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            If you still experience a tragic ending while using the STOP-watch, 
            we'll refund your purchase in full. 
            <span className="text-slate-500 text-sm block mt-2">
              (Excludes tragedies caused by user error, hubris, or ignoring the ghost of your father)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
