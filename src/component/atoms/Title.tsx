import React from 'react';

const Title = ({ title }: { title: string }) => {
  return <div className="w-[156px] h-3.5 text-neutral-800 text-sm font-medium leading-[14px]">{title}</div>;
};

export default Title;
