import React from 'react';

export const Money = ({ amount }: { amount: string }) => {
  return <div className="text-zinc-950 text-base font-bold leading-none">{amount}</div>;
};

export default Money;
