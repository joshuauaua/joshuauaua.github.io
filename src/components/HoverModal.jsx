import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HoverModal.css';

const HoverModal = ({ text, description, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`hover-modal-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="hover-trigger">{text}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="hover-modal"
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.2 }}
          >
            <div className="hover-modal-content">
              {description}
            </div>
            <div className="hover-modal-arrow" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default HoverModal;
