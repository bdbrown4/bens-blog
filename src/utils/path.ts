// Build an internal link that respects Astro's configured `base`.
// On GitHub Pages project sites the base is `/bens-blog`, so every
// internal href must be prefixed with it. import.meta.env.BASE_URL
// holds that value (e.g. "/bens-blog/").
const BASE = import.meta.env.BASE_URL;

export function href(path: string = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`.replace(/\/{2,}/g, '/');
}
