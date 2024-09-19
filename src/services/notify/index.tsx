import { toast } from 'react-toastify';

import { isMobile } from 'react-device-detect';

const CLOSE_TIME = 3000;
const LIGHT_THEME = 'light';

/*
 * NOTE:
 * notifySuccess('メッセージ')
 */
export const notifySuccess = ({
  message,
  position,
  customId,
}: {
  message: string;
  position: 'top' | 'bottom';
  customId?: string;
}) => {
  switch (position) {
    case 'top':
      toast.success(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: 'top-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    case 'bottom':
      toast.success(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'top-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    default:
      toast.success(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'top-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
  }
};

/*
 * NOTE:
 * notifyError('エラーメッセージ')
 */
export const notifyError = ({
  message,
  position,
  customId,
}: {
  message: string;
  position: 'top' | 'bottom';
  customId?: string;
}) => {
  switch (position) {
    case 'top':
      toast.error(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: 'top-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    case 'bottom':
      toast.error(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'top-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    default:
      toast.error(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'top-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
  }
};

/*
 * NOTE:
 * notifyInfo('お知らせ')
 */
export const notifyInfo = ({
  message,
  position,
  customId,
}: {
  message: string;
  position: 'top' | 'bottom';
  customId?: string;
}) => {
  switch (position) {
    case 'top':
      toast.info(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: 'top-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    case 'bottom':
      toast.info(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'bottom-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
      break;
    default:
      toast.info(message, {
        toastId: customId,
        icon: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
        position: isMobile ? 'top-right' : 'bottom-right',
        autoClose: CLOSE_TIME,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: LIGHT_THEME,
      });
  }
};
