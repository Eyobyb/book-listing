import React from 'react';
import LeftIconButton from '../molecules/LeftIconButton';

const DetailHeader = () => {
  return (
    <div className='fixed top-0 w-full z-20 mb-12'>
      <div className="flex  relative h-12 w-full justify-center items-center bg-white">
        <div className="absolute left-3">
          <LeftIconButton />
        </div>
        {'{title of the book }'}
      </div>
    </div>
  );
};

export default DetailHeader;
