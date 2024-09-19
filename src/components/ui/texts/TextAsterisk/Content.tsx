'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/texts/text.asterisk.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  text: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

const TextAsterisk: React.FC<P> = ({
  text,

  wrapperClassName,
  labelClassName,
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
      <p className={`${styles['text']}`}>{text}</p>
    </LC.Wrapper>
  );
};

export default TextAsterisk;
