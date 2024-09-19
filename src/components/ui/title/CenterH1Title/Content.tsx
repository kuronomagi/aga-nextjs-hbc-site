'use client';

import React from 'react';
import styles from '~/app/styles/ui/title/center.h1.title.module.css';
import * as LC from './style';
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  title?: string;
  titleNewLineWord?: string;
}

const CenterH1Title: React.FC<P> = ({ wrapperClassName, title, titleNewLineWord, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  const renderTitle = () => {
    if (!title) return null;

    if (titleNewLineWord && title.includes(titleNewLineWord)) {
      const parts = title.split(titleNewLineWord);
      return (
        <h1 className={styles['h1']}>
          {parts[0]}
          <span className={styles['h1-span']}>{titleNewLineWord}</span>
          {parts[1]}
        </h1>
      );
    }

    return <h1 className={styles['h1']}>{title}</h1>;
  };

  return (
    <LC.Wrapper
      className={`${styles['wrapper']} ${wrapperClassName ? styles[wrapperClassName] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles['inner']}>{title && <p className={styles['text']}>{renderTitle()}</p>}</div>
    </LC.Wrapper>
  );
};

export default CenterH1Title;
