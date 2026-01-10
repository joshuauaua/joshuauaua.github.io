import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import BubbleMenu from './components/BubbleMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const menuItems = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#FFD60A', textColor: '#ffffff' }
  },
  // {
  //   label: 'blog',
  //   href: '/blog',
  //   ariaLabel: 'Blog',
  //   rotation: 8,
  //   hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  // },
  {
    label: 'contact',
    href: '/about#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="app-wrapper">
        <BubbleMenu
          logo={<img src="/assets/joshuanglogo.svg" alt="Joshua Ng Logo" className="nav-logo-img" />}
          items={menuItems}
          menuAriaLabel="Toggle navigation"
          menuBg="#000000"
          menuContentColor="#ffffff"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
