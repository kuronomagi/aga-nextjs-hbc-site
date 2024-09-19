import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

// NOTE:
//「redux-persist failed to create sync storage. falling back to noop storage. 」エラー回避策
// issue: https://github.com/vercel/next.js/discussions/15687

// 【storageとcreateWebStorage('local')の違い】
// redux-persistライブラリには、データを永続化するためのストレージエンジンがいくつか用意されています。その中でも、storageとcreateWebStorage('local')は、どちらもブラウザのlocalStorageを利用するストレージエンジンです。
// import storage from 'redux-persist/lib/storage'：これはデフォルトのストレージエンジンで、ブラウザのlocalStorageを利用します。
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage'：これはカスタムストレージエンジンを作成するための関数で、引数に'local'を指定するとlocalStorageを利用するストレージエンジンを作成します。
// createWebStorage('local')を使用する主な理由は、サーバーサイドレンダリング(SSR)を行うフレームワーク（例えばNext.jsなど）でredux-persistを使用する際です。SSRでは、windowオブジェクトが存在しないため、localStorageにアクセスできません。
// そのため、createWebStorage('local')を使用して、windowオブジェクトが存在しない場合でもエラーを発生させずに、代わりにNo-op（何もしない）ストレージを使用するように設定します。
// 以上がstorageとcreateWebStorage('local')の主な違いです。
function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage('local');
}
export const storage = createPersistStorage();
