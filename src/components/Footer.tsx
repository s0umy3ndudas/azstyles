import { BRAND_NAME } from '@/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 px-6 md:mt-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="h-px luxury-divider" />
        <div className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <span className="font-serif text-lg tracking-luxury-sm text-ivory-50">
            {BRAND_NAME}
          </span>
          <p className="text-xs uppercase tracking-luxury-sm text-ivory-300/50">
            © {year} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
