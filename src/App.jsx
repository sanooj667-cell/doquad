import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Hero from './page/Hero';
import Agenda from './page/Agenda';
import Trusted from './page/Trusted';
import Team from './page/Team';
import Process from './page/Process';
import Contact from './page/Contact';

const HomePage = ({ isDark, toggleDark }) => (
  <>
    <Hero isDark={isDark} toggleDark={toggleDark} />
    <Agenda />
    <Trusted />
    <Team />
  </>
);

function App() {
  const [isDark, setIsDark] = useState(true);

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
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleDark={toggleDark} />} />
        <Route path="/process" element={<Process isDark={isDark} toggleDark={toggleDark} />} />
        <Route path="/contact" element={<Contact isDark={isDark} toggleDark={toggleDark} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
