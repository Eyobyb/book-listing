import React from 'react';
import FormatedMoney from '../molecules/FormatedMoney';
import DiscountRate from '../atoms/DiscountRate';
import Title from '../atoms/Title';
import ProductImage from '../atoms/ProductImage';
import { CardProduct } from '@/types/product';
import Link from 'next/link';

export const CardContainer = ({ data }: { data: CardProduct }) => {
  return (
    <div className=" w-[187px] bg-gray-50 ">
      <Link href={{ pathname: '/detail' }}>
        <ProductImage coverImage={data.coverImage} />
        <div className="flex flex-col gap-4 pt-2 px-[15.5px] pb-[16px] ">
          <Title title={data.title} />
          <div className="flex justify-between">
            <DiscountRate discountRate={data.discountRate} />
            <FormatedMoney ammount={data.price} />
          </div>
        </div>
      </Link>
    </div>
  );
};
