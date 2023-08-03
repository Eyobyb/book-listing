import React from 'react';
import Avatar from '../atoms/Avatar';
import CheckIcon from '../atoms/CheckIcon';
import ThreeDotIcon from '../atoms/ThreeDotIcon';
import { CommentType } from '@/types/comment';

const CommentInfo = ({ isChecked, title, info, url }: Pick<CommentType, 'info' | 'title' | 'url' | 'isChecked'>) => {
  return (
    <div className="flex justify-between items-center p">
      <div className="flex gap-2  items-center">
        <Avatar url={url} />
        {/* <p>안녕 나 응애</p> */}
        <p>{title}</p>
        {isChecked ? <CheckIcon /> : <></>}
        {/* <p>1일전</p> */}
        <p>{info}</p>
      </div>
      <ThreeDotIcon />
    </div>
  );
};

export default CommentInfo;
