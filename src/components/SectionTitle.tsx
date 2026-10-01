interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({ badge, title, subtitle, center = true, className = 'mb-12' }: SectionTitleProps) {
  return (
    <div className={`${className} ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-warm-400/10 to-warm-600/10 border border-warm-500/25 text-warm-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="warm-gradient text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-gray-400 text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
