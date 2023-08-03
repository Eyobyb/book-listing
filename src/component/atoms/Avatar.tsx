import Image from 'next/image';
import React from 'react';
import ImageIcon from './ImageIcon';

const Avatar = ({ url }: { url: string }) => {
  return (
    <div className="w-[32px] h-[32px] rounded-full  overflow-hidden flex justify-center items-center bg-gray-100 ">
      {url.length > 0 ? <Image src={url} width={34} height={34} alt="" /> : <ImageIcon small={true}/>}
    </div>
  );
};

export default Avatar;
