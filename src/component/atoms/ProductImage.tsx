import React from 'react';

const ProductImage = ({ coverImage }: { coverImage: string }) => {
  return (
    <div
      className="w-[187px] h-[187px] overflow-hidden bg-cover bg-[#EDEEF3] "
      style={{ backgroundImage: `url(${coverImage})` }}></div>
  );
};

export default ProductImage;
