import React from 'react';
import Money from '../atoms/Money';
import Note from '../atoms/Note';

const FormatedMoney = ({ ammount }: { ammount: number }) => {
  const formatedMoney = ammount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="flex items-center">
      <Money amount={formatedMoney} />
      <Note />
    </div>
  );
};

export default FormatedMoney;
