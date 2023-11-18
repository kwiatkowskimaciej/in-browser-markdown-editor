'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IMarkdownContext {
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<any>>;
}

const MarkdownContext = createContext<IMarkdownContext>({
  markdown: '',
  setMarkdown: () => {},
});

const MarkdownProvider = ({ children }: { children: ReactNode }) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => useContext(MarkdownContext);

export default MarkdownProvider;
