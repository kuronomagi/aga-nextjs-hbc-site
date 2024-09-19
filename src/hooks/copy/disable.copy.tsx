'use client';

import { useEffect } from 'react';

export function useDisableCopy() {
  useEffect(() => {
    const handleCopy = (event: any) => {
      event.preventDefault();
      alert('コピーは禁止されています。');
    };

    const handleCut = (event: any) => {
      event.preventDefault();
      alert('カットは禁止されています。');
    };

    // const handlePaste = (event: any) => {
    //   event.preventDefault();
    //   alert('ペーストは禁止されています。');
    // };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    // document.addEventListener('paste', handlePaste);

    // クリーンアップ関数を設定
    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      // document.removeEventListener('paste', handlePaste);
    };
  }, []);
}
