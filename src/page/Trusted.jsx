import React from 'react';

const Trusted = () => {
  const partners = [
    { name: 'TechFlow' },
    { name: 'Quantum' },
    { name: 'Nexus' },
    { name: 'Aurora' },
    { name: 'Stellar' },
    { name: 'Vertex' },
    { name: 'Enigma' },
    { name: 'Zenith' },
  ];

  return (
    <section className="py-24 bg-hero-bg dark:bg-black transition-colors duration-500 overflow-hidden border-t border-hero-ink/5 dark:border-white/5">
      <div className="mx-auto px-[clamp(24px,5.3vw,102px)] max-w-7xl">
        <h2 className="text-center font-bold tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.5rem)] text-hero-ink/40 dark:text-white/30 uppercase mb-16 opacity-0 animate-fade-up-title">
          THEY TRUST US
        </h2>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center px-10 py-6 rounded-3xl bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-hero-pill cursor-default"
              >
                <span className="text-[clamp(1.1rem,1.8vw,1.8rem)] font-bold tracking-tighter text-hero-ink dark:text-white/80 opacity-60 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center px-10 py-6 rounded-3xl bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-hero-pill cursor-default"
              >
                <span className="text-[clamp(1.1rem,1.8vw,1.8rem)] font-bold tracking-tighter text-hero-ink dark:text-white/80 opacity-60 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fades for Smoothness */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-hero-bg dark:from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-hero-bg dark:from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Trusted;
