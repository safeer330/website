import {
  Users, DollarSign, TrendingUp, ShieldCheck, Headphones, Rocket, Layers, BarChart3,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PlanCard from '@/components/PlanCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import CompatibleDevices from '@/components/CompatibleDevices';
import FAQ from '@/components/FAQ';

const heroImage = 'https://images.pexels.com/photos/5668831/pexels-photo-5668831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const features = [
  { icon: Users, title: 'Full Reseller Panel', desc: 'Manage your own client base with an intuitive dashboard. Create, extend, and manage subscriptions with a few clicks.' },
  { icon: DollarSign, title: 'High Profit Margins', desc: 'Buy credits at wholesale prices and sell at your own rates. Keep up to 80% profit on every subscription sold.' },
  { icon: TrendingUp, title: 'Scalable Business', desc: 'Start small and grow at your own pace. Buy credits as you need them — no minimum monthly commitment.' },
  { icon: ShieldCheck, title: 'White-Label Ready', desc: 'Build your own brand. Custom panel branding available so your clients see your name, not ours.' },
  { icon: Headphones, title: 'Dedicated Reseller Support', desc: 'Get priority support from our reseller team. We help you troubleshoot client issues fast.' },
  { icon: Rocket, title: 'Instant Credit Delivery', desc: 'Credits are added to your panel instantly after purchase. No waiting, no delays.' },
  { icon: Layers, title: 'Flexible Credit System', desc: 'Use credits to create any duration subscription — 1 month, 3 months, 6 months, 12 months. You decide.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Track your sales, active subscriptions, and revenue with built-in reporting tools.' },
];

const plans = [
  {
    name: 'Starter Pack', duration: '10 Credits',
    features: ['10 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Standard Support', 'Email Notifications'],
  },
  {
    name: 'Pro Pack', duration: '25 Credits',
    popular: true,
    features: ['25 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Priority Support', 'Custom Branding Option', 'Lower Per-Credit Cost'],
  },
  {
    name: 'Business Pack', duration: '50 Credits',
    features: ['50 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Priority Support', 'Custom Branding Option', 'Best Per-Credit Rate'],
  },
  {
    name: 'Enterprise Pack', duration: '100 Credits',
    features: ['100 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Dedicated Account Manager', 'Full White-Label Panel', 'Lowest Per-Credit Rate'],
  },
];

const steps = [
  { number: '01', title: 'Buy a Credit Pack', desc: 'Choose a reseller pack that fits your budget. Credits are added to your panel instantly.' },
  { number: '02', title: 'Set Your Prices', desc: 'Decide how much to charge your clients. You have full control over your pricing strategy.' },
  { number: '03', title: 'Create Subscriptions', desc: 'Use your credits to create subscriptions of any duration for your clients in seconds.' },
  { number: '04', title: 'Grow Your Business', desc: 'Manage your clients, track revenue, and scale up by buying more credits as you grow.' },
];

const faqItems = [
  { question: 'What is a reseller panel?', answer: 'A reseller panel is a management dashboard that lets you create and manage IPTV subscriptions for your own clients. You buy credits at wholesale prices and use them to create subscriptions that you sell to your customers at your own rates.' },
  { question: 'How does the credit system work?', answer: 'Each credit can be used to create one subscription. The duration of the subscription you create (1 month, 3 months, etc.) determines how many credits it costs. Longer subscriptions cost more credits. You have full flexibility to create any duration.' },
  { question: 'What is the minimum investment to start?', answer: 'You can start with our Starter Pack of 10 credits. This gives you enough to test the service, set up your panel, and start selling to your first clients.' },
  { question: 'Can I brand the panel with my own logo?', answer: 'Yes! Our Pro Pack and above include custom branding options. The Enterprise Pack includes a fully white-label panel where your clients see only your brand name and logo.' },
  { question: 'Do you provide support for my clients?', answer: 'You are the first point of contact for your clients. However, our reseller support team is always available to help you resolve any technical issues your clients may face.' },
  { question: 'How fast are credits delivered?', answer: 'Credits are delivered to your panel instantly after your WhatsApp order is confirmed. You can start creating subscriptions for your clients right away.' },
];

export default function Reseller() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/75 to-[#0a0a0f]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 mb-6">
              <Users className="w-4 h-4 text-brand-400" />
              <span className="text-brand-300 text-sm font-medium">Reseller Program</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Start Your Own
              <span className="block bg-gradient-to-r from-[#ffb000] via-[#ff7a18] to-[#ff3d2e] bg-clip-text text-transparent">
                IPTV Business Today
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Become a Nice IPTV reseller and build a profitable IPTV business with our powerful
              reseller panel. Buy credits at wholesale, sell at your own prices, keep the profit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton label="Start Your Reseller Business" />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
              {[
                { value: '80%', label: 'Profit Margin' },
                { value: '24/7', label: 'Reseller Support' },
                { value: 'Instant', label: 'Credit Delivery' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl md:text-2xl font-bold text-brand-400">{s.value}</div>
                  <div className="text-gray-500 text-xs md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="relative z-10 -mt-2 pb-8 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibleDevices />
        </div>
      </section>

      {/* Plans */}
      <section id="reseller-packs" className="scroll-mt-24 py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Reseller Packs"
            title="Choose Your Credit Package"
            subtitle="Buy credits at wholesale prices. The more you buy, the lower your per-credit cost and the higher your profit margin."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Each credit creates one subscription. You choose the duration and price for your clients.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Reseller Benefits"
            title="Everything You Need to Run a Profitable IPTV Business"
            subtitle="Our reseller panel gives you all the tools to manage clients, create subscriptions, and track your revenue."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-brand-950/20"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center mb-5 group-hover:bg-brand-600/20 group-hover:scale-110 transition-all">
                  <f.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-y border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="How It Works"
            title="Start Earning in 4 Simple Steps"
            subtitle="No technical experience needed. Our system is designed for anyone to start and run a successful IPTV business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-brand-600/30 mb-4">{step.number}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 text-brand-600/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Reseller FAQ"
            title="Reseller Program Questions"
            subtitle="Everything you need to know about starting and running your IPTV reseller business."
          />
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-atmosphere">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="warm-gradient text-3xl md:text-4xl font-bold mb-4">
            Ready to Become a Reseller?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful resellers earning with Nice IPTV. Get your panel set up today.
          </p>
          <WhatsAppButton label="Get Started on WhatsApp" />
        </div>
      </section>
    </div>
  );
}
