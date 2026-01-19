import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import ShoppingBag from "../header/ShoppingBag";

const FreezeFrameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flag, setFlag] = useState(0);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const { cartItems, updateQuantity, totalItems } = useCart();

  const navItems = [
    { name: "FEATURES", href: "#features-section" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "PRODUCTS", href: "#product-models" }
  ];

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    const locoScroll = (window as any).locoScroll;
    if (element && locoScroll) {
      locoScroll.scrollTo(element, { duration: 1000, easing: [0.25, 0.0, 0.35, 1.0] });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <div id="prt2" className="flex items-center gap-4">
          <button
            className="relative p-2 text-[#cecece] hover:text-white transition-colors duration-200"
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-400 text-black text-[0.6rem] font-bold rounded-full w-5 h-5 flex items-center justify-center pointer-events-none">
                {totalItems}
              </span>
            )}
          </button>
          <div
            id="menu"
            className="w-[2vw] h-[1.6vh] flex flex-col items-start justify-between cursor-pointer"
            onClick={() => {
              const newFlag = flag === 0 ? 1 : 0;
              setFlag(newFlag);
              setIsMenuOpen(newFlag === 1);
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
        className="bg-[#cecece] w-full h-screen fixed z-[100] text-[#2b2b2b] border-t border-black transition-all duration-[1800ms] overflow-hidden isolate"
        style={{
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
          transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
          willChange: "transform"
        }}
      >
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0 right-0 h-[10vh] bg-[#cecece] border-b border-[#2b2b2b]/20 flex items-center justify-between px-[5.8vw] z-20">
            <h1
              className="text-[1.1vw] tracking-[0.5vw] uppercase font-light"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              FreezeFrame
            </h1>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setFlag(0);
              }}
              className="text-[#2b2b2b] hover:opacity-70 transition-opacity text-[2vw] font-light"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <h1
            className="text-[13.5vw] mt-[15.7vh] ml-[4.8vw] tracking-[-1vw] uppercase absolute pointer-events-none opacity-10"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Menu
          </h1>
          
          <div className="absolute top-[15.7vh] left-[4.8vw] z-10">
            <p className="text-[1.2vw] text-[#2b2b2b]/60 mb-[4vh] font-light">
              A revolutionary device that stops time.
            </p>
            <div id="opt" className="flex flex-col gap-[2.2vh] mt-[5vh]">
              {navItems.map((item) => (
                <h4
                  key={item.name}
                  className="text-[1.8vw] font-medium cursor-pointer relative z-10 hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.name}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
      />
    </>
  );
};

export default FreezeFrameNavigation;
