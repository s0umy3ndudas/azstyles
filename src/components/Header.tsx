import { BRAND_NAME } from '@/config';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-7 sm:px-10 md:py-9">
        <a href="#top" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center border border-champagne-500/50 font-serif text-lg text-champagne-400 transition-colors duration-500 group-hover:border-champagne-400"
          >
            L
          </span>
          <span className="font-serif text-xl tracking-luxury-sm text-ivory-50 sm:text-2xl">
            {BRAND_NAME}
          </span>
        </a>

        <span className="hidden text-[11px] uppercase tracking-luxury text-ivory-300/60 sm:block">
          Est. MMXXVI
        </span>
      </div>
      <div className="h-px luxury-divider" />
    </header>
  );
}
