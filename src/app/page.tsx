'use client';

import Navbar from '@/components/common/Navbar/Navbar';
import Sidebar from '@/components/common/Sidebar/Sidebar';
import { cn } from '@/components/utils/utils';
import { useSearchParams } from 'next/navigation';
import { TransitionEvent, useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const open = searchParams.get('sidebar') === 'true';

  return (
    <div
      className={cn(
        'w-full h-full flex transform duration-300 ease-in-out',
        open ? 'translate-x-0 overflow-hidden' : '-translate-x-[250px]'
      )}
    >
      <Sidebar />
      <div>
        <Navbar />
      </div>
    </div>
  );
}
