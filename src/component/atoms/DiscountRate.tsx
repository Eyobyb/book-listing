import React from 'react';

const DiscountRate = ({ discountRate }: { discountRate: number }) => {
  return <div className="text-rose-600 text-sm font-bold leading-[14px]">{discountRate}%</div>;
};

export default DiscountRate;
