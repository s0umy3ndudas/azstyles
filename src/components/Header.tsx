import { BRAND_NAME } from '@/config';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-center px-4 py-5 sm:px-8 sm:py-7 md:py-9">
  <img
    src="https://res.cloudinary.com/dsccaob3y/image/upload/v1793292600/azstyles-white_rnnqua.png"
    alt="AZ Styles"
    className="h-14 w-auto max-w-full object-contain sm:h-16 md:h-20"
  />
</div>

      <div className="h-px luxury-divider" />

    </header>
  );
}
