"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Employees Live Status',
      path: '/livestatus',
    },
    {
      id: 3,
      name: 'Help',
      path: '/helpdesk',
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-sm bg-black">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.jpg.webp"
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="text-white hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        
        {/* Mobile Menu */}

        <div
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </div>
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 z-50 md:hidden">
            {Menu.map((item) => (
              <Link href={item.path} key={item.id}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-primary cursor-pointer transition-all ease-in-out"
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
