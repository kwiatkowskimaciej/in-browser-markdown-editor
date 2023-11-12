import ThemeSwitch from './ThemeSwitch';
import { Button } from '../Button';
import File from './File';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/components/utils/utils';

export default function Sidebar() {
  const searchParams = useSearchParams();
  const open = searchParams.get('sidebar') === 'true';

  return (
    <div
      className={cn(
        'fixed w-[250px] h-full bg-900 p-6 transition-all duration-300 ease-in-out',
        open ? 'left-0' : '-left-[250px]'
      )}
    >
      <h1 className="tracking-[5px] font-commissioner font-bold text-100">
        MARKDOWN
      </h1>
      <h2 className="text-sm font-medium font-roboto tracking-[2px] my-6 text-500">
        MY DOCUMENTS
      </h2>
      <Button variant={'icon'} size={'full'} className="font-roboto text-100">
        + New document
      </Button>
      <div className="my-6">
        <File />
      </div>
      <div className="fixed bottom-6">
        <ThemeSwitch />
      </div>
    </div>
  );
}
