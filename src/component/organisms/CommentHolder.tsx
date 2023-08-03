import React from 'react';
import CommentInfo from '../molecules/CommentInfo';
import { CommentDetail } from '../atoms/CommentDetail';
import CommentActionSection from '../molecules/CommentActionSection';
import { CommentType } from '@/types/comment';

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex flex-col w-full px-[15px] py-[14px]">
      <CommentInfo info={comment.info} isChecked={comment.isChecked} url={comment.url} title={comment.title} />
      <div className="ml-[40px] flex flex-col gap-2">
        <CommentDetail detail={comment.description} />
        <CommentActionSection like={comment.like} comment={comment.comment} />
      </div>
    </div>
  );
};

export default Comment;
