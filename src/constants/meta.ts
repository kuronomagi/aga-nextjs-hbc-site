// import { Metadata } from 'next/types';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;
const siteName = process.env.NEXT_PUBLIC_TITLE;
const title = process.env.NEXT_PUBLIC_META_TITLE || '';
const description = process.env.NEXT_PUBLIC_META_DESCRIPTION;
const url = process.env.NEXT_PUBLIC_META_URL;
const keywords = process.env.NEXT_PUBLIC_META_KEYWORDS;

// import Favicon from '/public/favicon.ico';

export const metaParams = {
  charset: 'utf-8',
  title: {
    template: '%s | 天神ホリスティックビューティークリニック',
    default: title,
  },
  description: '',
  keywords: '',
  // openGraph: {
  //   title: siteName,
  //   description,
  //   url,
  //   siteName,
  //   locale: 'ja_JP',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteName,
  //   description,
  //   site: '',
  //   creator: '',
  // },
  // verification: {
  //   google: '',
  // },
  alternates: {
    canonical: url,
  },
  robots: {
    index: myEnv == 'production' ? true : false,
  },
  verification: {
    google: '',
  },
  // icons: [{ rel: 'icon', url: Favicon.src }],
};

export const unIndexParams = {
  robots: {
    index: false,
  },
};

export const canonicalHost = process.env.NEXT_PUBLIC_CLIENT_PATH || 'https://tenjin-hbc.jp';
