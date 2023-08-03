'use client';

import { CardContainer } from '@/component/organisms/CardContainer';
import BooklistingHeader from '@/component/templates/BooklistingHeader';
import Booklistings from '@/component/templates/Booklistings';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
import { useQuery } from 'react-query';
import { Product } from '@/types/product';

interface ApiResponse {
  page: number;
  // Add other properties here if your response has more fields
}

export default function Home() {
  const [page, setPage] = useState(1);

  const { data: listing, isLoading, refetch } = useQuery(['https://frontassignment.hyperhire.in', { page }]);

  const [bookListingData, setBookListingData] = useState<Product[]>([]);
  const [nextTick, setNextTick] = useState(true);

  useEffect(() => {
    if (!isLoading && listing) {
      const listingData: any = listing;
      setBookListingData((e) => {
        if (e) return [...e, ...(listingData.data as Product[])];
        else return [...(listingData.data as Product[])];
      });
    }
  }, [listing, isLoading]);

  const handleRefresh = async () => {
    location.reload();
  };
  const refer = useRef(true);

  const nextFetch = useCallback(async () => {
    const newQueryKey = ['https://frontassignment.hyperhire.in', { page: page + 1 }];
    await refetch({ queryKey: newQueryKey });
    setPage((e) => {
      return e + 1;
    });
    refer.current = true;
  }, [listing]);

  useEffect(() => {
    if (listing && (listing as any).hasNext && refer.current) {
      refer.current = false;
      nextFetch();
    }
  }, [nextTick]);

  return (
    <main className="w-full h-full flex flex-col items-center">
      <BooklistingHeader />
      {bookListingData ? (
        <ReactPullToRefresh onRefresh={handleRefresh} distanceToRefresh={50}>
          <Booklistings
            listing={bookListingData}
            nextFetch={() => {
              setNextTick((p) => !p);
            }}
            switchListner={nextTick}
          />
        </ReactPullToRefresh>
      ) : (
        <></>
      )}
    </main>
  );
}
