'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/rounded.with.arrow.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { RightArrow } from '../../svg/decorations/right.arrow';

interface P extends StyledSystemDefaultProps {
  onClick?: () => void;
  href?: string;
  text: string;
  layoutClassName?: string;
  sizeClassName?: string;
  opacityClassName?: string;
  className?: string;
}

const RoundedWithArrowButton: React.FC<P> = ({
  onClick,
  href,
  text,
  layoutClassName,
  sizeClassName,
  opacityClassName,
  className,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
  return !!href ? (
    <LC.LinkWrapper
      href={href}
      target='_blank'
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${!!sizeClassName ? styles[sizeClassName] : ''} ${!!opacityClassName ? styles[opacityClassName] : ''} ${!!className ? styles[className] : ''}`}
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
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <RightArrow />
          </div>
        </div>
      </div>
    </LC.LinkWrapper>
  ) : (
    <LC.Wrapper
      onClick={onClick}
      className={`${styles['wrapper']} ${!!layoutClassName ? styles[layoutClassName] : ''} ${!!sizeClassName ? styles[sizeClassName] : ''} ${!!opacityClassName ? styles[opacityClassName] : ''} ${!!className ? styles[className] : ''}`}
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
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <RightArrow />
          </div>
        </div>
      </div>
    </LC.Wrapper>
  );
};

export default RoundedWithArrowButton;
