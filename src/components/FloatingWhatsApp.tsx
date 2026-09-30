import { MessageCircle, Send } from 'lucide-react';
import { TELEGRAM_LINK, WHATSAPP_LINK } from '@/constants';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 md:bottom-6 md:right-6">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all duration-300 group-hover:scale-110">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:flex items-center bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <span className="text-white text-sm font-medium">Chat with us</span>
          </div>
        </div>
      </a>

      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on Telegram"
      >
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#229ED9] hover:bg-[#168ac2] flex items-center justify-center shadow-2xl shadow-[#229ED9]/30 transition-all duration-300 group-hover:scale-110">
          <Send className="w-6 h-6 md:w-7 md:h-7 text-white -translate-x-0.5" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:flex items-center bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span className="text-white text-sm font-medium">Chat on Telegram</span>
        </div>
      </a>
    </div>
  );
}
