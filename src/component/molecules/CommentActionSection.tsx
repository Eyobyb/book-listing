import React from 'react';
import LikeIcon from '../atoms/LikeIcon';
import CommentIcon from '../atoms/CommentIcon';
import { CommentType } from '@/types/comment';

const CommentActionSection = ({ comment, like }: Pick<CommentType, 'comment' | 'like'>) => {
  return (
    <div className="text-slate-400 text-[9.35px] font-normal leading-[9.35px] flex gap-[5px]">
      <div className="flex items-center gap-[5.3px]">
        {like ? (
          <>
            <LikeIcon /> <p>{like}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-[5.3px]">
        {comment ? (
          <>
            {' '}
            <CommentIcon />
            <p>{comment}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CommentActionSection;
