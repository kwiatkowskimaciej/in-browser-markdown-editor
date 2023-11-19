import { useMarkdown } from '@/components/providers/MarkdownProvider';
import { ChangeEvent } from 'react';
import EditorTopBar from '../EditorTopBar';

export default function Editor() {
  const { markdown, setMarkdown } = useMarkdown();

  const updateMarkdown = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setMarkdown(value);
  };

  return (
    <div className="h-full flex flex-col ">
      <div className="flex-1 block">
        <textarea
          className="p-4 pb-28 w-full min-h-full bg-100 text-700 outline-none dark:bg-1000 overflow-y-auto dark:text-400"
          onChange={updateMarkdown}
          value={markdown}
        />
      </div>
    </div>
  );
}
