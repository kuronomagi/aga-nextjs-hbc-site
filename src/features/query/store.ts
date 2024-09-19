import { cache } from 'react';
import { QueryClient, dehydrate } from '@tanstack/query-core';

import { baseUrl, paths } from '~/features/query/source';
// import {} from '~/features/query/seeekApiSchemas';
import { isBlank } from '~/services/checkBlank';
import { redirect } from 'next/navigation';
// import { redirect } from 'next/navigation';

export const myDehydrate = dehydrate;
export const getQueryClient = cache(() => new QueryClient());

export const queryKeys = {
  quizQuestion: 'quiz-question',
};

export const queryStates = {
  answerState: 'answer-state',
};

export type GetSlugOnly = {
  slug: string;
};

type ArticleDataType = {
  id: number;
  slug: string;
  title: string;
  thumbnail: any;
  category: number[];
  date: Date;
  url: string;
};

// ======================
// お知らせ
// ======================
export async function getRecentNews() {
  // console.log('====== getRecentNews  =======', query);
  const path = `${baseUrl}${paths.search['recent-news']}`;

  const res = await fetch(path, {
    // headers: {
    //   uid: auth?.uid || '',
    //   client: auth?.client || '',
    //   'access-token': auth?.accessToken || '',
    // },
    cache: 'no-store',
  });
  const headers: {} = res.headers;
  const status: {} = res.status;

  // console.log('=== status ===', status);

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error('お知らせ一覧の取得ができませんでした。');
  }

  // console.logなどで res.json()をすると 「Body is unusable fetch」のエラーが発生します。
  const body = await res.json();

  // console.log('■■■■ body ■■■■', body);

  return body as {
    news: ArticleDataType[];
    errors: any;
  };
}

// ======================
// ブログ
// ======================
export async function getRecentBlogs() {
  // console.log('====== getRecentNews  =======', query);
  const path = `${baseUrl}${paths.search['recent-blogs']}`;

  const res = await fetch(path, {
    // headers: {
    //   uid: auth?.uid || '',
    //   client: auth?.client || '',
    //   'access-token': auth?.accessToken || '',
    // },
    cache: 'no-store',
  });
  const headers: {} = res.headers;
  const status: {} = res.status;

  // console.log('=== status ===', status);

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error('ブログ一覧の取得ができませんでした。');
  }

  // console.logなどで res.json()をすると 「Body is unusable fetch」のエラーが発生します。
  const body = await res.json();

  // console.log('■■■■ body ■■■■', body);

  return body as {
    blogs: ArticleDataType[];
    errors: any;
  };
}
