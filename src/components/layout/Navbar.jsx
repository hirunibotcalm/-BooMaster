import { useState, useEffect } from "react";

const ghostFrames = ["👻", "🫧", "👻", "💨"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [ghostFrame, setGhostFrame] = useState(0);
  const [ghostFloat, setGhostFloat] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [logoColorIdx, setLogoColorIdx] = useState(0);

  const logoColors = [
    "#a855f7", // purple-500
    "#ec4899", // pink-500
    "#6366f1", // indigo-500
    "#8b5cf6", // violet-500
    "#c084fc", // purple-400
  ];

  // Ghost animation: cycle emoji frames
  useEffect(() => {
    const id = setInterval(() => {
      setGhostFrame((f) => (f + 1) % ghostFrames.length);
      setGhostFloat((v) => !v);
    }, 500);
    return () => clearInterval(id);
  }, []);

  // Logo color cycling
  useEffect(() => {
    const id = setInterval(() => {
      setLogoColorIdx((i) => (i + 1) % logoColors.length);
    }, 800);
    return () => clearInterval(id);
  }, []);

  const links = ["Home", "About", "Roadmap", "FAQ"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500&display=swap');

        .boo-nav {
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 68px;
          background: linear-gradient(90deg, #0a0010 0%, #0d0020 50%, #0a0010 100%);
          border-bottom: 1px solid rgba(168,85,247,0.18);
          position: relative;
          overflow: visible;
          box-shadow: 0 2px 32px 0 rgba(168,85,247,0.10);
        }

        /* glowing scanline effect */
        .boo-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(168,85,247,0.025) 3px,
            rgba(168,85,247,0.025) 4px
          );
          pointer-events: none;
        }

        /* Logo */
        .boo-logo {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: 1.35rem;
          letter-spacing: 0.04em;
          transition: color 0.6s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          text-shadow: 0 0 18px currentColor, 0 0 40px currentColor;
          user-select: none;
          cursor: pointer;
        }

        /* Ghost wrapper for float + wiggle */
        .boo-ghost {
          display: inline-block;
          font-size: 1.6rem;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
          filter: drop-shadow(0 0 8px rgba(168,85,247,0.8));
        }
        .boo-ghost.float-up   { transform: translateY(-5px) rotate(-8deg) scale(1.12); }
        .boo-ghost.float-down { transform: translateY(3px)  rotate( 6deg) scale(0.95); }

        /* Nav links */
        .boo-links {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .boo-link {
          position: relative;
          font-size: 0.92rem;
          font-weight: 500;
          color: #c4b5fd;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 8px;
          letter-spacing: 0.02em;
          transition: color 0.2s, background 0.2s;
          cursor: pointer;
        }

        .boo-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 14px;
          right: 14px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
        }

        .boo-link:hover {
          color: #fff;
          background: rgba(168,85,247,0.10);
        }

        .boo-link:hover::after {
          transform: scaleX(1);
        }

        /* ACTIVE state */
        .boo-link.active {
          color: #fff;
          background: rgba(168,85,247,0.14);
        }
        .boo-link.active::after {
          transform: scaleX(1);
          background: linear-gradient(90deg, #a855f7, #ec4899, #6366f1);
          height: 2.5px;
          box-shadow: 0 0 8px rgba(168,85,247,0.8);
        }

        /* Buy Boo button */
        .boo-btn {
          position: relative;
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          cursor: pointer;
          overflow: hidden;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%);
          box-shadow: 0 0 18px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.2);
          transition: transform 0.18s, box-shadow 0.18s;
          white-space: nowrap;
        }

        /* shimmer sweep */
        .boo-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -70%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.35) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          animation: shimmer 2.4s infinite;
        }

        @keyframes shimmer {
          0%   { left: -70%; }
          100% { left: 130%; }
        }

        /* pulse ring */
        .boo-btn::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50px;
          background: transparent;
          border: 2px solid rgba(168,85,247,0.6);
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0%   { opacity: 1; transform: scale(1); }
          70%  { opacity: 0; transform: scale(1.14); }
          100% { opacity: 0; transform: scale(1.14); }
        }

        .boo-btn:hover {
          transform: scale(1.07) translateY(-1px);
          box-shadow: 0 0 32px rgba(168,85,247,0.8), 0 0 60px rgba(236,72,153,0.35);
          background: linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #db2777 100%);
        }

        .boo-btn:active {
          transform: scale(0.97);
        }

        /* ghost text in button */
        .boo-btn-ghost {
          margin-right: 5px;
          font-size: 1rem;
          display: inline-block;
          animation: btn-ghost-bounce 1.2s ease-in-out infinite;
        }

        @keyframes btn-ghost-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px) scale(1.1); }
        }

        /* mobile hide links */
        @media (max-width: 640px) {
          .boo-links { display: none; }
          .boo-logo  { font-size: 1.1rem; }
        }
      `}</style>

      <nav className="boo-nav">
        {/* Logo */}
        <div
          className="boo-logo"
          style={{ color: logoColors[logoColorIdx] }}
        >
          <span
            className={`boo-ghost ${ghostFloat ? "float-up" : "float-down"}`}
          >
            {ghostFrames[ghostFrame]}
          </span>
          BooMaster
        </div>

        {/* Links */}
        <div className="boo-links">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={`boo-link${activeLink === link ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Button */}
        <button
          className="boo-btn"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          <span className="boo-btn-ghost">👻</span>
          BUY BOO
        </button>
      </nav>
    </>
  );
}