import { useSearchParams } from 'next/navigation';
import Editor from '../Editor/Editor';
import EditorTopBar from '../EditorTopBar';
import { Preview } from '../Preview/Preview';
import { cn } from '@/components/utils/utils';

export default function Split() {
  const searchParams = useSearchParams();
  const showPreview = searchParams.get('preview') === 'true';

  return (
    <div className="flex h-full w-screen">
      {!showPreview && (
        <div className="w-1/2 h-full border-r border-300 dark:border-600">
          <EditorTopBar name="MARKDOWN" />
          <Editor />
        </div>
      )}
      <div className={cn('h-full', showPreview ? 'w-full' : 'w-1/2')}>
        <EditorTopBar name="PREVIEW" showPreviewIcon={true} />
        <Preview />
      </div>
    </div>
  );
}
