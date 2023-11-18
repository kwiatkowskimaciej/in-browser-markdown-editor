'use client';

import { cn } from '@/components/utils/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SidebarButton() {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const showPreview = searchParams.get('preview') === 'true';
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 bg-100 transition ease transform duration-300`;

  return (
    <Link
      className="flex flex-col h-14 w-14 justify-center items-center"
      href={`?sidebar=${!showSidebar}&preview=${showPreview}`}
    >
      <div
        className={cn(
          genericHamburgerLine,
          showSidebar ? 'rotate-45 translate-y-1.5' : ''
        )}
      />
      <div
        className={cn(genericHamburgerLine, showSidebar ? 'opacity-0' : '')}
      />
      <div
        className={cn(
          genericHamburgerLine,
          showSidebar ? '-rotate-45 -translate-y-1.5' : ''
        )}
      />
    </Link>
  );
}
