import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/constants';

export default function WhatsAppButton({
  label = 'Get Started on WhatsApp',
  variant = 'green',
}: {
  label?: string;
  variant?: 'green' | 'warm';
}) {
  const warmStyle = variant === 'warm';

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-xl border px-7 py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
        warmStyle
          ? 'border-warm-500/55 bg-gradient-to-r from-warm-400/10 to-warm-600/10 shadow-lg shadow-warm-900/10 hover:border-warm-400/90 hover:from-warm-400/20 hover:to-warm-600/20'
          : 'border-transparent bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#1ebe5b] hover:shadow-[#25D366]/40'
      }`}
    >
      <MessageCircle className={`h-5 w-5 ${warmStyle ? 'text-warm-400' : 'text-white'}`} />
      <span className={warmStyle ? 'warm-gradient' : ''}>{label}</span>
    </a>
  );
}
