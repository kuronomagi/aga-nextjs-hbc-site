'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/ui/bands/head.band.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// components

// types
interface P extends StyledSystemDefaultProps {
  containerStyleName?: string;
}

const HeadBand: React.FC<P> = ({ containerStyleName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <LC.Wrapper
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      className={`${styles['wrapper']} ${!!containerStyleName && containerStyleName} js-head-band`}>
      <div className={styles['inner']}>
        <div className={styles['content']}>
          <p>お知らせテキストをここに入れてください！</p>
          <p>
            7月は特別なキャンペーン開催中 詳しくは
            <a href='/' target='_blank' className={styles['link-text']}>
              こちらをクリック
            </a>
          </p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          {/* <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p>
          <p>お知らせテキストをここに入れてください！</p> */}
        </div>
      </div>
    </LC.Wrapper>
  );
};

export default HeadBand;
