'use client'
import React, { useEffect, useRef } from 'react';

interface LazyBackgroundProps {
  children: React.ReactNode;
  className: string;
  imageUrl: string;
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({ children, className, imageUrl }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.backgroundImage =`linear-gradient(rgba(17, 17, 17), rgba(77, 73, 73, 0.5)),url("${imageUrl}"))`;
          observer.unobserve(entry.target);
        }
      });
    });

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, [imageUrl]);

  return (
    <div ref={wrapperRef} className={`${className} lazy-background`} style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      {children}
    </div>
  );
};

export default LazyBackground;
