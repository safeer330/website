import WhatsAppButton from '@/components/WhatsAppButton';
import { restreamPlans } from '@/data/pricingPlans';

export default function RestreamPlanGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {restreamPlans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] md:p-8 ${
            plan.popular
              ? 'bg-gradient-to-b from-warm-400/10 to-warm-600/5 border-2 border-warm-500/50 shadow-xl shadow-warm-600/10'
              : 'bg-white/[0.03] border border-warm-500/20 hover:border-warm-400/50'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2">
              <div className="rounded-full border border-warm-500/55 bg-gradient-to-r from-[#211b10] via-[#1b1514] to-[#211315] px-4 py-1.5 text-xs font-bold shadow-lg shadow-warm-900/20">
                <span className="warm-gradient">RECOMMENDED</span>
              </div>
            </div>
          )}
          <div className="mb-6">
            <h4 className="mb-1 text-lg font-semibold text-white">{plan.name}</h4>
            <p className="break-words text-2xl font-bold leading-tight text-white sm:text-3xl">{plan.duration}</p>
          </div>
          <ul className="mb-8 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-brand-500' : 'bg-white/10'}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <WhatsAppButton label="Request This Plan" variant="warm" />
        </div>
      ))}
    </div>
  );
}