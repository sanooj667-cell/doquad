import React, { useState, useEffect } from 'react';

const Hero = ({ isDark, toggleDark }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({
        x: (clientX / window.innerWidth - 0.5) * 20,
        y: (clientY / window.innerHeight - 0.5) * 20,
      });

      // Magnetic Button logic
      const btn = document.getElementById('hero-cta');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        const dist = Math.hypot(clientX - btnX, clientY - btnY);

        if (dist < 150) {
          setBtnOffset({
            x: (clientX - btnX) * 0.25,
            y: (clientY - btnY) * 0.25,
          });
        } else {
          setBtnOffset({ x: 0, y: 0 });
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = (factor) => ({
    transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-hero-bg dark:bg-black text-hero-ink dark:text-white/90 font-outfit selection:bg-hero-ink selection:text-hero-bg transition-colors duration-500 snap-start"
    >
      <header className="absolute top-[4vh] left-[clamp(24px,5.3vw,102px)] right-[clamp(24px,5.3vw,102px)] z-[3] flex items-center justify-between opacity-0 animate-fade-down max-[900px]:top-5 max-[900px]:left-4 max-[900px]:right-4 max-[900px]:flex-wrap max-[900px]:gap-y-3.5">
        <p className="m-0 text-[clamp(1.1rem,1.4vw,1.6rem)] font-bold tracking-[0.004em]">doquad.in</p>
        <nav className="flex items-center gap-[clamp(14px,2.5vw,48px)] max-[900px]:w-full max-[900px]:justify-between max-[900px]:gap-2" aria-label="Main Navigation">
          <a href="#hero" className="text-hero-ink dark:text-black no-underline text-[clamp(0.85rem,1.1vw,1.1rem)] font-bold leading-none transition-all duration-200 hover:-translate-y-0.5 hover:opacity-[0.82] min-w-[clamp(60px,5vw,110px)] px-[clamp(12px,1vw,20px)] py-[clamp(6px,0.4vw,8px)] rounded-full bg-hero-pill text-center max-[900px]:text-[0.9rem] max-[900px]:min-w-[68px] max-[900px]:px-[12px] max-[900px]:py-[6px]">
            Home
          </a>
          <a href="#agenda" className="text-hero-ink dark:text-white/70 no-underline text-[clamp(0.85rem,1.12vw,1.12rem)] font-normal leading-none transition-all duration-200 hover:-translate-y-0.5 hover:opacity-[0.82] max-[900px]:text-[0.9rem]">
            About
          </a>
          <a href="#agenda" className="text-hero-ink dark:text-white/70 no-underline text-[clamp(0.85rem,1.12vw,1.12rem)] font-normal leading-none transition-all duration-200 hover:-translate-y-0.5 hover:opacity-[0.82] max-[900px]:text-[0.9rem]">
            Project
          </a>
          <a href="#agenda" className="text-hero-ink dark:text-white/70 no-underline text-[clamp(0.85rem,1.12vw,1.12rem)] font-normal leading-none transition-all duration-200 hover:-translate-y-0.5 hover:opacity-[0.82] max-[900px]:text-[0.9rem]">
            Contact
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleDark}
            className="w-10 h-10 rounded-full bg-hero-pill/20 dark:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden relative"
            aria-label="Toggle dark mode"
          >
            <div className={`transition-transform duration-500 absolute inset-0 flex items-center justify-center ${isDark ? '-translate-y-full' : 'translate-y-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hero-ink"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </div>
            <div className={`transition-transform duration-500 absolute inset-0 flex items-center justify-center ${isDark ? 'translate-y-0' : 'translate-y-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M22 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>
            </div>
          </button>
        </nav>
      </header>

      {/* Background Orbs */}
      <span className="absolute rounded-full will-change-transform top-[14%] left-[7%] w-[clamp(230px,22vw,424px)] h-[clamp(230px,22vw,424px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] dark:from-hero-ink/40 dark:to-[#056739]/50 animate-float-a [animation-delay:-1.1s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.5) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform top-[39%] left-[3%] w-[clamp(110px,11vw,210px)] h-[clamp(110px,11vw,210px)] bg-hero-pill dark:bg-white/5 opacity-[0.58] animate-float-b [animation-delay:-3.2s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(0.8) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform top-[14.2%] left-[27.4%] w-[clamp(44px,4.6vw,89px)] h-[clamp(44px,4.6vw,89px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] dark:from-hero-pill/20 dark:to-hero-pill/40 animate-float-c [animation-delay:-2.1s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(2.2) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform top-[29%] -right-[3%] w-[clamp(320px,33vw,636px)] h-[clamp(320px,33vw,636px)] bg-hero-orb dark:bg-hero-ink/30 opacity-60 animate-float-a-slow [animation-delay:-4.1s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.1) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform top-[25%] right-[2.5%] w-[clamp(86px,8.85vw,170px)] h-[clamp(86px,8.85vw,170px)] bg-hero-orb dark:bg-hero-ink/20 opacity-[0.42] animate-float-b-med [animation-delay:-2.8s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.8) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform bottom-[8.7%] left-[20.4%] w-[clamp(70px,7.2vw,138px)] h-[clamp(70px,7.2vw,138px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] animate-float-c-med [animation-delay:-1.9s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.4) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform bottom-[10.6%] right-[24%] w-[clamp(56px,5.85vw,112px)] h-[clamp(56px,5.85vw,112px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] animate-float-a-fast [animation-delay:-5.3s] max-[900px]:opacity-[0.32] max-[900px]:scale-[0.58] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(2.5) }} aria-hidden="true" />

      <main className="absolute top-[51%] left-[50%] z-[2] flex flex-col items-center -translate-x-1/2 -translate-y-[44%] text-center max-[900px]:top-[56%] max-[900px]:w-[92%]">
        <p className="m-0 text-[clamp(1.5rem,3.2vw,4rem)] italic font-light tracking-[0.01em] leading-[1.05] opacity-0 animate-fade-up-kicker">SOFTWARE</p>
        <h1 className="m-0 text-[clamp(2.2rem,5.5vw,6.2rem)] font-bold tracking-[-0.01em] leading-[0.95] opacity-0 animate-fade-up-title max-[900px]:leading-none">DEVELOPMENT</h1>
        <p className="mt-[clamp(14px,2.2vh,28px)] text-[clamp(1rem,1.8vw,2.2rem)] font-normal leading-[1.2] opacity-0 animate-fade-up-subtitle text-hero-ink/80 dark:text-white/60">Strategies for Growth</p>
        <a
          href="#agenda"
          id="hero-cta"
          className="mt-[clamp(20px,6vh,64px)] w-[clamp(140px,14vw,240px)] h-[clamp(44px,6vh,64px)] inline-flex items-center justify-center no-underline border-0 rounded-full bg-hero-pill text-hero-ink font-inherit text-[clamp(0.9rem,1.4vw,1.6rem)] font-bold cursor-pointer shadow-[0_6px_14px_rgba(5,103,57,0.06)] opacity-0 animate-fade-up-button transition-all duration-[260ms] hover:saturate-[1.02]"
          style={{
            transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
            transition: btnOffset.x === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none'
          }}
          aria-label="Go to agenda section"
        >
          Read More
        </a>
      </main>

      <footer className="absolute left-[clamp(24px,5.3vw,102px)] right-[clamp(24px,5.3vw,102px)] bottom-[clamp(20px,5.2vh,74px)] z-[2] flex items-end justify-between opacity-0 animate-fade-up-footer max-[900px]:left-4 max-[900px]:right-4 max-[900px]:bottom-[18px]">
        <p className="m-0 text-[clamp(0.8rem,1.1vw,1rem)] font-normal leading-tight opacity-70">
          Presented By :
          <span className="block font-bold text-hero-ink dark:text-white/80">doquad</span>
        </p>
      </footer>
    </section>
  );
};

export default Hero;
