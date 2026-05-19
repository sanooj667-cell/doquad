import SiteNav from '../components/SiteNav';

const steps = [
  {
    title: 'Discovery',
    description: 'We align on goals, audience, and success metrics before implementation starts.',
  },
  {
    title: 'Design',
    description: 'We map flows, shape interfaces, and validate UX direction with rapid iterations.',
  },
  {
    title: 'Development',
    description: 'We build production-ready features with a clean architecture and performance focus.',
  },
  {
    title: 'Launch & Support',
    description: 'We ship, measure impact, and continuously improve based on real-world feedback.',
  },
];

const Process = ({ isDark, toggleDark }) => {
  return (
    <section className="relative min-h-screen bg-hero-bg dark:bg-black text-hero-ink dark:text-white/90 font-outfit transition-colors duration-500">
      <SiteNav isDark={isDark} toggleDark={toggleDark} />

      <main className="mx-auto max-w-6xl px-[clamp(20px,5vw,84px)] pt-40 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-hero-ink/60 dark:text-white/50">How We Work</p>
        <h1 className="mt-3 text-[clamp(2.1rem,5vw,4.8rem)] font-bold leading-[0.96]">Our Process</h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-hero-ink/75 dark:text-white/70">
          A clear delivery framework to keep projects fast, transparent, and outcome-driven.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-hero-ink/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-6 md:p-8 backdrop-blur-sm"
            >
              <p className="text-sm font-bold text-hero-ink/50 dark:text-white/40">{`0${index + 1}`}</p>
              <h2 className="mt-2 text-2xl font-bold">{step.title}</h2>
              <p className="mt-3 text-hero-ink/75 dark:text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Process;
