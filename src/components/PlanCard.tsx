import { Check, Crown, Zap } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Plan {
  name: string;
  duration: string;
  price?: string;
  features: string[];
  popular?: boolean;
}

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-950/20 ${
        plan.popular
          ? 'bg-gradient-to-b from-brand-600/15 to-brand-900/10 border-2 border-brand-500/40 shadow-xl shadow-brand-600/10'
          : 'bg-white/[0.03] border border-white/5 hover:border-white/10'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-warm-400 to-warm-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Crown className="w-3.5 h-3.5" /> MOST POPULAR
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-white text-lg font-semibold mb-1">{plan.name}</h4>
        {plan.price && <p className="text-gray-500 text-sm">{plan.duration}</p>}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`${plan.price ? 'text-4xl md:text-5xl' : 'text-2xl sm:text-3xl'} break-words leading-tight font-bold text-white`}>
            {plan.price ?? plan.duration}
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              plan.popular ? 'bg-brand-500' : 'bg-white/10'
            }`}>
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.popular ? (
        <WhatsAppButton label="Get This Plan" />
      ) : (
        <a
          href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20your%20IPTV%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          <Zap className="w-4 h-4 text-brand-400" /> Choose Plan
        </a>
      )}
    </div>
  );
}
