'use client';

import React from 'react';

import { Wrapper } from './style';

// module css
import styles from '~/app/styles/lib/react-hook-form/error.form.message.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
interface ErrorFormMessageProps extends StyledSystemDefaultProps {
  children?: React.ReactNode;
  wrapperClassName?: string;
}

const ErrorFormMessage: React.FC<ErrorFormMessageProps> = ({
  children,
  wrapperClassName,
  mt,
  mb,
  mr,
  ml,
  pt,
  pb,
  pl,
  pr,
}) => {
  return (
    <Wrapper
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
      className={`${styles.wrapper} ${wrapperClassName}`}>
      {children}
    </Wrapper>
  );
};

export default React.memo(ErrorFormMessage);
