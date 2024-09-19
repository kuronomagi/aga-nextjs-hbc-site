'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/title/column.lines.h2.title.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { LeftKakko } from '../../svg/decorations/left.kakko';
import { RightKakko } from '../../svg/decorations/right.kakko';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  primaryChildren?: React.ReactNode;
  secondaryChildren?: React.ReactNode;
  tertiaryChildren?: React.ReactNode;
}

const ColumnLinesTitle: React.FC<P> = ({
  wrapperClassName,
  primaryChildren,
  secondaryChildren,
  tertiaryChildren,
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
      <span className={`${styles['inner']}`}>
        <span className={styles['cell-1']}>
          <span className={styles['primary-text']}>{primaryChildren}</span>
        </span>

        <span className={styles['cell-2']}>
          <span className={styles['cell-2-left-icon']}>
            <LeftKakko />
          </span>
          <span className={styles['secondary-text']}>{secondaryChildren}</span>

          <span className={styles['cell-2-right-icon']}>
            <RightKakko />
          </span>
        </span>

        <span className={styles['cell-3']}>
          <span className={styles['tertiary-text']}>{tertiaryChildren}</span>
        </span>
      </span>
    </LC.Wrapper>
  );
};

export default ColumnLinesTitle;
