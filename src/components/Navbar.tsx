import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Reseller', path: '/reseller' },
  { label: 'Restream', path: '/restream' },
  { label: 'FAQ', path: '/#faq' },
  { label: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    setOpen(false);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname === route) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-brand-500/20 shadow-lg shadow-brand-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/logo.svg" alt="Nice IPTV" className="h-10 w-auto transition-opacity group-hover:opacity-80" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mx-1 mb-3 space-y-1 rounded-xl border border-white/10 bg-[#10101a]/98 p-3 shadow-xl shadow-black/30 backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-400 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
