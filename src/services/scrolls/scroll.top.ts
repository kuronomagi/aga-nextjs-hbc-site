import { useState, useEffect } from 'react';

function scrollTop(): number {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

// カスタムフックを作成
export function useScrollTop() {
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    // const position = window.pageYOffset;
    const position = scrollTop();
    if (position >= 80) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', onScroll);

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // 空の依存配列を指定して、エフェクトをマウントとアンマウント時にのみ実行

  return { isTop, setIsTop, onScroll };
}

export function handleTopPage() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
