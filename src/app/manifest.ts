import { MetadataRoute } from 'next';

export const FAVICON = `/favicon.ico`;

// NOTE: app/直下に置くと、next.jsが自動で判断してくれます。
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HBC',
    short_name: 'HBC',
    description: 'HBC',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#16ae67',
    icons: [
      {
        src: FAVICON,
        sizes: 'any',
        type: 'image/x-icon',
      },
      // {
      //   src: 'logo192.png',
      //   type: 'image/png',
      //   sizes: '192x192',
      // },
      // {
      //   src: 'logo512.png',
      //   type: 'image/png',
      //   sizes: '512x512',
      // },
    ],
  };
}
