import { Viewport } from 'next/types';

// const myEnv = process.env.NEXT_PUBLIC_MY_ENV;

// export type ViewportLayout = {
//   width?: string | number;
//   height?: string | number;
//   initialScale?: number;
//   minimumScale?: number;
//   maximumScale?: number;
//   userScalable?: boolean;
//   viewportFit?: 'auto' | 'cover' | 'contain';
//   interactiveWidget?: 'resizes-visual' | 'resizes-content' | 'overlays-content';
// };

export const viewPortParams: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};
