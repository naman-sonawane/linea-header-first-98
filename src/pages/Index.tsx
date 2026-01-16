import StopwatchNavigation from "../components/stopwatch/StopwatchNavigation";
import StopwatchFooter from "../components/stopwatch/StopwatchFooter";
import HeroSection from "../components/stopwatch/HeroSection";
import ProductFeatures from "../components/stopwatch/ProductFeatures";
import ThemeConnection from "../components/stopwatch/ThemeConnection";
import CharacterTestimonials from "../components/stopwatch/CharacterTestimonials";
import CelebrityTestimonial from "../components/stopwatch/CelebrityTestimonial";
import CallToAction from "../components/stopwatch/CallToAction";
import Conclusion from "../components/stopwatch/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <StopwatchNavigation />
      
      <main>
        <HeroSection />
        <section id="features">
          <ProductFeatures />
        </section>
        <section id="themes">
          <ThemeConnection />
        </section>
        <CharacterTestimonials />
        <section id="celebrity">
          <CelebrityTestimonial />
        </section>
        <section id="cta">
          <CallToAction />
        </section>
        <Conclusion />
      </main>
      
      <StopwatchFooter />
    </div>
  );
};

export default Index;
