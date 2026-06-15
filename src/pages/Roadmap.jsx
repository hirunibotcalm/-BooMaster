import React, { useState, useEffect } from "react";
import bg3Img from "../assets/bg3.png";
import rmTreeImg from "../assets/rm.png";
import phaseRoundImg from "../assets/phase.png";
import centerGhostImg from "../assets/ghosts/ghost.png";
import animal1 from "../assets/animal1.png";
import animal2 from "../assets/animal2.png";
import animal3 from "../assets/animal3.png";

const TOTAL_SLIDES = 5;

const phaseContent = {
  2: "Phase 1: Launching our digital presence, completing smart contracts, and establishing our core ghost community.",
  3: "Phase 2: Driving marketing campaigns, strategic launch collaborations, and initial decentralised exchange listings.",
  4: "Phase 3: Releasing interactive community features, specialised item drops, and ecosystem reward models.",
  5: "Phase 4: Scaling cross-network expansions, long-term token partnerships, and unlocking mysterious future upgrades.",
};

const boardPosition = {
  2: { top: "9%", left: "22%" },
  3: { top: "24.5%", left: "22.5%" },
  4: { top: "37%", left: "22%" },
  5: { top: "52.4%", left: "22%" },
};

export default function Roadmap() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s === TOTAL_SLIDES ? 1 : s + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (n) => {
    setPaused(true);
    setCurrentSlide(n);
    const t = setTimeout(() => setPaused(false), 12000);
    return () => clearTimeout(t);
  };

  /* ===== CHANGE: Dynamic positions for slides 1,2,3 ===== */

const isTreeCenterView = currentSlide <= 3;

const ghostPosition = isTreeCenterView
  ? "bottom-[18%] left-[45%]"
  : "bottom-[7%] left-[52%]";

const animal1Position = isTreeCenterView
  ? "bottom-[10%] left-[58%]"
  : "bottom-[6%] left-[63%]";

const animal2RightPosition = isTreeCenterView
  ? "bottom-[10%] left-[56%]"
  : "bottom-[10%] left-[60%]";

const animal2LeftPosition = isTreeCenterView
  ? "bottom-[10%] left-[34%]"
  : "bottom-[10%] left-[28%]";

const animal3Position = isTreeCenterView
  ? "bottom-[16%] left-[40%]"
  : "bottom-[6%] left-[28%]";

  return (
    <div className="w-full bg-black flex flex-col overflow-visible">
      <section className="relative w-full bg-black overflow-visible">
  <div className="relative w-full min-h-screen overflow-visible">
    <img
  src={bg3Img}
  alt=""
  className="absolute inset-0 w-full h-full object-cover object-bottom"
/>

          {/* ===== CHANGE: Tree wrapper container ===== */}
        <div className="absolute z-20 w-full h-full flex items-start justify-center">
          <div
            className="relative mt-[10vh] w-[45%] sm:w-[38%] md:w-[34%]"
          >
            <img
              src={rmTreeImg}
              alt="Wooden signpost"
              className="w-full h-auto object-contain"
            />

            {/* ===== NEW: PHASE LABELS ON TREE ===== */}

{/* ===== CHANGE: Phase 1 label attached to tree ===== */}
<div className="absolute top-[8%] left-[15%] z-20">
  <p className="font-serif font-bold text-white text-sm md:text-lg">
    PHASE 1
  </p>
</div>

{/* ===== CHANGE: Phase 2 label attached to tree ===== */}
<div className="absolute top-[22%] right-[15%] z-20">
  <p className="font-serif font-bold text-white text-sm md:text-lg">
    PHASE 2
  </p>
</div>

{/* ===== CHANGE: Phase 3 label attached to tree ===== */}
<div className="absolute top-[37%] right-[15%] z-20">
  <p className="font-serif font-bold text-white text-sm md:text-lg">
    PHASE 3
  </p>
</div>

{/* ===== CHANGE: Phase 4 label attached to tree ===== */}
<div className="absolute top-[52%] left-[15%] z-20">
  <p className="font-serif font-bold text-white text-sm md:text-lg">
    PHASE 4
  </p>
</div>

            {currentSlide > 1 && (
              <div
                key={currentSlide}
                className="absolute z-20 w-[52%] sm:w-[50%] md:w-[48%] aspect-square"
                style={{
                  top: boardPosition[currentSlide].top,
                  left: boardPosition[currentSlide].left,
                  transform: "translateX(-50%)",
                  animation: "floatMini 2.8s ease-in-out infinite",
                }}
              >
                <img src={phaseRoundImg} alt="Phase board" className="absolute inset-0 w-full h-full object-contain" />
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                  <p className="font-serif font-bold text-center leading-tight text-amber-950 text-[7px] sm:text-[9px] md:text-[11px]">
                    {phaseContent[currentSlide]}
                  </p>
                </div>
              </div>
            )}

            
          </div>
          {/* ===== CHANGE: End tree wrapper ===== */}
</div>

          {/* ===== CHANGE: Animal 1 position ===== */}
          <div
            className={`absolute ${animal1Position} w-[9%] z-40 pointer-events-none`}
          >
            <img src={animal1} alt="Animal 1" className="w-full h-auto" />
          </div>

          {/* ===== CHANGE: Ghost position ===== */}
          <div
            className={`absolute ${ghostPosition} w-[11%] z-20 pointer-events-none`}
            style={{ animation: "floatSlow 4s ease-in-out infinite" }}
          >            <img src={centerGhostImg} alt="Ghost" className="w-full h-auto" />
          </div>

        {/* Animal 2 */}
{/* ===== CHANGE: Right animal position ===== */}
        <div
          className={`absolute ${animal2RightPosition} w-[11%] z-20 pointer-events-none`}
        >  <img src={animal2} alt="Animal 2" className="w-full h-auto" />
        </div>

{/* Animal 3 (flipped version) */}
{/* ===== CHANGE: Left animal position ===== */}
        <div
          className={`absolute ${animal2LeftPosition} w-[11%] z-20 pointer-events-none`}
        >  <img
            src={animal2}
            alt="Animal 2 flipped"
            className="w-full h-auto scale-x-[-1]"
          />
        </div>

          

        {/* ===== CHANGE: Left animal position ===== */}
        <div
          className={`absolute ${animal2LeftPosition} w-[8%] z-20 pointer-events-none`}
        >            
        <img src={animal3} alt="Animal 3" className="w-full h-auto" />
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  currentSlide === n
                    ? "w-6 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${n}`}
              />
            ))}
          </div>
        </div>

      </section>

      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes floatMini {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}