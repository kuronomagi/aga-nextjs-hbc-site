'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/title/h2.title.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  text: string;
  label?: string;
  wrapperClassName?: string;
  titleColorClassName?: string;
  labelClassName?: string;
  flexClassName?: string;
}

const H2Title: React.FC<P> = ({
  text,
  label,
  wrapperClassName,
  titleColorClassName,
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
      className={`${styles['wrapper']} ${!!wrapperClassName ? styles[wrapperClassName] : ''} ${!!titleColorClassName ? styles[titleColorClassName] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      {!!label && <p className={`${styles['label']} ${!!labelClassName ? styles[labelClassName] : ''}`}>{label}</p>}

      <div className={`${flexClassName}`}>
        <h2 className={`${styles['h2']}`}>{text}</h2>
      </div>
    </LC.Wrapper>
  );
};

export default H2Title;
