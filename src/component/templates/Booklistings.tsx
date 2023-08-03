import { CardProduct, Product } from '@/types/product';
import React, { useCallback, useEffect, useRef } from 'react';
import { CardContainer } from '../organisms/CardContainer';
import UseScrollDetection from '../customhook/UseScrollDetection';

const Booklistings = ({
  listing,
  nextFetch,
}: {
  listing: Product[];
  nextFetch: () => void;
  switchListner: boolean;
}) => {
  const addPage = useCallback(() => {
    nextFetch();
  }, []);


  const { divRef } = UseScrollDetection({
    scrollThreshold: 80,
    onThresholdReached: addPage,
  });

  return (
    <div ref={divRef} className="container mx-auto  flex justify-center">
      <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1px] ">
        {listing.map((e) => {
          return <CardContainer data={e as CardProduct} />;
        })}
      </div>
    </div>
  );
};

export default Booklistings;
