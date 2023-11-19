import { useMarkdown } from '@/components/providers/MarkdownProvider';
import Markdown from 'react-markdown';
import './preview.css';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/components/utils/utils';

export function Preview() {
  const { markdown } = useMarkdown();
  const searchParams = useSearchParams();
  const showPreview = searchParams.get('preview') === 'true';

  return (
    <div
      className={cn(
        'bg-100 w-full h-full p-4 pb-28 overflow-y-auto dark:bg-1000 markdown',
        showPreview && 'md:max-w-[672px] md:m-auto'
      )}
    >
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
