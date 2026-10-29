export const BRAND_NAME = 'AZ STYLES';

// Replace this URL with your own YouTube video.
// Supports standard watch URLs (youtube.com/watch?v=ID), youtu.be/ID,
// shorts (youtube.com/shorts/ID), and embed URLs.
export const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// Async handler for a successful lead-form submission.
// Wire this up later to your API, CRM, email service, or webhook.
export async function submitLead(data: {
  fullName: string;
  phone: string;
  email: string;
}): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.log('Lead submitted:', data);
}
