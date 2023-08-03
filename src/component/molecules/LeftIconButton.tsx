"use client";
import React from 'react';
import LeftIcon from '../atoms/LeftIcon';
import { useRouter } from 'next/navigation';
function LeftIconButton() {
    const router = useRouter();
  return (
    <button onClick={()=>{
        router.back()
    }}>
      <LeftIcon />
    </button>
  );
}

export default LeftIconButton;
