import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-950/20"
        >
          <Quote className="w-10 h-10 text-brand-600/30 mb-4" />
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`w-4 h-4 ${idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/20"
            />
            <div>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
