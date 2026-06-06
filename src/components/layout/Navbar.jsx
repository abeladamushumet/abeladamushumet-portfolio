import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../../utils/constants';
import '../../styles/layout.css';

export default function Navbar({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxOpen]);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollTo('#home')} role="button" tabIndex={0}>
            <img
              src="/assets/profile.jpg"
              alt="Abel Adamu Shumet"
              className="navbar-logo-img"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              style={{ cursor: 'zoom-in' }}
            />
            <span>Abel Adamu Shumet</span>
          </div>

          {/* Desktop Links */}
          <nav className="navbar-links" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className={`navbar-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <ThemeToggle />
            <button
              className="navbar-mobile-toggle"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className="navbar-mobile-link"
            onClick={() => scrollTo(link.href)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Profile Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img
            src="/assets/profile.jpg"
            alt="Abel Adamu Shumet – Full Photo"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
