import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './Button';
import Link from 'next/link';

export default function EditorTopBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const showPreview = searchParams.get('preview') === 'true';

  return (
    <div className="flex justify-between items-center bg-200 font-medium text-500 tracking-[2px] px-4 py-3 text-sm dark:bg-900 dark:text-400">
      {showPreview ? 'PREVIEW' : 'MARKDOWN'}
      <Link href={`?sidebar=${showSidebar}&preview=${!showPreview}`}>
        <img
          src={
            showPreview
              ? '/assets/icon-hide-preview.svg'
              : '/assets/icon-show-preview.svg'
          }
        />
      </Link>
    </div>
  );
}
