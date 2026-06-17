'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Experience', path: '/experience' },
  { name: 'Publications', path: '/publications' },
  { name: 'Skills', path: '/skills' },
];

const socialLinks = {
  github: 'https://github.com/mmkeskar',
  linkedin: 'https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/',
  email: 'mailto:mkeskar@ucmerced.edu',
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-primary hover:text-accent transition-all flex items-center gap-2">
          <span>Maitrayee Keskar</span>
          <span className="hidden sm:inline text-xs font-sans font-semibold px-2 py-0.5 rounded-full bg-accent/5 border border-accent/15 text-accent">
            Ph.D. Student
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-sans text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-border-color" />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/75 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/75 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.email}
              className="text-foreground/75 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-border-color animate-fade">
          <div className="container py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block font-sans text-base font-semibold py-2 px-3 rounded-lg transition-colors ${isActive ? 'bg-accent/10 text-accent' : 'hover:bg-accent/5 hover:text-accent'}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <hr className="border-border-color" />

            <div className="flex items-center justify-around py-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/75 hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Github size={20} /> Github
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/75 hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href={socialLinks.email}
                className="text-foreground/75 hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Mail size={20} /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
