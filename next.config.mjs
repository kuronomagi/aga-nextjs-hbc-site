import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  output: 'export', // for SSG
  // output: 'standalone', // ビルドパッケージに含めるファイルをまとめる for aws-lambda-web-adapter
  distDir: 'dist', // ビルドしたアセットを dist ディレクトリに出力 for aws-lambda-web-adapter
  images: {
    domains: ['localhost', 'img.freepik.com', 'placehold.jp'],
    unoptimized: true,
  },
  transpilePackages: ['styled-system', 'redux-persist'],
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
            // 追加：SVGをReactコンポーネントとしてエクスポート
            exportType: 'component',
          },
        },
      ],
    });
    return config;
  },
  // redirects: async () => redirects,
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'spectacle-v6',
  project: '',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
