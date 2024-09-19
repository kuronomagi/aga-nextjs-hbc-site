'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/cards/store.map.card.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  shop: {
    label: string;
    name: string;
    phone: string;
    phoneText: string;
    url: string;
    googleMapUrl: string;
  };
  colorClassName?: string;
  bottomChildren?: React.ReactNode;
  wrapperClassName?: string;
  flexClassName?: string;
}

const StoreMapCard: React.FC<P> = ({
  shop,
  colorClassName,
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
        className={`${styles['wrapper']} ${!!wrapperClassName ? styles[wrapperClassName] : ''} ${!!colorClassName ? styles[colorClassName] : ''}`}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}>
        <div className={`${styles['inner']} ${flexClassName}`}>
          <div className={styles['head']}>
            <p className={styles['head-label']}># {shop.label}</p>
            <p className={styles['head-text']}>{shop.name}</p>
          </div>

          <div className={styles['border']}></div>

          <div className={styles['body']}>
            <div className={styles['body-cell']}>
              <p className={styles['body-label']}>受付電話番号</p>
              <a href={`tel:${shop.phone}`} className={styles['body-text']}>
                {shop.phoneText}
              </a>
            </div>

            <div className={styles['body-cell']}>
              <p className={styles['body-label']}>WEBサイト</p>
              <a
                href={shop.url}
                target='_blank'
                className={`${styles['body-text']} ${styles['body-link-text']} ${!!colorClassName ? styles[colorClassName] : ''}`}>
                {shop.url}
              </a>
            </div>

            <div className={styles['body-cell']}>
              <p className={styles['body-label']}>Google Map</p>
              <iframe className={styles['map']} src={shop.googleMapUrl} loading='lazy'></iframe>
            </div>
          </div>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default StoreMapCard;
