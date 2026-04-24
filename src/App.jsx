import React, { useState, useEffect } from 'react';
import Hero from './page/Hero';
import Agenda from './page/Agenda';
import Trusted from './page/Trusted';
import Team from './page/Team';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <main className={`${isDark ? 'dark bg-black' : 'bg-hero-bg'} transition-colors duration-500`}>
      <Hero isDark={isDark} toggleDark={toggleDark} />
      <Agenda />
      <Trusted />
      <Team />
    </main>
  );
}

export default App;
