import {
  Radio, Server, Globe, Zap, ShieldCheck, Headphones, Code, Network,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import CompatibleDevices from '@/components/CompatibleDevices';
import FAQ from '@/components/FAQ';

const heroImage = 'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const features = [
  { icon: Server, title: 'High-Bandwidth Servers', desc: 'Enterprise-grade infrastructure with massive bandwidth capacity to handle thousands of concurrent streams without breaking a sweat.' },
  { icon: Zap, title: 'Ultra-Low Latency', desc: 'Restream with minimal delay. Our optimized network ensures your viewers get smooth, real-time content.' },
  { icon: Globe, title: 'Global CDN', desc: 'Distributed servers across multiple continents ensure your streams reach viewers worldwide with optimal routing.' },
  { icon: ShieldCheck, title: '99.9% Uptime SLA', desc: 'Redundant infrastructure with automatic failover guarantees your streams stay live around the clock.' },
  { icon: Code, title: 'Multiple Protocols', desc: 'Support for HLS, MPEG-TS, RTMP, and DASH. Stream in whatever format your platform requires.' },
  { icon: Network, title: 'Scalable Connections', desc: 'From 100 to 10,000+ connections. Scale your restream operation as your audience grows.' },
  { icon: Radio, title: 'Full Channel Access', desc: 'Restream all 22,000+ channels including premium sports, movies, and international content to your platform.' },
  { icon: Headphones, title: 'Technical Support', desc: 'Our engineering team is available 24/7 to help with integration, troubleshooting, and optimization.' },
];

const plans = [
  {
    name: 'Starter', duration: '100 Connections',
    features: ['100 Concurrent Connections', 'All 22K+ Channels', 'HLS / MPEG-TS Output', '1080p FHD Quality', 'Basic CDN Distribution', 'Email Support'],
  },
  {
    name: 'Professional', duration: '500 Connections',
    popular: true,
    features: ['500 Concurrent Connections', 'All 22K+ Channels', 'HLS / MPEG-TS / RTMP', '4K UHD Quality', 'Global CDN Distribution', 'Priority Support', 'Custom Stream Labels'],
  },
  {
    name: 'Business', duration: '1,000 Connections',
    features: ['1,000 Concurrent Connections', 'All 22K+ Channels', 'All Protocols Supported', '4K UHD Quality', 'Premium CDN + Failover', '24/7 Dedicated Support', 'Custom Stream Labels', 'API Access'],
  },
  {
    name: 'Enterprise', duration: '5,000+ Connections',
    features: ['5,000+ Concurrent Connections', 'All 22K+ Channels', 'All Protocols + Custom', '4K UHD Quality', 'Dedicated Infrastructure', 'Dedicated Account Manager', 'SLA Guarantee', 'Full API & Integration'],
  },
];

const specs = [
  { label: 'Protocols', value: 'HLS, MPEG-TS, RTMP, DASH' },
  { label: 'Max Quality', value: '4K UHD / 60fps' },
  { label: 'Latency', value: '< 2 seconds' },
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'Server Locations', value: 'EU, US, Asia, ME' },
  { label: 'Connections', value: '100 to 10,000+' },
];

const faqItems = [
  { question: 'What is a restream connection?', answer: 'A restream connection allows you to receive our IPTV streams and redistribute them on your own platform or app. Each connection represents one concurrent stream you can serve to your viewers. This is ideal for operators running their own IPTV platforms, OTT apps, or secondary distribution networks.' },
  { question: 'Which streaming protocols are supported?', answer: 'We support HLS (HTTP Live Streaming), MPEG-TS, RTMP, and DASH. This covers virtually all modern streaming platforms, apps, and players. Our team can help you integrate with your specific setup.' },
  { question: 'Can I choose which channels to restream?', answer: 'Yes, you get access to all 22,000+ channels and can choose to restream any subset. You can organize channels into custom bouquets and playlists that fit your platform structure.' },
  { question: 'How is pricing calculated?', answer: 'Pricing is based on the number of concurrent connections (viewers watching simultaneously) you need. We offer tiered plans from 100 to 5,000+ connections. Enterprise plans with custom requirements are available — contact us for a quote.' },
  { question: 'What kind of support do you provide for integration?', answer: 'Our technical team provides full support for integrating our streams into your platform. We offer documentation, API access (on Business plans and above), and direct assistance from our engineers to ensure smooth setup.' },
  { question: 'Can I scale my connections as I grow?', answer: 'Absolutely. You can upgrade your connection package at any time. Many of our clients start with 100 connections and scale up to thousands as their viewer base grows. Just message us on WhatsApp to adjust your plan.' },
];

export default function Restream() {
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
              <Radio className="w-4 h-4 text-brand-400" />
              <span className="text-brand-300 text-sm font-medium">Restream Connections</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Power Your Platform with
              <span className="block bg-gradient-to-r from-[#ffb000] via-[#ff7a18] to-[#ff3d2e] bg-clip-text text-transparent">
                Premium Restream Feeds
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Redistribute our 22,000+ live channels to your own platform with high-bandwidth
              servers, ultra-low latency, and 99.9% uptime. Built for operators who demand reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton label="Discuss Restream Options" />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
              {[
                { value: '10K+', label: 'Max Connections' },
                { value: '< 2s', label: 'Latency' },
                { value: '99.9%', label: 'Uptime SLA' },
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

      {/* Tech Specs Banner */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-[#0d0d15] via-[#10101a] to-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="text-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                <p className="text-white font-semibold text-sm md:text-base">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="restream-packages" className="scroll-mt-24 py-20 md:py-28 border-y border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Connection Plans"
            title="Restream Packages for Every Scale"
            subtitle='From small platforms to large operations, we have the right package for your concurrent viewer base.'
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-b from-brand-600/15 to-brand-900/10 border-2 border-brand-500/40 shadow-xl shadow-brand-600/10'
                    : 'bg-white/[0.03] border border-white/5 hover:border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-warm-400 to-warm-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="text-white text-lg font-semibold mb-1">{plan.name}</h4>
                  <p className="text-2xl sm:text-3xl break-words leading-tight font-bold text-white">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-brand-500' : 'bg-white/10'}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton label="Request This Plan" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Need a custom configuration? Message us on WhatsApp for a tailored quote.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Restream Features"
            title="Enterprise-Grade Infrastructure for Your Streaming Platform"
            subtitle='Built to handle high-volume restream operations with the performance and reliability your viewers expect.'
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

      {/* FAQ */}
      <section className="py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Restream FAQ"
            title="Restream Connection Questions"
            subtitle="Technical details about our restream infrastructure and how it integrates with your platform."
          />
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 section-atmosphere">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="warm-gradient text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Streaming Platform?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get premium restream feeds with enterprise-grade reliability. Contact us to discuss your requirements.
          </p>
          <WhatsAppButton label="Contact Us on WhatsApp" />
        </div>
      </section>
    </div>
  );
}
