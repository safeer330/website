import { ArrowRight, Baby, Clapperboard, Film, Newspaper, Radio, Trophy, Tv } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/constants';

interface Channel {
  name: string;
  logo: string;
  tagline: string;
  quality: 'HD' | 'FHD' | '4K';
}

interface ChannelCategory {
  title: string;
  icon: LucideIcon;
  total: string;
  channels: Channel[];
}

const categories: ChannelCategory[] = [
  {
    title: 'Sports Channels',
    icon: Trophy,
    total: '2,500+',
    channels: [
      { name: 'Sky Sports', logo: '/channels/sky-sports.png', tagline: 'Premier League & F1', quality: '4K' },
      { name: 'beIN Sports', logo: '/channels/bein-sports.png', tagline: 'Football & Multi-Sport', quality: 'FHD' },
      { name: 'TNT Sports', logo: '/channels/tnt-sports.png', tagline: 'Champions League & UFC', quality: 'FHD' },
    ],
  },
  {
    title: 'Entertainment Channels',
    icon: Tv,
    total: '4,000+',
    channels: [
      { name: 'Comedy Central', logo: '/channels/comedy-central.png', tagline: 'Comedy & Stand-up', quality: 'HD' },
      { name: 'E! Entertainment', logo: '/channels/e-entertainment.png', tagline: 'Celebrity & Lifestyle', quality: 'FHD' },
      { name: 'Discovery', logo: '/channels/discovery.png', tagline: 'Documentary & Reality', quality: 'FHD' },
    ],
  },
  {
    title: 'Kids Channels',
    icon: Baby,
    total: '800+',
    channels: [
      { name: 'Cartoon Network', logo: '/channels/cartoon-network.png', tagline: 'Cartoons 24/7', quality: 'HD' },
      { name: 'Disney Channel', logo: '/channels/disney-channel.png', tagline: 'Family & Kids', quality: 'FHD' },
      { name: 'Nickelodeon', logo: '/channels/nickelodeon.png', tagline: 'Kids Shows', quality: 'HD' },
    ],
  },
  {
    title: 'News Channels',
    icon: Newspaper,
    total: '1,500+',
    channels: [
      { name: 'CNN', logo: '/channels/cnn.png', tagline: 'World News Live', quality: 'FHD' },
      { name: 'BBC News', logo: '/channels/bbc-news.png', tagline: 'UK & Global News', quality: 'FHD' },
      { name: 'Al Jazeera', logo: '/channels/al-jazeera.png', tagline: 'International News', quality: 'HD' },
    ],
  },
  {
    title: 'Movies Channels',
    icon: Film,
    total: '3,000+',
    channels: [
      { name: 'HBO', logo: '/channels/hbo.png', tagline: 'Premium Movies', quality: '4K' },
      { name: 'Sky Cinema', logo: '/channels/sky-cinema.png', tagline: 'Blockbuster Hits', quality: 'FHD' },
      { name: 'Cinemax', logo: '/channels/cinemax.png', tagline: 'Action & Thrillers', quality: 'FHD' },
    ],
  },
  {
    title: 'Series',
    icon: Clapperboard,
    total: '60,000+',
    channels: [
      { name: 'AMC', logo: '/channels/amc.png', tagline: 'Drama Series', quality: 'FHD' },
      { name: 'FX', logo: '/channels/fx.png', tagline: 'Original Series', quality: 'HD' },
      { name: 'Showtime', logo: '/channels/showtime.png', tagline: 'Premium Series', quality: 'FHD' },
    ],
  },
];

const getMoreLink = (category: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to see the full list of ${category}.`)}`;

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#141416] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff7a18]/50">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-white/[0.06] to-white/[0.01] px-2.5 pb-2.5 pt-8 sm:px-3 sm:pb-3 sm:pt-9">
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-[#e5333a] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Live
        </span>
        <span className="absolute right-2 top-2 rounded-md bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-[#ffb000] sm:text-[10px]">
          {channel.quality}
        </span>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-2 shadow-inner sm:p-3">
          <img
            src={channel.logo}
            alt={`${channel.name} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="border-t border-white/5 px-3 py-2.5">
        <h4 className="truncate text-sm font-bold text-white">{channel.name}</h4>
        <p className="truncate text-[11px] text-gray-400 sm:text-xs">{channel.tagline}</p>
      </div>
    </div>
  );
}

function MoreCard({ category }: { category: ChannelCategory }) {
  return (
    <a
      href={getMoreLink(category.title)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#ff7a18]/45 bg-gradient-to-br from-[#ffb000]/[0.07] to-[#ff3d2e]/[0.05] p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffb000]/80"
    >
      <span className="warm-gradient text-xl font-extrabold sm:text-2xl">{category.total}</span>
      <span className="text-xs font-semibold text-gray-200 sm:text-sm">More {category.title}</span>
      <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#ffb000] sm:text-xs">
        View All
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export default function ChannelCategories() {
  return (
    <div className="space-y-10 md:space-y-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.title}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-white sm:text-xl md:text-2xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb000]/20 to-[#ff3d2e]/20">
                  <Icon className="h-4 w-4 text-[#ffb000]" />
                </span>
                {category.title}
              </h3>
              <span className="flex shrink-0 items-center gap-1.5 text-xs text-gray-400 sm:text-sm">
                <Radio className="h-3.5 w-3.5 text-[#ff7a18]" />
                {category.total}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {category.channels.map((channel) => (
                <ChannelCard key={channel.name} channel={channel} />
              ))}
              <MoreCard category={category} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
