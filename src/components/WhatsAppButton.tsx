import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/constants';

export default function WhatsAppButton({ label = 'Get Started on WhatsApp' }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98]"
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}
