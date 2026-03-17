"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo-link">
          <Terminal size={28} className="logo-icon" />
          <span>Ankush Jha</span>
        </Link>
        
        <nav className="nav-links">
          {navLinks.map((link) => {
             const isActive = pathname === link.href || (pathname === '/' && link.href.startsWith('/#'));
             return (
               <Link 
                 key={link.name} 
                 href={link.href} 
                 className={`nav-link ${isActive ? 'active' : ''}`}
               >
                 {link.name}
               </Link>
             );
          })}
        </nav>
        
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Hire Me
          </Link>
          <div className="nav-avatar-wrapper">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAGHGGVbsw1C0m3CER0LFdPVGTxrN7OvmnLlV5QkD2AirQng5b5esmXax2rb7vmRhXyyE8rBQXPa4o_xSCdieuSeaQ1aQXPVz9ZMlfEcxM_1duOxjupxTiPeVDbt_Dd8fUcEwzj_mXW2J---C_ULAsKxBQ2LuH_UqFjrSofe0g6zCVru28SIx-vfDXKHtPC1BFNx22Dc6BkaZZJF9iKChFW4qT9nBIIF3aG6ujObRheku4Z3a8xH2hxGlU-yWbsv57H9suRPpMMw" alt="Ankush" className="nav-avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
