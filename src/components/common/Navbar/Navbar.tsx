import { Button } from '../Button';
import FileName from './FileName';
import SidebarButton from '../Sidebar/SidebarButton';

export default function Navbar() {
  return (
    <header className="w-screen flex items-center justify-between bg-[#2B2D31] pr-2 md:h-[72px] md:pr-4">
      <div className="flex items-center gap-6">
        <SidebarButton />
        <FileName />
      </div>
      <div className="flex gap-4">
        <Button variant={'iconSecondary'}>
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
          </svg>
        </Button>
        <Button variant={'icon'}>
          <img src="/assets/icon-save.svg" />
          {/* Save Changes */}
        </Button>
      </div>
    </header>
  );
}
