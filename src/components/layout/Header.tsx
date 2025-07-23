'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';
import { Menu as LucideMenu, X } from 'lucide-react';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Left: Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/main-icon.png"
                alt="Safiyah Logo"
                fill
                sizes="(max-width: 640px) 32px, 40px"
                className="rounded-full object-cover"
                style={{ minWidth: '32px', minHeight: '32px', background: '#b19cd9' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback: colored circle if image fails */}
              <span
                className="absolute inset-0 rounded-full bg-purple-500"
                style={{ display: 'none' }}
              ></span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800">Safiyah Sohail</span>
          </div>

          {/* Right: Hamburger Icon */}
          <button
            className="flex items-center justify-center p-2 rounded-lg hover:bg-purple-50 transition-colors"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <LucideMenu size={24} className="text-purple-600" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar
        visible={sidebarOpen}
        position="right"
        onHide={() => setSidebarOpen(false)}
        className="w-80"
        header={
          <div className="flex items-center justify-between w-full">
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
        <nav className="flex flex-col gap-2 mt-4">
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
