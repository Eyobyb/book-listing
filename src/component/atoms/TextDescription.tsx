import React from 'react';

import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  weight: ['700', '400'],
  subsets: ['latin'],
});

const TextDescription = ({ description }: { description: string }) => {
  return (
    <div className="text-black text-xs font-normal">
      <p className={notoSans.className}> {description}</p>
    </div>
  );
};

export default TextDescription;
