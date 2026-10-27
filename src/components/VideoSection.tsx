import { Play } from 'lucide-react';
import { YOUTUBE_VIDEO_URL } from '@/config';
import { getYouTubeEmbedUrl } from '@/utils/youtube';

export default function VideoSection() {
  const embedUrl = getYouTubeEmbedUrl(YOUTUBE_VIDEO_URL);

  return (
    <section className="px-6 pt-20 md:pt-28">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="animate-scale-in group relative overflow-hidden rounded-xl border border-ivory-200/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]">
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            {embedUrl ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="Brand presentation"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink-800 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-champagne-500/40 text-champagne-400">
                  <Play className="h-6 w-6 translate-x-0.5" aria-hidden />
                </div>
                <p className="mt-5 font-serif text-xl text-ivory-100">
                  Your video will appear here
                </p>
                <p className="mt-2 text-sm text-ivory-300/60">
                  Set <code className="text-champagne-400">YOUTUBE_VIDEO_URL</code> to
                  enable playback
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
