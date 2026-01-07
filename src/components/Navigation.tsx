import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { NavLink } from '../types';
import './Navigation.css';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: 'Home', id: '/' },
    { name: 'Products', id: '/products' },
    { name: 'Services', id: '/services' },
    { name: 'Blogs', id: '/blogs' },
    { name: 'About Us', id: '/about' },
    { name: 'Contact', id: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}
      aria-label="Main Navigation"
    >
      <div className="nav-container">
        <div className="nav-content">
          <Link
            to="/"
            className="nav-logo-link"
            aria-label="Viyara Embedded Home"
          >
            <img src="/images/viyara-logo.png" alt="VIYARA EMBEDDED" className="h-14 w-auto max-h-14 object-contain" style={{ height: '3.5rem' }} />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.id}
                className={`nav-link ${isActive(link.id) ? 'active' : 'inactive'}`}
                aria-current={isActive(link.id) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="quote-btn"
              aria-label="Get a Quote"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.id}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${isActive(link.id) ? 'active' : 'inactive'}`}
                aria-current={isActive(link.id) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;