'use client';

import Editor from '@/components/common/Editor/Editor';
import EditorTopBar from '@/components/common/EditorTopBar';
import Navbar from '@/components/common/Navbar/Navbar';
import { Preview } from '@/components/common/Preview/Preview';
import Sidebar from '@/components/common/Sidebar/Sidebar';
import { cn } from '@/components/utils/utils';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const open = searchParams.get('sidebar') === 'true';
  const preview = searchParams.get('preview') === 'true';

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Sidebar />
      <div
        className={cn(
          'h-full fixed left-0 transition-all duration-300 ease-in-out',
          open ? 'left-[250px]' : ''
        )}
      >
        <Navbar />
        <EditorTopBar />
        {preview && <Preview />}
        <Editor />
      </div>
    </div>
  );
}
