import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" }
    // Contact is usually just footer or mailto
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">Joshua Ng</Link>
        
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu color="white" size={32} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="menu-overlay"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <button className="close-btn" onClick={toggleMenu}>
                <X color="white" size={32} />
              </button>
              
              <ul className="menu-links">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link to={link.path} onClick={toggleMenu}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
