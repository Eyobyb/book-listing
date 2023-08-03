import React, { useRef, useEffect, useState } from 'react';

const UseScrollDetection = ({
  scrollThreshold = 80,
  onThresholdReached,
}: {
  scrollThreshold: number;
  onThresholdReached: () => void;
}) => {
  const divRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrollPercentage >= 80) {
      if (typeof onThresholdReached === 'function') {
        onThresholdReached();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { divRef };
};

export default UseScrollDetection;
