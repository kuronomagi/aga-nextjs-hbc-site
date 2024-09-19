export const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SERVER_PATH || '';

export const paths = {
  // url: "/api/quizzes/v1/quizzes/{quizId}",
  search: {
    // NEWS一覧
    // http://test-hbc.spectacle-inc.com/wp-json/api/recent-news
    'recent-news': '/wp-json/api/recent-news',
    'recent-blogs': '/wp-json/api/recent-blogs',

    // 記事詳細
    // http://test-hbc.spectacle-inc.com/wp-json/api/search-posts?id=225
    'search-posts': '/wp-json/api/search-posts',

    // 'media-topics': '/api/v1/media_topics/search',
    // 'recent-media-articles': '/api/v1/media_articles/recent',
    // 'media-lyrics': '/api/v1/media_lyrics/search',
    // 'media-artists': '/api/v1/media_artists/search',
    // 'media-lyricists': '/api/v1/media_lyricists/search',
    // 'media-composers': '/api/v1/media_composers/search',
    // 'media-live-concerts': '/api/v1/media_live_concerts/search',
    // 'media-playlists': '/api/v1/media_playlists/search',
    // 'media-curators': '/api/v1/media_curators/search', // NOTE: 24/6/14時点ではオンクラのみのため、使用ない。back APIは作成済です。
  },
  // 'media-articles': '/api/v1/media_articles/',
  // 'media-topics': '/api/v1/media_topics/',
  // 'media-lyrics': '/api/v1/media_lyrics/',
  // 'media-artists': '/api/v1/media_artists/',
  // 'media-lyricists': '/api/v1/media_lyricists',
  // 'media-composers': '/api/v1/media_composers',
  // 'media-live-concerts': '/api/v1/media_live_concerts',
  // 'media-playlists': '/api/v1/media_playlists',
  // 'media-curators': '/api/v1/media_curators',
};
