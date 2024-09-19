import { Noto_Sans_JP } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '600', '700'], // セミボールド（600）を含む
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
});
