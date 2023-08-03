import Divider from '@/component/atoms/Divider';

import { Description } from '@/component/molecules/Description';
import Carosel from '@/component/organisms/Carosel';
import InputField from '@/component/organisms/InputField';
import CommentLister from '@/component/templates/CommentLister';
import DetailHeader from '@/component/templates/DetailHeader';
import React from 'react';

const Detail = () => {
  return (
    <div className="flex flex-col container max-w-[1024px] mx-auto">
      <div className="pb-[41px]">
        <DetailHeader />
        <Carosel />
        <Description />
        <Divider />
        <CommentLister />
      </div>
      <div className="fixed right-0 bottom-0 left-0">
        <InputField />
      </div>
    </div>
  );
};

export default Detail;
