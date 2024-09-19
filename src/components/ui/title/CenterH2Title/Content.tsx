'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/title/center.h2.title.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  label?: string;
  title?: string;
  description?: string;
}

const CenterH2Title: React.FC<P> = ({
  wrapperClassName,
  label,
  title,
  description,
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
      className={`${styles['wrapper']} ${!!wrapperClassName ? styles[wrapperClassName] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={`${styles['inner']}`}>
        {!!label && (
          <div className={styles['cell-1']}>
            <p className={styles['label']}>{label}</p>
          </div>
        )}

        {!!title && (
          <div className={styles['cell-2']}>
            <h2 className={styles['h2']}>{title}</h2>
          </div>
        )}

        {!!description && (
          <div className={styles['cell-3']}>
            <p className={styles['description']}>{description}</p>
          </div>
        )}
      </div>
    </LC.Wrapper>
  );
};

export default CenterH2Title;
