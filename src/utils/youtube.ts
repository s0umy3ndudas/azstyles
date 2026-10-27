export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace('www.', '');
    let id = '';

    if (host === 'youtu.be') {
      id = u.pathname.slice(1);
    } else if (host === 'youtube.com') {
      if (u.pathname === '/watch') {
        id = u.searchParams.get('v') ?? '';
      } else if (u.pathname.startsWith('/shorts/')) {
        id = u.pathname.split('/')[2] ?? '';
      } else if (u.pathname.startsWith('/embed/')) {
        id = u.pathname.split('/')[2] ?? '';
      }
    } else {
      return null;
    }

    id = id.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}
