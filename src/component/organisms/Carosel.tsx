import React from 'react';
import CaroselIndicator from '../molecules/CaroselIndicator';

const Carosel = () => {
  return (
    <div className="w-full h-[450px] bg-[#EDEEF3] relative flex justify-center">
      <div className='absolute bottom-6'>
        <CaroselIndicator currentlyOn={2} />
      </div>
    </div>
  );
};

export default Carosel;
