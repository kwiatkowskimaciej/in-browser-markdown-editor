'use client';

import { cn } from '@/components/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SidebarButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const open = searchParams.get('sidebar') === 'true';
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 bg-100 transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-14 w-14 justify-center items-center"
      onClick={() => {
        router.push(`?sidebar=${!open}`);
      }}
    >
      <div
        className={cn(
          genericHamburgerLine,
          open ? 'rotate-45 translate-y-1.5' : ''
        )}
      />
      <div className={cn(genericHamburgerLine, open ? 'opacity-0' : '')} />
      <div
        className={cn(
          genericHamburgerLine,
          open ? '-rotate-45 -translate-y-1.5' : ''
        )}
      />
    </button>
  );
}
