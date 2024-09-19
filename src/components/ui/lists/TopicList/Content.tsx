'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// module css
import styles from '~/app/styles/ui/lists/topic.list.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  data: { text: string; label?: string; url: string }[];
  wrapperClassName?: string;
  labelClassName?: string;
}

const TopicList: React.FC<P> = ({ data, wrapperClassName, labelClassName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
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
      {!!data &&
        data.length > 0 &&
        data.map((list, index) => {
          return (
            <>
              <Link
                href=''
                className={`${styles.inner} ${index == 0 ? `${styles['border-top']} ${styles['border-bottom']}` : styles['border-bottom']}`}>
                {!!list.label && (
                  <div className={`${styles['label-container']}`}>
                    <p className={`${styles['label']} ${!!labelClassName ? labelClassName : ''}`}>{list.label}</p>
                  </div>
                )}

                <div className={`${styles['text-container']}`}>
                  <p className={`${styles.text}`}>{list.text}</p>
                </div>
              </Link>
            </>
          );
        })}
    </LC.Wrapper>
  );
};

export default TopicList;
