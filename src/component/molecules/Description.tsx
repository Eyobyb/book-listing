import React from 'react';
import TitleDetail from '../atoms/TitleDetail';
import TextDescription from '../atoms/TextDescription';
import DiscountRate from '../atoms/DiscountRate';
import FormatedMoney from './FormatedMoney';

export const Description = () => {
  const des =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id sint fugiat inventore rem, quibusdam modi repellendus, eaque consequatur exercitationem dolore! Distinctio impedit assumenda vero aut quisquam corrupti cumque omnis.';
  return (
    <div className="px-4 py-3">
      <TitleDetail title="{Title of the  Book}" />
      <TextDescription description={des} />

      <div className="flex justify-between py-4">
        <DiscountRate discountRate={10} />
        <FormatedMoney ammount={57600} />
      </div>
    </div>
  );
};
