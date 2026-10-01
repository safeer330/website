import { Check, Crown, Zap } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_LINK } from '@/constants';
import type { PricingPlan } from '@/data/pricingPlans';

export default function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-950/20 ${
        plan.popular
          ? 'bg-gradient-to-b from-warm-400/10 to-warm-600/5 border-2 border-warm-500/50 shadow-xl shadow-warm-600/10'
          : 'bg-white/[0.03] border border-warm-500/20 hover:border-warm-400/50'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-1.5 rounded-full border border-warm-500/55 bg-gradient-to-r from-[#211b10] via-[#1b1514] to-[#211315] px-4 py-1.5 text-xs font-bold shadow-lg shadow-warm-900/20">
            <Crown className="h-3.5 w-3.5 text-warm-400" /> <span className="warm-gradient">MOST POPULAR</span>
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
        <WhatsAppButton label="Get This Plan" variant="warm" />
      ) : (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-warm-500/50 bg-gradient-to-r from-warm-400/10 to-warm-600/10 py-3.5 font-semibold transition-all duration-300 hover:border-warm-400/90 hover:from-warm-400/20 hover:to-warm-600/20"
        >
          <Zap className="h-4 w-4 text-warm-400" /> <span className="warm-gradient">Choose Plan</span>
        </a>
      )}
    </div>
  );
}
