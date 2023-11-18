import { useMarkdown } from '@/components/providers/MarkdownProvider';
import Markdown from 'react-markdown';
import './preview.css';

export function Preview() {
  const { markdown } = useMarkdown();

  return (
    <div className="bg-100 w-screen h-full p-4 pb-28 overflow-y-scroll dark:bg-1000 markdown">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
