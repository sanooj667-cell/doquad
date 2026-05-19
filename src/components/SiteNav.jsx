import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
    isActive
      ? 'bg-hero-pill text-hero-ink'
      : 'text-hero-ink/80 dark:text-white/70 hover:bg-white/50 dark:hover:bg-white/10'
  }`;

const SiteNav = ({ isDark, toggleDark }) => {
  return (
    <header className="absolute top-6 left-[clamp(16px,4vw,60px)] right-[clamp(16px,4vw,60px)] z-20">
      <nav className="backdrop-blur-md bg-white/45 dark:bg-black/35 border border-white/55 dark:border-white/10 rounded-full px-3 py-2 shadow-[0_8px_24px_rgba(5,103,57,0.09)] flex items-center justify-between gap-3 max-[900px]:rounded-2xl max-[900px]:px-4 max-[900px]:py-3">
        <Link to="/" className="font-bold tracking-wide text-hero-ink dark:text-white">
          doquad
        </Link>
        <div className="flex items-center gap-2 max-[700px]:hidden">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <a
            href="/#agenda"
            className="px-4 py-2 rounded-full text-sm font-semibold text-hero-ink/80 dark:text-white/70 hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300"
          >
            Agenda
          </a>
          <a
            href="/#team"
            className="px-4 py-2 rounded-full text-sm font-semibold text-hero-ink/80 dark:text-white/70 hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300"
          >
            Team
          </a>
          <NavLink to="/process" className={navLinkClass}>
            Process
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        <button
          type="button"
          onClick={toggleDark}
          className="px-4 py-2 rounded-full text-sm font-bold bg-hero-pill text-hero-ink hover:brightness-105 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
};

export default SiteNav;
