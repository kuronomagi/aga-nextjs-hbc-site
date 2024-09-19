'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/square.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  onClick: () => void;
  text: string;
  wrapperClassName?: string;
}

const SquareButton: React.FC<P> = ({ onClick, text, wrapperClassName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <LC.Wrapper
      onClick={onClick}
      className={`${styles['wrapper']} ${wrapperClassName}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <p className={`${styles['text']}`}>{text}</p>
      </div>
    </LC.Wrapper>
  );
};

export default SquareButton;
