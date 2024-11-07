'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/rounded.with.arrow.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { RightArrow } from '../../svg/decorations/right.arrow';

interface P extends StyledSystemDefaultProps {
  onClick?: () => void;
  href?: string;
  text: string;
  layoutClassName?: string;
  sizeClassName?: string;
  opacityClassName?: string;
  className?: string;
  gtagSendTo?: string;
}

// Google Analytics型定義
interface Window {
  gtag: (
    command: 'event',
    action: string,
    params: {
      send_to: string;
      event_callback?: () => void;
    },
  ) => void;
}

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        send_to: string;
        event_callback?: () => void;
      },
    ) => void;
  }
}

const RoundedWithArrowButton: React.FC<P> = ({
  onClick,
  href,
  text,
  layoutClassName,
  sizeClassName,
  opacityClassName,
  className,
  gtagSendTo,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
  const handleConversion = (e: React.MouseEvent) => {
    console.log('=== handleConversion ===');
    if (href) {
      e.preventDefault();

      // gtagSendToが指定されている場合のみコンバージョントラッキングを実行
      if (gtagSendTo) {
        // window.gtagが存在するか確認
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: gtagSendTo,
            event_callback: function () {
              window.location.href = href;
            },
          });
          return;
        } else {
          // gtagが利用できない場合は通常のページ遷移
          window.location.href = href;
          return;
        }
      }

      // コンバージョントラッキングがない場合は即座にページ遷移
      window.location.href = href;
    }
    // 既存のonClickハンドラーがあれば実行
    onClick?.();
  };

  return !!href && !!gtagSendTo ? (
    <LC.LinkWrapper
      href={href}
      target='_blank'
      onClick={handleConversion}
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${!!sizeClassName ? styles[sizeClassName] : ''} ${!!opacityClassName ? styles[opacityClassName] : ''} ${!!className ? styles[className] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <p className={`${styles['text']}`}>{text}</p>
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <RightArrow />
          </div>
        </div>
      </div>
    </LC.LinkWrapper>
  ) : !!href ? (
    <LC.LinkWrapper
      href={href}
      target='_blank'
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${!!sizeClassName ? styles[sizeClassName] : ''} ${!!opacityClassName ? styles[opacityClassName] : ''} ${!!className ? styles[className] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <p className={`${styles['text']}`}>{text}</p>
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <RightArrow />
          </div>
        </div>
      </div>
    </LC.LinkWrapper>
  ) : (
    <LC.Wrapper
      onClick={onClick}
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${!!sizeClassName ? styles[sizeClassName] : ''} ${!!opacityClassName ? styles[opacityClassName] : ''} ${!!className ? styles[className] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <p className={`${styles['text']}`}>{text}</p>
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <RightArrow />
          </div>
        </div>
      </div>
    </LC.Wrapper>
  );
};

export default RoundedWithArrowButton;
