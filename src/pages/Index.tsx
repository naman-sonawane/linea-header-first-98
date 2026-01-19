import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import FreezeFrameNavigation from "../components/stopwatch/StopwatchNavigation";
import FreezeFrameFooter from "../components/stopwatch/StopwatchFooter";
import CharacterTestimonials from "../components/stopwatch/CharacterTestimonials";
import ProductOverview from "../components/stopwatch/ProductOverview";
import WhyItMatters from "../components/stopwatch/WhyItMatters";
import RealWorldImpact from "../components/stopwatch/RealWorldImpact";
import ProductFeaturesDetailed from "../components/stopwatch/ProductFeaturesDetailed";
import ProductModels from "../components/stopwatch/ProductModels";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed"
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    scrollRef.current = locoScroll;
    (window as any).locoScroll = locoScroll;

    // Hero text animation
    const heroTitle = document.querySelector("#hero-title");
    if (heroTitle) {
      gsap.from(heroTitle, {
        duration: 2,
        opacity: 0,
        onStart: () => {
          const text = heroTitle.textContent || "";
          heroTitle.innerHTML = "";
          text.split("").forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.opacity = "0";
            heroTitle.appendChild(span);
            gsap.to(span, {
              opacity: 1,
              duration: 0.05,
              delay: i * 0.03,
              ease: "power2.out"
            });
          });
        }
      });
    }

    gsap.from(["#hero-subtitle", "#hero-tagline"], {
      duration: 1.5,
      delay: 0.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.3
    });

    // Hero image subtle animation
    const heroImg = document.querySelector("#hero-img");
    if (heroImg) {
      gsap.to(heroImg, {
        y: -20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // 3D text reveal
    const revealTexts = document.querySelectorAll("#reveal-text h1");
    revealTexts.forEach((text) => {
      gsap.to(text, {
        duration: 1,
        opacity: 1,
        rotateX: 0,
        scrollTrigger: {
          trigger: text,
          scroller: containerRef.current,
          scrub: 2,
          end: "bottom 85%",
          start: "top 60%"
        }
      });
    });

    // Line animation
    const line = document.querySelector("#line");
    if (line && containerRef.current) {
      gsap.to(line, {
        scrollTrigger: {
          trigger: "#features-section",
          scroller: containerRef.current,
          scrub: 2,
          end: "bottom 90%",
          start: "top 80%"
        },
        width: "100%"
      });
    }

    // Horizontal scrolling text
    const slideTexts1 = document.querySelectorAll("#slide-text-1 h1");
    slideTexts1.forEach((elem) => {
      gsap.to(elem, {
        transform: "translateX(-96%)",
        ease: "FreezeFramer",
        duration: 4,
        scrollTrigger: {
          trigger: "#slide-section",
          scroller: containerRef.current,
          scrub: 3
        }
      });
    });

    const slideTexts2 = document.querySelectorAll("#slide-text-2 h1");
    slideTexts2.forEach((elem) => {
      gsap.to(elem, {
        transform: "translateX(0%)",
        ease: "FreezeFramer",
        duration: 4,
        scrollTrigger: {
          trigger: "#slide-section",
          scroller: containerRef.current,
          scrub: 3
        }
      });
    });

    // Rotating image
    const rotatingImg = document.querySelector("#rotating-img");
    if (rotatingImg) {
      gsap.to(rotatingImg, {
        rotate: 360,
        repeat: -1,
        duration: 2.5,
        ease: "FreezeFramer"
      });
    }

    // Finish text animation
    const finish = document.querySelector("#finish");
    if (finish && containerRef.current) {
      gsap.to(finish, {
        scrollTrigger: {
          trigger: finish,
          scroller: containerRef.current,
          start: "top 35%"
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          const texts = finish.querySelectorAll("h1");
          texts.forEach((text) => {
            const originalText = text.textContent || "";
            text.innerHTML = "";
            originalText.split("").forEach((char, i) => {
              const span = document.createElement("span");
              span.textContent = char === " " ? "\u00A0" : char;
              span.style.opacity = "0";
              text.appendChild(span);
              gsap.to(span, {
                opacity: 1,
                duration: 0.05,
                delay: i * 0.03,
                ease: "power2.out"
              });
            });
          });
        }
      });
    }

    // Hover gif effects
    const op1 = document.querySelector("#op1");
    const gifimg1 = document.querySelector("#op1 .gifimg");
    if (op1 && gifimg1) {
      op1.addEventListener("mouseover", () => {
        gsap.to(gifimg1, { opacity: 1, duration: 0.3 });
      });
      op1.addEventListener("mouseleave", () => {
        gsap.to(gifimg1, { opacity: 0, duration: 0.3 });
      });
      op1.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        gsap.to(gifimg1, {
          top: `${mouseEvent.y - 250}px`,
          left: `${mouseEvent.x - 50}px`,
          duration: 0.3
        });
      });
    }

    const op2 = document.querySelector("#op2");
    const gifimg2 = document.querySelector("#op2 .gifimg");
    if (op2 && gifimg2) {
      op2.addEventListener("mouseover", () => {
        gsap.to(gifimg2, { opacity: 1, duration: 0.3 });
      });
      op2.addEventListener("mouseleave", () => {
        gsap.to(gifimg2, { opacity: 0, duration: 0.3 });
      });
      op2.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        gsap.to(gifimg2, {
          top: `${mouseEvent.y - 250}px`,
          left: `${mouseEvent.x - 650}px`,
          duration: 0.3
        });
      });
    }

    // Hover card effects
    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item) => {
      const card = item.querySelector(".hover-card");
      if (!card) return;

      const h1 = item.querySelector("h1");
      if (!h1) return;

      h1.addEventListener("mouseenter", () => {
        gsap.to(card, {
          opacity: 1,
          duration: 0.3,
          transform: "translate(-50%, -50%) rotate(20deg)"
        });
      });

      item.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        gsap.to(card, {
          left: `${mouseEvent.x}px`,
          duration: 0.3
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(card, {
          opacity: 0,
          duration: 0.3,
          transform: "translate(-50%, -50%) rotate(0deg)"
        });
      });
    });

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  return (
    <div ref={containerRef} id="bg" className="min-h-screen bg-[#232025] text-[#d1d1d1] overflow-hidden">
      <FreezeFrameNavigation />

      <div id="page1" className="relative bg-[#232025] min-h-screen flex items-center">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          <div className="flex-1 z-10">
            <h1
              id="hero-title"
              className="text-6xl md:text-8xl lg:text-9xl uppercase tracking-[3px] font-bold mb-6"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              FreezeFrame
            </h1>

            <h2
              id="hero-subtitle"
              className="text-xl md:text-2xl font-light leading-relaxed text-[#adadad] mb-6 max-w-2xl"
            >
              A revolutionary device that stops time.
            </h2>

            <h4
              id="hero-tagline"
              className="text-sm md:text-base text-cyan-400 font-light tracking-wider uppercase"
            >
              ONE TOUCH. ONE MOMENT. ONE CHANCE.
            </h4>
          </div>

          <div className="flex-1 flex justify-center z-10">
            <img
              id="hero-img"
              src="/watch.jpeg"
              alt="FreezeFrame Watch"
              className="w-full max-w-md h-auto object-cover rounded-none border-4 border-cyan-400/30 shadow-2xl hover:border-cyan-400/50 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <CharacterTestimonials />

      <ProductOverview />

      <WhyItMatters />

      <div id="page2" className="relative bg-[#232025]">
        <div id="reveal-text" className="h-[90vh] overflow-hidden flex flex-col items-center justify-center" style={{ perspective: '600px' }}>
          <h1 className="text-[55px] opacity-0 origin-left-bottom" style={{ transform: 'rotateX(270deg)', transformOrigin: 'left bottom' }}>
            We're bringing time control back to
          </h1>
          <h1 className="text-[55px] opacity-0 origin-left-bottom" style={{ transform: 'rotateX(270deg)', transformOrigin: 'left bottom' }}>
            its roots with <span style={{ fontFamily: "'Dancing Script', cursive" }}>perfectly frozen moments</span>
          </h1>
          <h1 className="text-[55px] opacity-0 origin-left-bottom" style={{ transform: 'rotateX(270deg)', transformOrigin: 'left bottom' }}>
            <span style={{ fontFamily: "'Dancing Script', cursive" }}>bursting with possibility.</span>
          </h1>
        </div>

        <div id="features-section" className="min-h-screen bg-[#232025] relative p-[10vh_6vw]">
          <div id="line" className="h-[2px] w-[30%] bg-[#adadad] relative">
            <h6 className="absolute left-[22vw] top-[8vh] text-[11px] uppercase">Available in</h6>
          </div>

          <div className="feature-item relative flex items-start my-[4vh] cursor-pointer group" id="feature-1">
            <div className="hover-card absolute top-1/2 left-[25%] z-[1] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[250px] rounded-[20px] text-black p-[20px_25px] opacity-0 transition-all duration-[4000ms] uppercase bg-[rgb(34,211,238)]">
              <h2 className="text-[33px] font-light">FreezeFrame</h2>
              <h3 className="text-[15px] absolute top-[80%]">features: Freeze Time</h3>
            </div>
            <h5 className="text-[15px]" style={{ fontFamily: "'Audiowide', sans-serif" }}>01</h5>
            <h1 className="text-[4.9vw] transition-all duration-[1000ms] ml-[12vw] text-left relative z-[99] font-bold tracking-[-0.6vw] group-hover:text-[#232025]" style={{ WebkitTextStroke: '1px #cecece', fontFamily: "'Audiowide', sans-serif" }}>
              FREEZE TIME
            </h1>
            <p className="absolute right-0 font-black text-[65px] opacity-0 transition-all duration-[1300ms] group-hover:opacity-100">
              <i className="ri-arrow-right-up-line"></i>
            </p>
          </div>

          <div className="feature-item relative flex items-start my-[4vh] cursor-pointer group" id="feature-2">
            <div className="hover-card absolute top-1/2 left-[25%] z-[1] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[250px] rounded-[20px] text-black p-[20px_25px] opacity-0 transition-all duration-[4000ms] uppercase bg-[rgb(233,255,34)]">
              <h2 className="text-[33px] font-light">FreezeFrame</h2>
              <h3 className="text-[15px] absolute top-[80%]">features: Bring Someone</h3>
            </div>
            <h5 className="font-['havelock_titling'] text-[15px]">02</h5>
            <h1 className="text-[4.9vw] transition-all duration-[1000ms] ml-[12vw] text-left relative z-[99] font-bold tracking-[-0.6vw] group-hover:text-[#232025]" style={{ WebkitTextStroke: '1px #cecece', fontFamily: "'Audiowide', sans-serif" }}>
              BRING SOMEONE
            </h1>
            <p className="absolute right-0 font-black text-[65px] opacity-0 transition-all duration-[1300ms] group-hover:opacity-100">
              <i className="ri-arrow-right-up-line"></i>
            </p>
          </div>

          <div className="feature-item relative flex items-start my-[4vh] cursor-pointer group" id="feature-3">
            <div className="hover-card absolute top-1/2 left-[25%] z-[1] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[250px] rounded-[20px] text-black p-[20px_25px] opacity-0 transition-all duration-[4000ms] uppercase bg-[rgb(0,255,170)]">
              <h2 className="text-[33px] font-light">FreezeFrame</h2>
              <h3 className="text-[15px] absolute top-[80%]">features: Escape Danger</h3>
            </div>
            <h5 className="font-['havelock_titling'] text-[15px]">03</h5>
            <h1 className="text-[4.9vw] transition-all duration-[1000ms] ml-[12vw] text-left relative z-[99] font-bold tracking-[-0.6vw] group-hover:text-[#232025]" style={{ WebkitTextStroke: '1px #cecece', fontFamily: "'Audiowide', sans-serif" }}>
              ESCAPE DANGER
            </h1>
            <p className="absolute right-0 font-black text-[65px] opacity-0 transition-all duration-[1300ms] group-hover:opacity-100">
              <i className="ri-arrow-right-up-line"></i>
            </p>
          </div>

          <div className="feature-item relative flex items-start my-[4vh] cursor-pointer group" id="feature-4">
            <div className="hover-card absolute top-1/2 left-[25%] z-[1] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[250px] rounded-[20px] text-black p-[20px_25px] opacity-0 transition-all duration-[4000ms] uppercase bg-[rgb(255,34,119)]">
              <h2 className="text-[33px] font-light">FreezeFrame</h2>
              <h3 className="text-[15px] absolute top-[80%]">features: Process Emotions</h3>
            </div>
            <h5 className="font-['havelock_titling'] text-[15px]">04</h5>
            <h1 className="text-[4.9vw] transition-all duration-[1000ms] ml-[12vw] text-left relative z-[99] font-bold tracking-[-0.6vw] group-hover:text-[#232025]" style={{ WebkitTextStroke: '1px #cecece', fontFamily: "'Audiowide', sans-serif" }}>
              PROCESS EMOTIONS
            </h1>
            <p className="absolute right-0 font-black text-[65px] opacity-0 transition-all duration-[1300ms] group-hover:opacity-100">
              <i className="ri-arrow-right-up-line"></i>
            </p>
          </div>
        </div>
      </div>

      <div id="page3" className="bg-[#232025] py-[26vh] px-[10vw_0_0_5vw]">
        <div id="finish" className="opacity-0">
          <h1 className="text-[7vw] mb-[-3vh]">I USED THE</h1>
          <h1 className="text-[7vw] mb-[-3vh]">FreezeFrame</h1>
          <h1 className="text-[7vw] mb-[-3vh]">AND REGRET</h1>
          <h1 className="text-[7vw] mb-[-3vh]">NOTHING.</h1>
        </div>
        <div id="box" className="h-[30vh] mt-[15vh] flex relative border-t border-b border-[#cecece]">
          <div id="box1" className="w-[70vw] h-full border-r border-[#cecece] p-[5.5vh_5vw]">
            <h2 className="text-[4vw] mb-[-2vh]"> </h2>
            <h2 className="text-[4vw] mb-[-2vh]"> </h2>
          </div>
          <div id="box2" className="w-[30vw] h-full p-[7.5vh_4vw_5.5vh_5vw]">
            <h3 className="text-[1.5vw] mb-[1.3vh]">THIS IS WHAT "TIME</h3>
            <h3 className="text-[1.5vw] mb-[1.3vh]">CONTROL" SHOULD HAVE</h3>
            <h3 className="text-[1.5vw] mb-[1.3vh]">ALWAYS BEEN</h3>
          </div>
        </div>
      </div>

      <div
        id="page4"
        className="h-screen bg-[#232025] flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url(https://uploads-ssl.webflow.com/61defec4a021d8fe954c11bd/61defec4a021d83ede4c11f8_stars.gif)"
        }}
      >
        <h1 className="w-[55vw] text-[4vw] leading-[7vh]">
          Guilt-Free satisfaction for <span className="text-[5.2vw]" style={{ fontFamily: "'Dancing Script', cursive" }}>every moment</span>
        </h1>
        <div className="mt-[8vh] text-[1.05vw] text-left font-light">
          <h4>Yes, you can actually use FreezeFrame in</h4>
          <h4>any situation. Now you just have to figure out</h4>
          <h4>when you need it most.</h4>
        </div>
        <img
          id="rotating-img"
          src="/watch.jpeg"
          alt="FreezeFrame"
          className="mt-[20vh] w-32 h-32 object-cover rounded-full"
        />
      </div>

      <div id="slide-section" className="bg-[#232025]">
        <div id="slide-text-1" className="overflow-x-auto overflow-y-hidden cursor-default">
          <h1 className="text-[13vw] uppercase leading-[23vh] whitespace-nowrap">
            time<span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
          </h1>
        </div>
        <div id="slide-text-2" className="overflow-x-auto overflow-y-hidden cursor-default">
          <h1 className="text-[13vw] uppercase leading-[23vh] whitespace-nowrap translate-x-[-96%]">
            <span className="text-transparent [-webkit-text-stroke:1px_#adadad]">time</span>time
            <span className="text-transparent [-webkit-text-stroke:1px_#adadad]">time</span>time
            <span className="text-transparent [-webkit-text-stroke:1px_#adadad]">time</span>time
            <span className="text-transparent [-webkit-text-stroke:1px_#adadad]">time</span>
          </h1>
        </div>
        <div id="slide-text-1" className="overflow-x-auto overflow-y-hidden cursor-default">
          <h1 className="text-[13vw] uppercase leading-[23vh] whitespace-nowrap">
            time<span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #adadad' }}>time</span>time
          </h1>
        </div>
      </div>

      <div id="page6" className="h-screen bg-[#232025] text-center relative">
        <div className="absolute top-[19.5vh] left-[34.5vw]">
          <h1 className="text-[2.8vw]">Does your device</h1>
          <h1 className="text-[4vw] font-light mt-[-1vh]" style={{ fontFamily: "'Dancing Script', cursive" }}>freeze time?</h1>
        </div>
        <div id="option" className="absolute top-[55vh] flex w-full justify-around items-center">
          <div id="op1" className="w-[40vw] cursor-pointer relative h-[10vh]">
            <h3 className="text-[2.8vw] relative z-[999]">Yes</h3>
            <div className="gifimg h-[300px] w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] z-[9] transition-all duration-[3000ms] opacity-0">
              <img src="/watch.jpeg" alt="" className="h-full w-full object-cover object-center" />
            </div>
          </div>
          <div id="op2" className="w-[40vw] cursor-pointer relative h-[10vh]">
            <h3 className="text-[2.8vw] relative z-[999]">No</h3>
            <div className="gifimg h-[300px] w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] z-[9] transition-all duration-[3000ms] opacity-0">
              <img src="/watch.jpeg" alt="" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>

      <RealWorldImpact />

      <ProductFeaturesDetailed />

      <ProductModels />

      <FreezeFrameFooter />

      <style>{`
        #slide-text-1::-webkit-scrollbar,
        #slide-text-2::-webkit-scrollbar {
          display: none;
        }
        .perspective-600 {
          perspective: 600px;
        }
        [class*="rotate-x"] {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Index;
