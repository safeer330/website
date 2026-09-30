import { useEffect } from 'react';
import {
  Tv, Zap, ShieldCheck, Clock, Globe, Headphones, Play, Star, Film, Trophy, Radio,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PlanCard from '@/components/PlanCard';
import MovieSlider from '@/components/MovieSlider';
import SportsSlider from '@/components/SportsSlider';
import Testimonials from '@/components/Testimonials';
import CompatibleDevices from '@/components/CompatibleDevices';
import WhatsAppButton from '@/components/WhatsAppButton';
import Counter from '@/components/Counter';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const heroImage = 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1600&q=85';
const livingRoomImage = 'https://images.pexels.com/photos/35490296/pexels-photo-35490296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

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

const plans = [
  {
    name: '1 Month', duration: '30 Days Access', price: '€12',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '1 Connection', 'All Devices Supported'],
  },
  {
    name: '3 Months', duration: '90 Days Access', price: '€20',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '1 Connection', 'All Devices Supported'],
  },
  {
    name: '6 Months', duration: '180 Days Access', price: '€40',
    popular: true,
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '2 Connections', '24/7 Priority Support'],
  },
  {
    name: '12 Months', duration: '365 Days Access', price: '€60',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '2 Connections', '24/7 Priority Support'],
  },
];

const movies = [
  { title: 'Midnight Protocol', category: 'Action', rating: '8.5', image: 'https://images.pexels.com/photos/35982145/pexels-photo-35982145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Shadow Strike', category: 'Thriller', rating: '8.2', image: 'https://images.pexels.com/photos/23384428/pexels-photo-23384428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Final Whistle', category: 'Sports', rating: '9.0', image: 'https://images.pexels.com/photos/32190714/pexels-photo-32190714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Fire Storm', category: 'Action', rating: '7.8', image: 'https://images.pexels.com/photos/35982176/pexels-photo-35982176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Night Games', category: 'Drama', rating: '8.7', image: 'https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Battle Ground', category: 'War', rating: '8.9', image: 'https://images.pexels.com/photos/11953753/pexels-photo-11953753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Crimson Sky', category: 'Action', rating: '8.1', image: 'https://images.pexels.com/photos/35982153/pexels-photo-35982153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'The Stadium', category: 'Sports', rating: '9.2', image: 'https://images.pexels.com/photos/30726640/pexels-photo-30726640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

const testimonials = [
  {
    name: 'James Carter', role: 'Subscriber — 2 Years', rating: 5,
    text: 'Been using StreamX for over two years now. The channel selection is insane and the quality never drops. Best IPTV I have tried, hands down.',
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
    text: 'Three years and counting. The reliability is unmatched. I have recommended StreamX to all my friends and family. Worth every penny.',
    avatar: 'https://images.pexels.com/photos/28589292/pexels-photo-28589292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Lila Garcia', role: 'Subscriber — 6 Months', rating: 5,
    text: 'The international channel package is perfect for my family. We get content from three different countries all in one subscription.',
    avatar: 'https://images.pexels.com/photos/13010849/pexels-photo-13010849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
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


export default function Home() {
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
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
          <img src={heroImage} alt="Large-screen television in a modern living room" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#080b14_0%,rgba(8,11,20,0.58)_22%,rgba(8,11,20,0.05)_72%),linear-gradient(0deg,#080b14_0%,transparent_38%)]" />
        </div>
        <div className="absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full bg-[#1488fc]/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[#1488fc]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#080b14_0%,#0b1426_48%,#0a0d17_100%)] opacity-80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-400/25 mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-brand-200 text-sm font-medium">Premium IPTV · 99.9% Uptime</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[4.4rem] font-bold text-white tracking-tight leading-[1.08] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Best IPTV Subscription
                <span className="block bg-gradient-to-r from-[#ffb000] via-[#ff7a18] to-[#ff3d2e] bg-clip-text text-transparent">
                  Provider for Your Home
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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

            <div className="relative w-full animate-fade-in-up lg:hidden" style={{ animationDelay: '0.25s' }}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <img src={heroImage} alt="Home television showing live channels, movies, and sports through the IPTV subscription" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/85 via-transparent to-[#1488fc]/10" />
                  <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between rounded-xl border border-white/15 bg-black/35 backdrop-blur-md px-4 py-3">
                    <div>
                      <p className="text-white font-semibold text-sm">All Channels. All Devices.</p>
                      <p className="text-brand-200 text-xs mt-1">22,000+ channels in 4K, FHD & HD.</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-green-300">
                      <span className="w-2 h-2 rounded-full bg-green-400" /> Streaming live
                    </div>
                  </div>
                </div>
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
      <section className="relative z-10 -mt-2 pb-8 bg-[#080b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibleDevices />
        </div>
      </section>

      {/* Content Categories Banner */}
      <section className="py-16 border-y border-white/5 bg-gradient-to-r from-[#0d0d15] via-[#10101a] to-[#0d0d15]">
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
      <section id="plans" className="py-20 md:py-28 border-y border-white/5 bg-gradient-to-b from-[#0d0d15] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Pricing Plans"
            title="Choose Your Perfect Plan"
            subtitle="Flexible subscription options with no hidden fees. All plans include full access to channels and VOD."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            All plans are activated instantly via WhatsApp. Contact us to get started.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-[#0d0d15] to-[#0a0a0f]">
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

      {/* Sports Slider */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="All Sports Channels"
            title="Never Miss a Game — All Sports Included"
            subtitle="Premier League, UEFA Champions League, NBA, BeIN Sports, TNT Sports, Sky Sports, PPV events, live sports replays and more — all in one subscription."
          />
          <SportsSlider />
        </div>
      </section>

      {/* Movie Slider */}
      <section className="py-20 md:py-28 border-y border-white/5 bg-gradient-to-b from-[#0d0d15] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Trending Now"
            title="Popular Movies & Shows"
            subtitle="A glimpse of what's available in our massive VOD library. New content added daily."
          />
          <MovieSlider movies={movies} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-y border-white/5 bg-gradient-to-b from-[#0d0d15] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Testimonials"
            title="What Our Customers Say"
            subtitle="Join over 50,000 satisfied subscribers who made the switch to premium IPTV."
          />
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
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
      <section id="contact" className="py-20 md:py-28 border-t border-white/5 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d15]">
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
