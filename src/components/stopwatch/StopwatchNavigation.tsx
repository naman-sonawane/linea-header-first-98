import { useState, useEffect } from "react";

const FreezeFrameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flag, setFlag] = useState(0);

  const navItems = [
    { name: "FEATURES", href: "#features-section" },
    { name: "TESTIMONIALS", href: "#page3" },
    { name: "PRODUCTS", href: "#page7" }
  ];

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    const locoScroll = (window as any).locoScroll;
    if (element && locoScroll) {
      locoScroll.scrollTo(element);
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setFlag(0);
  };

  return (
    <>
      <div
        id="nav"
        className="flex items-center justify-between fixed top-0 left-0 right-0 z-[11] w-full px-[5.8vw] py-[7vh] text-[#cecece] transition-all duration-[5000ms] backdrop-blur-xl bg-[#232025]/40 border-b border-white/10"
        style={{ 
          transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(35, 32, 37, 0.4)",
          position: "fixed",
          top: 0
        }}
      >
        <h1
          className="text-[1.1vw] tracking-[0.5vw] uppercase cursor-pointer font-light"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
          onClick={() => {
            const locoScroll = (window as any).locoScroll;
            if (locoScroll) {
              locoScroll.scrollTo(0);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          FreezeFrame
        </h1>
        <div id="prt2" className="flex items-center">
          <div
            id="menu"
            className="w-[2vw] h-[1.6vh] flex flex-col items-start justify-between cursor-pointer"
            onClick={() => {
              setFlag(flag === 0 ? 1 : 0);
              setIsMenuOpen(flag === 0);
            }}
          >
            <div
              id="line1"
              className="rounded-[10px] h-[0.3vh] w-full bg-[#cecece] transition-all duration-[2000ms]"
              style={{
                transformOrigin: "0 100%",
                transform: flag === 1 ? "rotate(40deg)" : "rotate(0deg)",
                width: flag === 1 ? "70%" : "100%",
                backgroundColor: flag === 1 ? "#232025" : "#cecece",
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)"
              }}
            />
            <div
              id="line2"
              className="rounded-[10px] h-[0.3vh] bg-[#cecece] transition-all duration-[2000ms]"
              style={{
                width: "70%",
                transformOrigin: "30% 50%",
                transform: flag === 1 ? "rotate(-40deg)" : "rotate(0deg)",
                backgroundColor: flag === 1 ? "#232025" : "#cecece",
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)"
              }}
            />
          </div>
        </div>
      </div>

      <div
        id="topmenu"
        className="bg-[#cecece] w-full h-screen fixed z-[10] text-[#2b2b2b] border-t border-black transition-all duration-[1800ms]"
        style={{
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
          transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)"
        }}
      >
        <h1
          className="text-[13.5vw] mt-[15.7vh] ml-[4.8vw] tracking-[-1vw] uppercase"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Menu
        </h1>
        <div id="opt" className="h-[45vh] w-[45vw] ml-[5.5vw] mt-[5vh] flex flex-col flex-wrap">
          {navItems.map((item) => (
            <h4
              key={item.name}
              className="text-[1.8vw] mb-[2.2vh] font-medium cursor-pointer w-[15vw]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
              onClick={() => scrollTo(item.href)}
            >
              {item.name}
            </h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreezeFrameNavigation;
