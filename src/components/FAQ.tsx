import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 shadow-lg shadow-brand-950/20 ${
            openIndex === i
              ? 'bg-white/[0.04] border-brand-500/30'
              : 'bg-white/[0.02] border-white/5 hover:border-white/10'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-white font-medium text-base md:text-lg">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
