'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/title/h3.title.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  text: string;
  wrapperClassName?: string;
  labelClassName?: string;
  flexClassName?: string;
}

const H3Title: React.FC<P> = ({
  text,
  wrapperClassName,
  labelClassName,
  flexClassName = '',
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
      <div className={`${flexClassName}`}>
        <h3 className={`${styles['h3']}`}>{text}</h3>
      </div>
    </LC.Wrapper>
  );
};

export default H3Title;
