'use client';

// core
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// module css
import styles from '~/app/styles/ui/introductions/introduction.video.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { siteConfig } from '~/constants/site.config';
import { INTRODUCTION_VIDEO } from '~/constants/images';
import Link from 'next/link';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  flexClassName?: string;
}

const IntroductionVideo: React.FC<P> = ({
  wrapperClassName,
  flexClassName = 'flex align-items-center flex-direction-column',
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
  return (
    <>
      <LC.Wrapper
        className={`${styles['wrapper']} ${wrapperClassName}`}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}>
        <div className={`${styles['inner']} ${flexClassName}`}>
          <p className={styles.label}>お電話でのお問い合わせはこちら</p>
          <p className={styles['phone-cell']}>
            <span className={styles.tel}>TEL</span>
            <a href={`tel:${siteConfig.phone}`} className={styles.phone}>
              {siteConfig.phoneText}
            </a>
          </p>

          <Link href='/' target='_blank' className={styles['image-cell']}>
            <Image src={INTRODUCTION_VIDEO} width={313} height={178} alt='' className={styles.image} />
          </Link>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default IntroductionVideo;
