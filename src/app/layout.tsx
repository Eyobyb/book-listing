'use client';
import { RecoilRoot } from 'recoil';

import './globals.css';
import type { Metadata } from 'next';

import { QueryClientProvider } from 'react-query';
import queryClient from '@/utils/queryClient';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['700', '400'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>{children}</RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
}
