'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// module css
import styles from '~/app/styles/ui/title/h1.title.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// svgs
import { isBlank } from '~/services/checkBlank';

interface P extends StyledSystemDefaultProps {
  text: string;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  flexClassName?: string;
}

const H1Title: React.FC<P> = ({
  text,
  label,
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
      {!!label && <p className={`${styles['label']} ${!!labelClassName ? labelClassName : ''}`}>{label}</p>}

      <div className={`${flexClassName}`}>
        <h1 className={`${styles['h1']} text-white`}>{text}</h1>
      </div>
    </LC.Wrapper>
  );
};

export default H1Title;
