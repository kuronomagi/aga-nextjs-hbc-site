'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/scroll.top.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
// import { RightKakko } from '../../svg/decorations/right.kakko';
import { RightArrow } from '../../svg/decorations/right.arrow';

interface P extends StyledSystemDefaultProps {
  onClick: () => void;
  layoutClassName?: string;
}

const ScrollTopButton: React.FC<P> = ({ onClick, layoutClassName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <LC.Wrapper
      onClick={onClick}
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} `}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <RightArrow />
      </div>
    </LC.Wrapper>
  );
};

export default ScrollTopButton;
