'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/rounded.with.check.icon.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { CheckCircle } from '../../svg/decorations/check.circle';

interface P extends StyledSystemDefaultProps {
  onClick: () => void;
  text: string;
  isChecked: boolean;
  layoutClassName?: string;
}

const RoundedWithCheckIconButton: React.FC<P> = ({
  onClick,
  text,
  isChecked,
  layoutClassName,

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
      onClick={onClick}
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${isChecked ? styles['checked'] : ''}`}
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

        {isChecked && (
          <div className={styles.icon}>
            <CheckCircle />
          </div>
        )}
      </div>
    </LC.Wrapper>
  );
};

export default RoundedWithCheckIconButton;
