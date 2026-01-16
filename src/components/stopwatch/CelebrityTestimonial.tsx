import { Star, Shield, Eye, Quote } from "lucide-react";

const CelebrityTestimonial = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">
            Celebrity Endorsement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Even Global Superstars Need a Moment to Breathe
          </h2>
        </div>

        {/* Main testimonial card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden">
          {/* Header with photo placeholder */}
          <div className="p-8 md:p-12 border-b border-slate-700/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center border-2 border-cyan-500/30">
                <Star className="w-16 h-16 text-cyan-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Chappell Roan
                </h3>
                <p className="text-lg text-slate-400 mb-4">
                  Grammy-nominated pop artist, 2024 breakthrough star
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                    #1 Billboard Artist
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                    40M+ Monthly Listeners
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Her story */}
          <div className="p-8 md:p-12 border-b border-slate-700/50">
            <h4 className="text-xl font-semibold text-white mb-4">Her Story</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              "In 2024, I went from unknown to international pop star overnight. What should have been 
              the best year of my life became a nightmare. Stalkers showed up at my parents' house in 
              Missouri. Fans tracked my flights and waited at airports to ambush me. I was grabbed and 
              kissed by strangers who felt entitled to my body. My dad's phone number was leaked online."
            </p>
            <p className="text-slate-300 leading-relaxed">
              "I almost quit music because my family was in danger. I said publicly that if there were 
              stalker vibes or my family was threatened, I would walk away from everything I'd built. 
              The price of fame was too high."
            </p>
          </div>

          {/* Two benefits */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
            {/* Benefit 1 */}
            <div className="p-8 md:p-12">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Escape Stalkers & Dangerous Fans
              </h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                "When that aggressive man demanded an autograph at Seattle airport, I could have frozen 
                time and left safely instead of needing police intervention—only to have him follow me 
                to LAX. When fans track my flights and wait for me, I freeze time at the airport, walk 
                to my car undetected, and drive away before anyone sees me."
              </p>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                <p className="text-cyan-300 text-sm">
                  <strong>Literary Connection:</strong> Like Solomon Vandy needing to escape rebels 
                  pointing guns at him, Chappell needs to escape fans who treat her like property 
                  instead of a person.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-8 md:p-12">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Protect Privacy & Family
              </h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                "I can visit my family in Missouri without being followed—freeze time, spend quality 
                time with my parents and sister, leave before anyone tracks me there. Those 5 minutes 
                let me move through the world like a normal person again, not someone being hunted 24/7."
              </p>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                <p className="text-cyan-300 text-sm">
                  <strong>Literary Connection:</strong> Like Offred in The Handmaid's Tale who is 
                  constantly surveilled and has no privacy, Chappell lost the right to exist without 
                  being watched. The STOP-watch gives her back autonomy over her own life.
                </p>
              </div>
            </div>
          </div>

          {/* Final quote */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-cyan-500/10 to-pink-500/10">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                "I said years ago that if there were stalker vibes or my family was in danger, I would 
                quit music. The STOP-watch means I don't have to choose between my art and my safety 
                anymore. Those 5 minutes of invisibility gave me my life back."
                <span className="block text-cyan-400 text-base mt-4 not-italic font-medium">
                  — Chappell Roan
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityTestimonial;
