import React from 'react';

const Circle = ({ color, opacity }: { color: string; opacity: number }) => {
  return <div style={{ backgroundColor: color, opacity }} className="rounded-full w-[7px] h-[7px]"></div>;
};

export default Circle;
