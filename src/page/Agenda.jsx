import React, { useState, useEffect } from 'react';

const leftAgendaItems = [
  { title: 'website development', index: '01' },
  { title: 'App development', index: '02' },
  { title: 'Software development', index: '03' },
];

const rightAgendaItems = [
  { title: 'portfolio', index: '04' },
  { title: 'e-commerce', index: '05' },
  { title: 'customizable software', index: '06' },
];

const Agenda = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = (factor) => ({
    transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
  });

  return (
    <section
      id="agenda"
      className="relative min-h-screen overflow-hidden bg-hero-bg dark:bg-black text-hero-ink dark:text-white/90 font-outfit selection:bg-hero-ink selection:text-hero-bg transition-colors duration-500 snap-start max-[900px]:min-h-[100svh]"
    >

      <span className="absolute rounded-full will-change-transform top-[22.7%] left-[6.4%] w-[clamp(260px,28vw,540px)] h-[clamp(260px,28vw,540px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] dark:from-hero-ink/30 dark:to-hero-ink/50 animate-float-a-xl opacity-[0.94] max-[900px]:opacity-[0.28] max-[900px]:scale-[0.55] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.2) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform top-[18.7%] left-[23.8%] w-[clamp(116px,10.7vw,206px)] h-[clamp(116px,10.7vw,206px)] bg-hero-orb dark:bg-white/5 opacity-[0.58] animate-float-b-xl max-[900px]:opacity-[0.28] max-[900px]:scale-[0.55] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(0.7) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform left-[3.2%] bottom-[21.5%] w-[clamp(68px,6.8vw,130px)] h-[clamp(68px,6.8vw,130px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] animate-float-c-lg max-[900px]:opacity-[0.28] max-[900px]:scale-[0.55] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(2.1) }} aria-hidden="true" />
      <span className="absolute rounded-full will-change-transform right-[5%] top-[16.7%] w-[clamp(94px,9.2vw,176px)] h-[clamp(94px,9.2vw,176px)] bg-gradient-to-r from-[#b7ddbe] to-[#85b68a] animate-float-b-lg max-[900px]:opacity-[0.28] max-[900px]:scale-[0.55] max-[900px]:animate-none transition-all duration-700 hover:duration-[3000ms] ease-out cursor-default" style={{ ...parallaxStyle(1.8) }} aria-hidden="true" />

      <main className="absolute top-[20%] right-[clamp(24px,6vw,120px)] z-[4] w-[min(70vw,1100px)] max-[1024px]:w-[min(75vw,900px)] max-[1024px]:right-[20px] max-[900px]:relative max-[900px]:top-auto max-[900px]:right-auto max-[900px]:w-auto max-[900px]:px-4 max-[900px]:pt-[100px]">
        <div className="flex flex-col items-center">
          <p className="m-0 text-center text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-light tracking-[0.06em] leading-none opacity-0 animate-fade-up-kicker text-hero-ink/70 dark:text-white/50">OUR</p>
          <h1 className="mt-1 text-center text-[clamp(1.8rem,3.8vw,3.8rem)] font-bold tracking-[-0.02em] leading-[0.95] opacity-0 animate-fade-up-title uppercase">AGENDA</h1>
        </div>

        <div className="mt-[clamp(30px,6vh,60px)] grid grid-cols-2 gap-x-[clamp(30px,5vw,80px)] gap-y-6 max-[900px]:grid-cols-1 max-[900px]:mt-10">
          <ul className="m-0 p-0 list-none flex flex-col gap-6" aria-label="Left agenda items">
            {leftAgendaItems.map((item, index) => (
              <li
                className="flex items-center justify-end gap-5 group cursor-pointer opacity-0 animate-fade-up-item max-[900px]:justify-between p-1.5 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                key={item.index}
                style={{ '--agenda-delay': `${400 + index * 100}ms` }}
              >
                <span className="text-[clamp(0.95rem,1.4vw,1.4rem)] font-medium leading-tight text-hero-ink dark:text-white/80 group-hover:translate-x-[-6px] transition-transform duration-300">{item.title}</span>
                <span className="w-[clamp(40px,3vw,56px)] h-[clamp(40px,3vw,56px)] shrink-0 rounded-full bg-gradient-to-br from-[#b7ddbe] to-[#85b68a] dark:from-hero-pill/20 dark:to-hero-pill group-hover:dark:from-hero-pill group-hover:dark:to-white inline-flex items-center justify-center text-[clamp(0.95rem,1.3vw,1.3rem)] font-bold italic text-hero-ink dark:text-black shadow-sm group-hover:animate-bubble-wobble animate-pulse-subtle transition-all duration-300">{item.index}</span>
              </li>
            ))}
          </ul>

          <ul className="m-0 p-0 list-none flex flex-col gap-6" aria-label="Right agenda items">
            {rightAgendaItems.map((item, index) => (
              <li
                className="flex items-center justify-start flex-row-reverse gap-5 group cursor-pointer opacity-0 animate-fade-up-item max-[900px]:flex-row max-[900px]:justify-between p-1.5 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                key={item.index}
                style={{ '--agenda-delay': `${600 + index * 100}ms` }}
              >
                <span className="text-[clamp(0.95rem,1.4vw,1.4rem)] font-medium leading-tight text-hero-ink dark:text-white/80 group-hover:translate-x-[6px] transition-transform duration-300">{item.title}</span>
                <span className="w-[clamp(40px,3vw,56px)] h-[clamp(40px,3vw,56px)] shrink-0 rounded-full bg-gradient-to-br from-[#b7ddbe] to-[#85b68a] dark:from-hero-pill/20 dark:to-hero-pill group-hover:dark:from-hero-pill group-hover:dark:to-white inline-flex items-center justify-center text-[clamp(0.95rem,1.3vw,1.3rem)] font-bold italic text-hero-ink dark:text-black shadow-sm group-hover:animate-bubble-wobble animate-pulse-subtle transition-all duration-300">{item.index}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

    </section>
  );
};

export default Agenda;
