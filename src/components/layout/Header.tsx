'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Menu as LucideMenu } from 'lucide-react';
import { Button } from 'primereact/button';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Experience', url: '/experience' },
  { label: 'Education', url: '/education' },
  { label: 'Contact', url: '/contact' },
];

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems: MenuItem[] = navItems.map(item => ({
    label: item.label,
    icon: 'pi pi-home',
    command: () => {
      window.location.href = item.url;
      setSidebarOpen(false);
    }
  }));

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/50 shadow-sm pt-3 pb-3"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <div className="flex align-items-center justify-content-between h-20 w-full px-6">
        {/* Left: Logo and Name */}
        <div className="flex align-items-center gap-3">
          <div style={{ width: 40, height: 40, position: 'relative' }}>
            <Image
              src="/icons/main-icon.png"
              alt="Safiyah Logo"
              fill
              className="rounded-full object-cover"
              style={{ minWidth: 40, minHeight: 40, background: '#b19cd9' }}
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            {/* Fallback: colored circle if image fails */}
            <span className="absolute inset-0 rounded-full bg-primary-purple" style={{ display: 'none' }}></span>
          </div>
          <span className="text-xl font-bold text-gray-800" style={{ color: '#2d3748', fontWeight: 700 }}>
            Safiyah Sohail
          </span>
        </div>

        {/* Right: Hamburger Icon */}
        <button
          className="flex align-items-center justify-content-center border-round"
          style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '1rem' }}
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <LucideMenu size={32} color="#b19cd9" strokeWidth={2.5} />
        </button>
      </div>
      <Sidebar
        visible={sidebarOpen}
        position="right"
        onHide={() => setSidebarOpen(false)}
        className="p-sidebar-lg"
        style={{
          width: 320,
          maxWidth: '90vw',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderLeft: '2px solid #b19cd9',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
          padding: '2rem 1.5rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        header={
          <div className="flex items-center space-x-3 p-4">
            <Image
              src="/icons/main-icon.png"
              alt="Safiyah Logo"
              width={32}
              height={32}
              className="rounded-full"
              style={{ padding: '0.5rem' }}
            />
            <span className="text-lg font-bold" style={{ color: '#2d3748' }}>
              Menu
            </span>
          </div>
        }
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            {navItems.map(item => (
              <Link
                key={item.url}
                href={item.url}
                className="no-underline"
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#7c4bb8', padding: '0.5rem 0', borderRadius: '0.5rem', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="pi pi-home" style={{ fontSize: '1.2rem', color: '#b19cd9' }}></span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <Link href="/contact" className="no-underline">
              <Button
                label="Get in Touch"
                icon="pi pi-envelope"
                className="p-button-rounded w-full"
                style={{
                  background: 'linear-gradient(90deg, #ffb3d9 0%, #b19cd9 100%)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px 0 rgba(255,158,205,0.10)',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  borderRadius: '1.5rem',
                }}
                onClick={() => setSidebarOpen(false)}
              />
            </Link>
          </div>
        </div>
      </Sidebar>
    </header>
  );
};

export default Header; 