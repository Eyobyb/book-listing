import React from 'react';

const TitleDetail = ({ title }: { title: string }) => {
  return <h1 className="w-[150px] h-[23px] text-black text-base font-bold leading-none">{title}</h1>;
};
export default TitleDetail;
