import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tv, Zap, ShieldCheck, Clock, Globe, Headphones, Play, Star, Film, Trophy, Radio,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PlanCard from '@/components/PlanCard';
import ChannelCategories from '@/components/ChannelCategories';
import Testimonials from '@/components/Testimonials';
import CompatibleDevices from '@/components/CompatibleDevices';
import WhatsAppButton from '@/components/WhatsAppButton';
import Counter from '@/components/Counter';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import RestreamPlanGrid from '@/components/RestreamPlanGrid';
import { WHATSAPP_NUMBER } from '@/constants';
import { resellerCreditPlans, subscriptionPlans } from '@/data/pricingPlans';

const heroImage = 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1600&q=85';
const livingRoomImage = 'https://images.pexels.com/photos/35490296/pexels-photo-35490296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const resellerPanels = ['Mega OTT', 'Trex OTT', 'Golden OTT', 'Strongk OTT', 'Lion OTT', 'B1G OTT'];

const getPanelWhatsAppLink = (panelName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in the ${panelName} reseller panel.`)}`;

const features = [
  { icon: Tv, title: '22,000+ Live Channels', desc: 'Access over 22,000 live TV channels from around the world in HD, FHD, and 4K quality.' },
  { icon: Film, title: '120,000+ Movies & Series', desc: 'Massive VOD library of 120,000+ titles updated daily with the latest blockbusters and shows.' },
  { icon: Radio, title: '15,000+ VOD Channels', desc: '15,000+ on-demand channels covering every genre, niche, and language you can think of.' },
  { icon: Zap, title: 'Anti-Freeze Technology', desc: 'Our advanced servers ensure buffer-free streaming with ultra-low latency technology.' },
  { icon: ShieldCheck, title: 'Secure & Private', desc: 'Your privacy matters. Encrypted connections keep your streaming activity safe.' },
  { icon: Clock, title: '99.9% Uptime', desc: 'Enterprise-grade infrastructure guarantees reliable service around the clock.' },
  { icon: Globe, title: 'Global Content', desc: 'Channels from USA, UK, Canada, Europe, Asia, Middle East and Latin America.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Our dedicated support team is available around the clock to help you anytime.' },
];

const testimonials = [
  {
    name: 'James Carter', role: 'Subscriber — 2 Years', rating: 5,
    text: 'Been using Nice IPTV for over two years now. The channel selection is insane and the quality never drops. Best IPTV I have tried, hands down.',
    avatar: 'https://images.pexels.com/photos/3228887/pexels-photo-3228887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Sarah Mitchell', role: 'Subscriber — 1 Year', rating: 5,
    text: 'I cancelled my cable subscription after getting this. All my favorite shows, live sports, and movies in one place. The 4K quality is stunning.',
    avatar: 'https://images.pexels.com/photos/39598425/pexels-photo-39598425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'David Okoye', role: 'Subscriber — 8 Months', rating: 5,
    text: 'The anti-freeze tech really works. I watched the entire Champions League without a single buffer. Support team is super responsive too.',
    avatar: 'https://images.pexels.com/photos/37159572/pexels-photo-37159572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Emma Wilson', role: 'Subscriber — 1.5 Years', rating: 5,
    text: 'Setup was effortless and it works perfectly on my Fire Stick and phone. The VOD library is updated constantly with new releases.',
    avatar: 'https://images.pexels.com/photos/36093241/pexels-photo-36093241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Michael Brown', role: 'Subscriber — 3 Years', rating: 5,
    text: 'Three years and counting. The reliability is unmatched. I have recommended Nice IPTV to all my friends and family. Worth every penny.',
    avatar: 'https://images.pexels.com/photos/28589292/pexels-photo-28589292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Lila Garcia', role: 'Subscriber — 6 Months', rating: 5,
    text: 'The international channel package is perfect for my family. We get content from three different countries all in one subscription.',
    avatar: 'https://images.pexels.com/photos/13010849/pexels-photo-13010849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const coverageCountries = [
  { code: 'US', name: 'USA' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'SE', name: 'Sweden' },
  { code: 'AU', name: 'Australia' },
  { code: 'IE', name: 'Ireland' },
  { code: 'BE', name: 'Belgium' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'AT', name: 'Austria' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'GR', name: 'Greece' },
  { code: 'PL', name: 'Poland' },
  { code: 'AE', name: 'UAE' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'QA', name: 'Qatar' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'BR', name: 'Brazil' },
  { code: 'MX', name: 'Mexico' },
  { code: 'AR', name: 'Argentina' },
  { code: 'IN', name: 'India' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'NG', name: 'Nigeria' },
];

const faqItems = [
  { question: 'What is IPTV and how does it work?', answer: 'IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet instead of traditional cable or satellite. All you need is an internet connection and a compatible device — Smart TV, phone, tablet, Fire Stick, or PC.' },
  { question: 'Which devices are supported?', answer: 'Our service works on all major devices including Smart TVs (Samsung, LG, etc.), Android & iOS phones/tablets, Amazon Fire Stick, Chromecast, MAG boxes, PC, Mac, and more. We support all popular IPTV players.' },
  { question: 'How fast does my internet need to be?', answer: 'For HD streaming we recommend at least 10 Mbps, for FHD 15 Mbps, and for 4K content 25 Mbps or higher. A stable wired or strong Wi-Fi connection gives the best experience.' },
  { question: 'How quickly do I get my subscription after ordering?', answer: 'Subscriptions are activated instantly. Once you contact us on WhatsApp and complete your order, you will receive your login credentials within minutes.' },
  { question: 'Can I use my subscription on multiple devices?', answer: 'Depending on your plan, you get 1 or 2 simultaneous connections. This means you can watch on multiple devices, but only the allowed number at the same time. Need more? Check our multi-connection plans.' },
  { question: 'Do you offer a free trial?', answer: 'Yes! We offer a 24-hour free trial so you can test the service before committing. Contact us on WhatsApp to request your trial.' },
  { question: 'What if I experience buffering or issues?', answer: 'Our anti-freeze servers and 24/7 support team ensure minimal issues. If you do experience problems, contact us on WhatsApp and we will resolve it quickly. We also provide setup guides for optimal streaming.' },
  { question: 'Is there a refund policy?', answer: 'We stand behind our service quality. If you experience persistent issues that we cannot resolve within the first 24 hours, we offer a full refund. See our Refund Policy for details.' },
];

const pricingTabs = {
  subscriptions: {
    label: 'Subscriptions',
    badge: 'Pricing Plans',
    title: 'Subscription Plans',
    subtitle: 'Flexible subscription options with no hidden fees. All plans include full access to channels and VOD.',
    note: 'All plans are activated instantly via WhatsApp. Contact us to get started.',
  },
  credits: {
    label: 'Credits',
    badge: 'Reseller Credits',
    title: 'Credit Packages',
    subtitle: 'Buy credits at wholesale prices. The more you buy, the lower your per-credit cost and the higher your profit margin.',
    note: 'Each credit creates one subscription. You choose the duration and price for your clients.',
  },
  restream: {
    label: 'Restream',
    badge: 'Connection Plans',
    title: 'Restream Packages',
    subtitle: 'Choose a connection tier for your concurrent viewer base, from smaller platforms to large operations.',
    note: 'Need a custom configuration? Message us on WhatsApp for a tailored quote.',
  },
} as const;

type PricingTabId = keyof typeof pricingTabs;

export default function Home() {
  const [activePricingTab, setActivePricingTab] = useState<PricingTabId>('subscriptions');
  const activePricing = pricingTabs[activePricingTab];

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#080b14]" />
        <div className="absolute inset-x-0 top-0 h-[76vh] min-h-[440px] max-h-[680px] overflow-hidden lg:hidden">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[center_38%] opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,20,0.40)_0%,rgba(8,11,20,0.60)_38%,rgba(8,11,20,0.86)_70%,#080b14_100%)]" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
          <img src={heroImage} alt="Large-screen television in a modern living room" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#080b14_0%,rgba(8,11,20,0.58)_22%,rgba(8,11,20,0.05)_72%),linear-gradient(0deg,#080b14_0%,transparent_38%)]" />
        </div>
        <div className="absolute -top-40 right-[-10%] hidden h-[680px] w-[680px] rounded-full bg-[#1488fc]/20 blur-[130px] lg:block" />
        <div className="absolute bottom-[-20%] left-[-10%] hidden h-[520px] w-[520px] rounded-full bg-[#1488fc]/10 blur-[120px] lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(110deg,#080b14_0%,#0b1426_48%,#0a0d17_100%)] opacity-80 lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-400/25 mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-brand-200 text-sm font-medium">Premium IPTV · 99.9% Uptime</span>
              </div>

              <h1 className="text-[2rem] md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Best IPTV Provider
                <span className="block bg-gradient-to-r from-[#ffb000] via-[#ff7a18] to-[#ff3d2e] bg-clip-text text-transparent">
                  Subscriptions, Credits, Panels &amp; Restream
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Enjoy 22,000+ live channels, 120,000+ movies and series, and 15,000+ VOD channels in stunning 4K, FHD and HD quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <WhatsAppButton label="Free 24-Hour Trial" />
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 hover:border-brand-400/40 transition-all duration-300"
                >
                  <Play className="w-5 h-5 text-brand-400" /> View Plans
                </a>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Counter target={22000} suffix="+" label="Live Channels" />
                <Counter target={120000} suffix="+" label="Movies & Shows" />
                <Counter target={15000} suffix="+" label="VOD Channels" />
                <Counter target={50000} suffix="+" label="Happy Users" />
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-brand-400/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-brand-300/70" />
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="relative z-10 -mt-2 pb-8 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibleDevices />
        </div>
      </section>

      {/* Reseller Panels */}
      <section id="panels" className="scroll-mt-24 border-y border-white/10 py-16 md:py-20 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Reseller Panels"
            title="Panels With Good Price"
            subtitle="Choose a panel and contact us on WhatsApp for current pricing and access details."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {resellerPanels.map((panelName) => (
              <article
                key={panelName}
                className="group warm-gradient-border flex min-w-0 flex-col rounded-2xl p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-warm-900/10 md:p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-warm-400/30 bg-warm-500/10">
                    <img src="/assets/iptv-panel.svg" alt="" aria-hidden="true" className="h-6 w-6 brightness-0 invert" />
                  </span>
                  <span className="rounded-full border border-warm-500/45 bg-gradient-to-r from-warm-400/15 via-warm-500/15 to-warm-600/15 px-3 py-1.5 text-[11px] font-bold uppercase">
                    <span className="warm-gradient">Reseller Panel</span>
                  </span>
                </div>
                <h3 className="mb-2 break-words text-xl font-bold text-white">{panelName}</h3>
                <p className="mb-7 text-sm leading-relaxed text-gray-400">
                  Contact us for current pricing, availability, and panel details.
                </p>
                <a
                  href={getPanelWhatsAppLink(panelName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-warm-500/55 bg-gradient-to-r from-warm-400/10 to-warm-600/10 px-4 py-3 text-sm font-semibold transition-all hover:border-warm-400/90 hover:from-warm-400/20 hover:to-warm-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101522]"
                >
                  <span className="warm-gradient">Get Details</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories Banner */}
      <section className="py-16 border-y border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Radio, title: 'Live TV Channels', count: '22,000+', desc: 'Global channels in HD, FHD & 4K quality' },
              { icon: Film, title: 'Movies & Series', count: '120,000+', desc: 'Blockbusters, classics & binge-worthy shows' },
              { icon: Trophy, title: 'VOD Channels', count: '15,000+', desc: 'On-demand content for every genre & niche' },
            ].map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all duration-300 group shadow-lg shadow-brand-950/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-600/10 flex items-center justify-center group-hover:bg-brand-600/20 transition-colors flex-shrink-0">
                  <cat.icon className="w-7 h-7 text-brand-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                    <span className="text-brand-400 text-sm font-semibold">{cat.count}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-0.5">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 md:py-28 border-y border-white/10 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col items-center gap-8 md:mb-10">
            <div className="inline-grid w-full max-w-xl grid-cols-3 overflow-hidden rounded-xl border border-warm-500/35 bg-black/20" role="tablist" aria-label="Pricing categories">
              {(Object.keys(pricingTabs) as PricingTabId[]).map((tabId) => {
                const tab = pricingTabs[tabId];
                const isActive = activePricingTab === tabId;

                return (
                  <button
                    key={tabId}
                    id={`pricing-tab-${tabId}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="home-pricing-panel"
                    onClick={() => setActivePricingTab(tabId)}
                    className={`min-h-12 px-1 text-[11px] font-semibold transition-colors sm:px-4 sm:text-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-warm-400/10 via-warm-500/10 to-warm-600/10'
                        : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'warm-gradient' : ''}>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <SectionTitle badge={activePricing.badge} title={activePricing.title} subtitle={activePricing.subtitle} className="mb-0 md:mb-12" />
          </div>

          <div id="home-pricing-panel" role="tabpanel" aria-labelledby={`pricing-tab-${activePricingTab}`} tabIndex={0}>
            {activePricingTab === 'restream' ? (
              <RestreamPlanGrid />
            ) : (
              <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 md:pt-8 lg:grid-cols-4">
                {(activePricingTab === 'subscriptions' ? subscriptionPlans : resellerCreditPlans).map((plan) => (
                  <PlanCard key={plan.name} plan={plan} />
                ))}
              </div>
            )}
            <p className="mt-8 text-center text-sm text-gray-500">{activePricing.note}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Choose Us"
            title="Everything You Need for the Ultimate Streaming Experience"
            subtitle="Cutting-edge technology, massive content library, and rock-solid reliability make us the #1 choice for IPTV."
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

      {/* Showcase Section */}
      <section className="py-20 border-y border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-warm-600/10 rounded-3xl blur-2xl" />
              <img
                src={livingRoomImage}
                alt="Streaming on Smart TV"
                loading="lazy"
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-warm-400/10 to-warm-600/10 border border-warm-500/25 text-warm-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Seamless Experience
              </span>
              <h2 className="warm-gradient text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Your favorite content, on every screen in your home
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Whether it's movie night on the big screen, catching up on shows during your commute,
                or watching the big game at a friend's house — your subscription goes wherever you do.
              </p>
              <ul className="space-y-4">
                {[
                  'Instant activation — start watching in minutes',
                  'No expensive equipment or installation required',
                  'Works with your existing internet connection',
                  'Switch between devices seamlessly with one account',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-warm-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3.5 h-3.5 text-warm-400 fill-warm-400" />
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-20 md:py-28 border-b border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Channel Lineup"
            title="Top Channels in Every Category"
            subtitle="Sports, entertainment, kids, news, movies and series — here are a few highlights from our 22,000+ live channels."
          />
          <ChannelCategories />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-y border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Testimonials"
            title="What Our Customers Say"
            subtitle="Join over 50,000 satisfied subscribers who made the switch to premium IPTV."
          />
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Global Coverage */}
      <section className="border-b border-white/5 py-16 md:py-20 section-atmosphere">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Global Coverage"
            title="IPTV Available Worldwide"
            subtitle="Explore supported locations across North America, Europe, the Middle East, Asia, Africa, and Latin America. Contact us to confirm availability in your country."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
            {coverageCountries.map((country) => (
              <div
                key={country.code}
                className="flex min-h-16 min-w-0 items-center gap-2.5 rounded-xl border border-warm-500/20 bg-gradient-to-br from-white/[0.045] to-white/[0.015] px-3 py-3 transition-colors hover:border-warm-400/45 sm:gap-3 sm:px-4"
              >
                <img
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={`${country.name} flag`}
                  width={32}
                  height={24}
                  loading="lazy"
                  className="h-6 w-8 shrink-0 rounded-sm object-cover shadow-sm ring-1 ring-white/10"
                />
                <span className="min-w-0 text-xs font-semibold leading-snug text-gray-200 sm:text-sm">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers. Can't find what you're looking for? Message us on WhatsApp."
          />
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 border-t border-white/5 section-atmosphere">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Contact Us"
            title="Get In Touch"
            subtitle="Ready to start streaming? Reach out and we'll get you set up in minutes."
          />
          <Contact />
        </div>
      </section>
    </div>
  );
}
