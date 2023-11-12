'use client';

import Navbar from '@/components/common/Navbar/Navbar';
import Sidebar from '@/components/common/Sidebar/Sidebar';
import { cn } from '@/components/utils/utils';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const open = searchParams.get('sidebar') === 'true';

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Sidebar />
      <div
        className={cn(
          'fixed left-0 transition-all duration-300 ease-in-out',
          open ? 'left-[250px]' : ''
        )}
      >
        <Navbar />
      </div>
    </div>
  );
}
