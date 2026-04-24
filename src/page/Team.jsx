import React, { useState, useEffect } from 'react';

const TeamMember = ({ member, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.12,
      y: (e.clientY - rect.top - rect.height / 2) * 0.12,
    });
  };

  return (
    <div
      className="relative group cursor-pointer opacity-0 animate-fade-up-item"
      style={{ 
        '--agenda-delay': `${400 + index * 120}ms`,
        perspective: '1500px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      <div 
        className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-white/40 dark:bg-neutral-900/60 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-white/40 dark:border-white/5 shadow-[0_10px_35px_rgba(5,103,57,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-hero-pill"
        style={{
          transform: isHovered 
            ? `rotateX(${mousePos.y * -1}deg) rotateY(${mousePos.x}deg) scale(1.02)` 
            : 'rotateX(0) rotateY(0) scale(1)',
        }}
      >
        {/* Background Large Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 select-none">
          <span className="text-[12rem] font-black tracking-tighter leading-none whitespace-nowrap rotate-[-15deg] text-hero-ink dark:text-white">
            {member.role.split(' ')[0]}
          </span>
        </div>

        {/* Developer Image */}
        <img 
          src={member.img} 
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.12]"
        />

        {/* Glossy Overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
          }}
        />

        {/* Bottom Shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-hero-bg dark:from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-[clamp(1.1rem,1.8vw,1.8rem)] font-bold text-hero-ink dark:text-white mb-0.5 group-hover:text-hero-pill transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-[clamp(0.7rem,0.8vw,0.85rem)] font-bold text-hero-ink/40 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
            {member.role}
          </p>
          <p className="text-[clamp(0.8rem,0.8vw,0.9rem)] text-hero-ink/60 dark:text-white/50 line-clamp-2 italic leading-relaxed translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: 'SANOOJ C', role: 'Fullstack Developer', img: '/SANOOJ.png', bio: 'Architecting digital ecosystems with modern fullstack technologies.' },
    { name: 'EHSAN C', role: 'Frontend Developer', img: '/ehsan.png', bio: 'Crafting pixel-perfect, immersive user interfaces and experiences.' },
    { name: 'FARHANA SHERIN', role: 'Python Developer', img: '/farhana1.png', bio: 'Building intelligence into backends with Python and robust logic.' },
    { name: 'RAMSHIYA CK', role: 'Fullstack Developer', img: '/ramshiya.png', bio: 'Solving complex problems through end-to-end fullstack development.' },
    { name: 'JAVID SHABIN', role: 'Mernstack Developer', img: '/jabid.png', bio: 'Expertise in the MERN stack for high-performance web applications.' },
    { name: 'MISBAH', role: 'Marketing Manager', img: '/misbah.png', bio: 'Driving growth through innovative digital strategies and outreach.' },
  ];

  return (
    <section
      id="team"
      className="relative min-h-screen py-32 bg-hero-bg dark:bg-[#0a0a0a] text-hero-ink dark:text-white font-outfit selection:bg-hero-pill selection:text-hero-ink transition-colors duration-500 snap-start overflow-hidden border-t border-hero-ink/5 dark:border-white/5"
    >
      {/* Background Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-hero-pill/20 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-white/40 dark:bg-hero-ink/5 rounded-full blur-[100px] pointer-events-none animate-float-mini" />

      <div className="mx-auto px-[clamp(24px,5.3vw,102px)] relative z-10 max-w-7xl">
        <header className="mb-24 text-left max-w-2xl">
          <p className="m-0 italic font-light tracking-[0.1em] leading-none text-hero-ink/40 dark:text-hero-pill/60 opacity-0 animate-fade-up-kicker">MEET OUR</p>
          <h2 className="mt-4 text-[clamp(2.5rem,5.8vw,5.2rem)] font-bold tracking-[-0.03em] leading-none uppercase opacity-0 animate-fade-up-title transition-colors duration-500">DEVELOPERS</h2>
          <div className="mt-8 h-px w-24 bg-hero-ink dark:bg-hero-pill opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }} />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
