'use client';

import { Calendar, Shield, Menu, X, User, LogIn } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `transition-colors font-medium ${
      isActive(path)
        ? 'text-primary'
        : 'text-foreground/70 hover:text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-md transition-shadow">
            <Calendar className="w-5 h-5 text-primary-foreground" />
          </div>
          CourtBook
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass('/')}>
            Find Courts
          </Link>
          <Link href="/my-bookings" className={linkClass('/my-bookings')}>
            My Bookings
          </Link>
          <Link href="/privacy-settings" className={`flex items-center gap-1.5 ${linkClass('/privacy-settings')}`}>
            <Shield className="w-4 h-4" />
            Privacy
          </Link>
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-border">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-1.5 text-sm">
                <LogIn className="w-4 h-4" />
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="gap-1.5 text-sm">
                <User className="w-4 h-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border animate-fade-in bg-background">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            <Link href="/" onClick={() => setIsOpen(false)} className={`py-2.5 px-3 rounded-lg ${isActive('/') ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent'}`}>
              Find Courts
            </Link>
            <Link href="/my-bookings" onClick={() => setIsOpen(false)} className={`py-2.5 px-3 rounded-lg ${isActive('/my-bookings') ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent'}`}>
              My Bookings
            </Link>
            <Link href="/privacy-settings" onClick={() => setIsOpen(false)} className={`py-2.5 px-3 rounded-lg flex items-center gap-2 ${isActive('/privacy-settings') ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent'}`}>
              <Shield className="w-4 h-4" />
              Privacy Settings
            </Link>
            <div className="border-t border-border mt-2 pt-2 flex gap-2">
              <Link href="/login" onClick={() => setIsOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full" size="sm">Log In</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="flex-1">
                <Button className="w-full" size="sm">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
