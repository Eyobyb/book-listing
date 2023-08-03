import React from 'react';
import Avatar from '../atoms/Avatar';

function BooklistingHeader() {
  return (
    <div className="w-full flex justify-center  relative h-12 items-center max-w-[748px]">
      <h2 className="text-neutral-800 text-lg font-bold leading-[18px]">Books</h2>
      <div className="absolute right-[33px] md:right-[13px]">
        <Avatar url="" />
      </div>
    </div>
  );
}

export default BooklistingHeader;
