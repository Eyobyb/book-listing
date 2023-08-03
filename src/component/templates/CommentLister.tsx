'use client';
import React from 'react';
import CommentHolder from '../organisms/CommentHolder';
import { CommentType, CommentVerbos } from '@/types/comment';
import { useRecoilState } from 'recoil';
import { commentAtom } from '@/recoil/atoms/comments';

function CommentLister() {
  const [data, setData] = useRecoilState(commentAtom);

  return (
    <div className="flex flex-col ">
      {data.map((e) => {
        return (
          <div className={!e.isOriginalComment ? 'ml-[40px]' : ''}>
            <CommentHolder comment={e as CommentType} />
          </div>
        );
      })}
    </div>
  );
}

export default CommentLister;
