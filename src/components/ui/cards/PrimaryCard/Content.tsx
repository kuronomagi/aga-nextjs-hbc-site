'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/cards/primary.card.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Image from 'next/image';
import { Desktop, Mobile } from '~/lib/react-responsive/component';
import Link from 'next/link';
import { INTRODUCTION_VIDEO } from '~/constants/images';
import { Check } from '../../svg/decorations/check';
import Space from '~/components/utility/Space';

interface P extends StyledSystemDefaultProps {
  title: string;
  description: string;
  list: {
    title: string;
    data: {
      text: string;
    }[];
  };

  bottomChildren?: React.ReactNode;
  wrapperClassName?: string;
  flexClassName?: string;
}

const PrimaryCard: React.FC<P> = ({
  title,
  description,
  list,

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
          <div className={styles['head']}>
            <p className={styles['head-text']}>{title}</p>
          </div>

          <div className={styles['body']}>
            <p className={styles['text']}>{description}</p>

            {!!list && list.data.length > 0 && (
              <>
                <Space mt={['5px', '10px']} />
                <div>
                  <p className={styles['list-title']}>{list.title}</p>

                  <Space mt={['3px', '10px']} />
                  <div className={styles['list-item-grid-wrapper']}>
                    {list.data.map((v, i) => {
                      return (
                        <div className={styles['list-item']} key={`list-item-${i}`}>
                          <div className={styles['list-item-icon']}>
                            <Check />
                          </div>
                          <p className={styles['list-text']}>{v.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {!!bottomChildren && <div className={styles['bottom-wrapper']}>{bottomChildren}</div>}
          </div>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default PrimaryCard;
