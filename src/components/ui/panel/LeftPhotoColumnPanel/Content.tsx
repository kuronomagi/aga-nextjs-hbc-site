'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/panel/left.photo.column.panel.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Image from 'next/image';
import { Desktop, Mobile } from '~/lib/react-responsive/component';
import Link from 'next/link';
import { INTRODUCTION_VIDEO } from '~/constants/images';

interface P extends StyledSystemDefaultProps {
  photo: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  label: string;
  title: string;
  text: string;
  spText?: string;
  bottomChildren?: React.ReactNode;
  wrapperClassName?: string;
  flexClassName?: string;
}

const LeftPhotoColumnPanel: React.FC<P> = ({
  photo,
  label,
  title,
  text,
  spText,
  bottomChildren,
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
          <div className={styles['column']}>
            <div className={styles['right-col']}>
              <p className={styles.label}>{label}</p>
              <p className={styles.title}>{title}</p>
              <div className={styles['col-border']}>
                <div className={styles['border']} />
              </div>

              <Desktop>
                <p className={styles.text}>{text}</p>
              </Desktop>
              <Mobile>
                <p className={styles.text}>{spText || text}</p>
              </Mobile>
            </div>

            <div className={styles['left-col']}>
              <Image
                className={styles.image}
                src={photo.url}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
              />
            </div>
          </div>

          <Link href='/' target='_blank' className={styles['video-image-cell']}>
            <Image src={INTRODUCTION_VIDEO} width={313} height={178} alt='' className={styles['video-image']} />
          </Link>

          {!!bottomChildren && <>{bottomChildren}</>}
        </div>
      </LC.Wrapper>
    </>
  );
};

export default LeftPhotoColumnPanel;
