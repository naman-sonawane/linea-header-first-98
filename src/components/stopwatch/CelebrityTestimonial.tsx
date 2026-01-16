import { Star, Quote } from "lucide-react";

const celebrities = [
  {
    name: "Isiah Kiner-Falefa",
    title: "Professional Baseball Player",
    image: "https://i.imgur.com/Us6m11L.jpeg",
    quote: "As a professional athlete, every moment counts. The STOP-watch gives me those crucial seconds to think, to breathe, to make the right play when the pressure is at its highest."
  },
  {
    name: "Malcolm Jamal-Warner",
    title: "Actor & Director",
    image: "https://cdn.britannica.com/53/249453-050-C957022F/Malcolm-Jamal-Warner.jpg",
    quote: "In an industry where every decision can make or break your career, having those 5 minutes to pause and reflect has been invaluable. The STOP-watch isn't just a tool—it's a game changer."
  },
  {
    name: "Jeff Hoffman",
    title: "Entrepreneur & Investor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeff_Hoffman_%289tZfLF_3qzU%29.png",
    quote: "In high-stakes business negotiations, timing is everything. The STOP-watch gives me the clarity I need to make the right decisions when seconds matter most."
  }
];

const CelebrityTestimonial = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">
            Celebrity Endorsement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Even Global Superstars Need a Moment to Breathe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {celebrities.map((celebrity, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Header with photo */}
              <div className="p-8 border-b border-slate-700/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 mb-4">
                    <img 
                      src={celebrity.image} 
                      alt={celebrity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {celebrity.name}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {celebrity.title}
                  </p>
                  <div className="flex items-center justify-center">
                    <Star className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-slate-800/50">
                <div className="flex items-start gap-4">
                  <Quote className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <blockquote className="text-slate-300 leading-relaxed italic">
                    "{celebrity.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrityTestimonial;
