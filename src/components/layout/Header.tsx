'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Sidebar } from 'primereact/sidebar';
import Link from 'next/link';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Education', href: '/education' },
    { label: 'Contact', href: '/contact' },
    { label: 'Links', href: '/links' },
    { label: 'Certifications', href: '/certifications' },
  ];

  return (
    <>
      {/* Simple Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/main-icon.png"
                alt="Safiyah Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="text-lg font-bold text-gray-800 hidden sm:block">Safiyah Sohail</span>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-purple-600" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarOpen}
        position="right"
        onHide={() => setSidebarOpen(false)}
        className="w-80"
        header={
          <div className="flex items-center justify-between w-full p-4">
            <h2 className="text-xl font-bold text-purple-800">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <X size={20} className="text-purple-600" />
            </button>
          </div>
        }
      >
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors font-medium"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Sidebar>
    </>
  );
};

export default Header;
