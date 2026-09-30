import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

interface MovieItem {
  title: string;
  category: string;
  rating: string;
  image: string;
}

export default function MovieSlider({ movies }: { movies: MovieItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-600"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-600"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
      >
        {movies.map((movie, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] md:w-[260px] group/card cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[2/3] mb-3">
              <img
                src={movie.image}
                alt={movie.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-warm-600/80 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 text-warm-400 fill-warm-400" />
                <span className="text-white text-xs font-semibold">{movie.rating}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-warm-400 text-xs font-semibold uppercase tracking-wider">{movie.category}</span>
                <h4 className="text-white font-bold text-base md:text-lg leading-tight mt-0.5">{movie.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
