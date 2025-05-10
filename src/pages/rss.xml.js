import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'My Astro Tutorial',
    description: 'Building Astro\'s tutorial blog',
    site: "https://joyful-sunflower-9a338b.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}