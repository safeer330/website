export default function CompatibleDevices() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-[#101522] px-5 py-7 md:px-10 md:py-9 shadow-2xl shadow-brand-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,136,252,0.14),transparent_65%)]" />
      <div className="relative text-center">
        <p className="text-brand-300 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] mb-2">
          Works with your favorite devices
        </p>
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
          Stream on virtually any screen
        </h2>
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-black/20 border border-white/5 px-2 py-3 sm:px-5 sm:py-4 md:px-8 md:py-5">
          <img
            src="/images/all_apps-1024x106.png"
            alt="Supported devices including Roku, Samsung, Vizio, LG, Android TV, Fire TV, Apple TV, iOS, Chromecast, PlayStation, Xbox, and Nintendo"
            className="block w-full h-auto max-h-40 object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>
      </div>
    </div>
  );
}
