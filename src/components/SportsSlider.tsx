import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

interface SportItem {
  name: string;
  leagues: string;
  image: string;
}

const sports: SportItem[] = [
  { name: 'Premier League', leagues: 'English Top Flight Football', image: 'https://images.pexels.com/photos/10463646/pexels-photo-10463646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'UEFA Champions League', leagues: 'Europe\'s Elite Club Football', image: 'https://images.pexels.com/photos/35781790/pexels-photo-35781790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'NBA', leagues: 'Professional Basketball', image: 'https://images.pexels.com/photos/30555530/pexels-photo-30555530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'BeIN Sports', leagues: 'Multi-Sport Premium Coverage', image: 'https://images.pexels.com/photos/32190714/pexels-photo-32190714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'TNT Sports', leagues: 'Football, UFC & Boxing', image: 'https://images.pexels.com/photos/31485125/pexels-photo-31485125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Sky Sports', leagues: 'Premier League & F1', image: 'https://images.pexels.com/photos/10864081/pexels-photo-10864081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'PPV Events', leagues: 'Boxing, UFC & Wrestling', image: 'https://images.pexels.com/photos/12860553/pexels-photo-12860553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Grand Slam Tennis', leagues: 'Wimbledon, US Open & More', image: 'https://images.pexels.com/photos/171568/pexels-photo-171568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Cricket World', leagues: 'Test, ODI & T20 Leagues', image: 'https://images.pexels.com/photos/28758998/pexels-photo-28758998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'NHL Hockey', leagues: 'Ice Hockey Live', image: 'https://images.pexels.com/photos/6468928/pexels-photo-6468928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function SportsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let direction = 1;
    const interval = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 5) direction = -1;
      if (el.scrollLeft <= 5) direction = 1;
      el.scrollBy({ left: direction * 2, behavior: 'auto' });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-500"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-500"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
      >
        {sports.map((sport, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[380px] group/card cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-3">
              <img
                src={sport.image}
                alt={sport.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1488fc]/20 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#1488fc] px-3 py-1.5 rounded-full shadow-lg">
                <Trophy className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Live Sports</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-bold text-lg md:text-xl leading-tight">{sport.name}</h4>
                <p className="text-brand-300 text-sm mt-1">{sport.leagues}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
