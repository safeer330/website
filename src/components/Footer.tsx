import { Link } from 'react-router-dom';
import { Tv, Mail, MessageCircle, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { WHATSAPP_LINK } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-[#06060a] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-xl">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Stream<span className="text-brand-400">X</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium IPTV service with over 22,000 live channels, 120,000+ movies and TV shows, and 15,000+ VOD channels in 4K/FHD/HD quality.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-600 flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Reseller Panel', path: '/reseller' },
                { label: 'Restream Connections', path: '/restream' },
                { label: 'FAQ', path: '/#faq' },
                { label: 'Contact', path: '/#contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              {['22K+ Live Channels', '120K+ Movies & Series', '15K+ VOD Channels', 'Anti-Freeze Tech', '24/7 Support', 'All Devices'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-brand-400" />
                support@streamx.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4 text-brand-400" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-400" />
                Global Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} StreamX IPTV. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/policies#privacy-policy" className="text-gray-500 hover:text-brand-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/policies#terms-of-service" className="text-gray-500 hover:text-brand-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/policies#refund-policy" className="text-gray-500 hover:text-brand-400 text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
