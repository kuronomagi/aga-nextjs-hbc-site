'use client';

import { createGlobalStyle } from 'styled-components';

import { theme } from '~/theme';
import mq from '~/theme/media';

const BaseCSS = createGlobalStyle`


  .u-pc-dis-n {
    ${mq.up`
      display: none !important;
    `}
  }

  .u-sp-dis-n {
    ${mq.down`
      display: none !important;
    `}
  }


  .MuiPaper-root {
    margin-top: 15px;
  }

  .MuiPickersBasePicker-container {
    * {
      font-weight: bold !important;
      font-size: ${theme.fontSizes[2]}px !important;
    }
  }

  .MuiButtonBase-root.MuiIconButton-root {
    &:hover {
      background-color: none;
    }
  }

  .notification-item .notification-close {
    width: 22px;
    height: 22px;

    ${mq.down`
      height: 27px;
    `}
  }

  .notification-item .notification-close:after {
    font-size: 21px;
  }

  /* エラーメッセージ */
  .u-error-message-wrap {
    margin-top: 20px;
    padding: 15px 20px;
    border: 1px solid var(--error);
    border-radius: 5px;
    background: var(--blossom);

    .u-error-message-text {
      font-size: 14px;
      font-weight: 700;
      color: var(--error);
    }
  }

  .banner-link {
    cursor: pointer;
    ${mq.up`
      &:hover {
        opacity: 0.8;
      }
    `}

    ${mq.down`
      margin: 0 4%;
    `}
  }
`;
export default BaseCSS;
