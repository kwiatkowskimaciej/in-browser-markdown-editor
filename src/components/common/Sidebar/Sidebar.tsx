'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [show, setShow] = useState(false);

  return (
    <div className="h-14 w-14 bg-[#35393F] flex items-center justify-center md:w-[72px] md:h-[72px]">
      <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
        </g>
      </svg>
    </div>
  );
}
