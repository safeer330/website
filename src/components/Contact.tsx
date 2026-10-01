import { useState } from 'react';
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_LINK } from '@/constants';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's Talk</h3>
          <p className="text-gray-400 leading-relaxed">
            Have questions about our IPTV service, reseller panels, or restream connections?
            Fill out the form or reach us directly on WhatsApp for an instant response.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-brand-600/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <p className="text-gray-300 font-medium text-sm">Email</p>
              <p className="text-gray-500 text-sm">support@niceiptv.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <p className="text-gray-300 font-medium text-sm">WhatsApp</p>
              <p className="text-gray-500 text-sm">Available 24/7 — Avg. reply under 5 min</p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <WhatsAppButton label="Chat With Us Now" />
        </div>
      </div>

      {sent ? (
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-gradient-to-br from-brand-600/10 to-brand-900/10 border border-brand-500/20">
          <CheckCircle className="w-16 h-16 text-brand-400 mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
          <p className="text-gray-400 text-sm mb-4">
            We'll get back to you shortly. For faster response, message us on WhatsApp.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
          >
            Open WhatsApp &rarr;
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 shadow-lg shadow-brand-950/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  required
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  required
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Service Interested In</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors">
              <option className="bg-[#0a0a0f]">IPTV Subscription</option>
              <option className="bg-[#0a0a0f]">Reseller Panel</option>
              <option className="bg-[#0a0a0f]">Restream Connections</option>
              <option className="bg-[#0a0a0f]">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
              placeholder="Tell us what you need..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-600/20"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
