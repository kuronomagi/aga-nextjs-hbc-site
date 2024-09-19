'use client';

// core
import React from 'react';

// module css
import styles from '~/app/styles/ui/buttons/rounded.text.button.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Link from 'next/link';

interface P extends StyledSystemDefaultProps {
  onClick?: () => void;
  linkPath?: string;
  text: string;
  layoutClassName?: string;
}

const RoundedTextButton: React.FC<P> = ({
  onClick,
  linkPath,
  text,
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
    <>
      {!!linkPath ? (
        <Link href={linkPath} prefetch>
          <LC.Wrapper
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
              <p className={`${styles['text']}`}>{text}</p>
            </div>
          </LC.Wrapper>
        </Link>
      ) : (
        <>
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
              <p className={`${styles['text']}`}>{text}</p>
            </div>
          </LC.Wrapper>
        </>
      )}
    </>
  );
};

export default RoundedTextButton;
