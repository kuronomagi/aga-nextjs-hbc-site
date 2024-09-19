'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/boards/counter.label.board.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  label: string;
  text: string;
  maxWidth?: number | string;
  wrapperClassName?: string;
  flexClassName?: string;
}

const CounterLabelBoard: React.FC<P> = ({
  label,
  text,
  maxWidth = 'inherit',
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
        style={{ maxWidth: maxWidth }}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}>
        <div className={`${styles['inner']} ${flexClassName}`}>
          <p className={styles.label}>{label}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default CounterLabelBoard;
