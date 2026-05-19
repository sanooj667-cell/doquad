import SiteNav from '../components/SiteNav';

const Contact = ({ isDark, toggleDark }) => {
  return (
    <section className="relative min-h-screen bg-hero-bg dark:bg-black text-hero-ink dark:text-white/90 font-outfit transition-colors duration-500">
      <SiteNav isDark={isDark} toggleDark={toggleDark} />

      <main className="mx-auto max-w-5xl px-[clamp(20px,5vw,84px)] pt-40 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-hero-ink/60 dark:text-white/50">Start A Project</p>
        <h1 className="mt-3 text-[clamp(2.1rem,5vw,4.8rem)] font-bold leading-[0.96]">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-hero-ink/75 dark:text-white/70">
          Tell us your goals and timeline. We will get back with a clear plan and next steps.
        </p>

        <div className="mt-10 rounded-3xl border border-hero-ink/10 dark:border-white/10 bg-white/55 dark:bg-white/5 p-6 md:p-10 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-hero-ink/50 dark:text-white/40">Email</p>
              <a className="mt-2 block text-xl font-semibold hover:underline" href="mailto:hello@doquad.com">
                hello@doquad.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-hero-ink/50 dark:text-white/40">Phone</p>
              <a className="mt-2 block text-xl font-semibold hover:underline" href="tel:+919999999999">
                +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
