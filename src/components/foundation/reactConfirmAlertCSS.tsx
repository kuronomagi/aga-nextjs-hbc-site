'use client';

import { createGlobalStyle } from 'styled-components';

const ReactConfirmAlertCSS = createGlobalStyle`
  body.react-confirm-alert-body-element {
    overflow: hidden;
  }

  .react-confirm-alert {
    width: 100%;
    max-width: 524px;
    border-radius: 6px;

    @media screen and (max-width: 767px) {
      width: 85%;
    }
  }

  .react-confirm-alert-blur {
    filter: url(#gaussian-blur);
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  .react-confirm-alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 199;
    background: rgba(0,0,0,0.3);
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    opacity: 0;
    -webkit-animation: react-confirm-alert-fadeIn 0.3s 0.2s forwards;
    -moz-animation: react-confirm-alert-fadeIn 0.3s 0.2s forwards;
    -o-animation: react-confirm-alert-fadeIn 0.3s 0.2s forwards;
    animation: react-confirm-alert-fadeIn 0.3s 0.2s forwards;
  }

  .react-confirm-alert-body {
    font-family: Arial, Helvetica, sans-serif;
    width: 400px;
    padding: 30px;
    text-align: left;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
    color: #666;
  }

  .react-confirm-alert-svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .react-confirm-alert-body > h1 {
    margin-top: 0;
  }

  .react-confirm-alert-body > h3 {
    margin: 0;
    font-size: 16px;
  }

  .react-confirm-alert-button-group {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .react-confirm-alert-button-group > button {
    outline: none;
    background: #333;
    border: none;
    display: inline-block;
    padding: 6px 18px;
    color: #eee;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  @-webkit-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default ReactConfirmAlertCSS;
