'use client';

import React from 'react';

// service
import { isBlank } from '~/services/checkBlank';

// components
import { Wrapper } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
export interface DevConsoleProps extends StyledSystemDefaultProps {
  params: any;
  label?: string;
}

/**
 * 開発環境でのパラメータ確認用コンポーネントです。
 */
export const DevConsole: React.FC<DevConsoleProps> = ({ params, label, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return process.env.NODE_ENV == 'development' ? (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      {!isBlank(label) && <span>{label}: </span>}
      {!isBlank(params) && JSON.stringify(params)}
    </Wrapper>
  ) : (
    <></>
  );
};

export default DevConsole;
