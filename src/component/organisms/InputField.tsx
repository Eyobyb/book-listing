import React from 'react';
import Divider from '../atoms/Divider';
import ImageIcon from '../atoms/ImageIcon';
import TextButton from '../atoms/TextButton';

const InputField = () => {
  return (
    <div className=" my-auto w-full flex flex-col h-[41px] bg-red-500] bg-white z-20">
      <Divider />
      <div className="w-full relative h-full  flex justify-between px-4 items-center">
        <div className=" left-4">
          <ImageIcon />
        </div>
        <input type="text" className="outline-none  h-full px-4 flex-grow text-xs text-[#AFB9CA]" placeholder="댓글을 남겨주세요." />
        <div className=" right-4">
          <TextButton text="등록" />
        </div>
      </div>
    </div>
  );
};

export default InputField;
