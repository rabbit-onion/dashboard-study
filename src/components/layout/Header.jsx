'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItemsData } from '@/data/navigation';

const NavLink = ({ href, children }) => {
  // usePathname() : 현재 경로를 가져옴
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`py-2 ${isActive ? 'text-primary' : ''}`}>
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className='bg-gray-200 p-4 mb-10 flex justify-between'>
      <h1>
        <Link href='/'>logo</Link>
      </h1>
      <nav>
        <ul className='flex gap-5'>
          {navItemsData.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}

          {/* <li>
            <NavLink href='/about'>about</NavLink>
          </li>
          <li>
            <NavLink href='/state'>state</NavLink>
          </li>
          <li>
            <NavLink href='/login'>login</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
