import { useState } from 'react';

export default function LogoWithFallback({ src, alt, className, fallbackText }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span 
        className={className} 
        style={{ 
          fontFamily: 'var(--font-title)', 
          fontWeight: 700, 
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          filter: 'none', // Override potential invert filter
          color: 'var(--text-main)',
          whiteSpace: 'nowrap'
        }}
      >
        {fallbackText}
      </span>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => {
        console.warn("Logo load failed, switching to text.");
        setImgError(true);
      }} 
    />
  );
}
