/**
 * form scroll events
 */

// services
// ----------------------------
import { isBlank } from '~/services/checkBlank';

/**
 * NOTE:
 * 受け取ったクラス名のターゲット(HTMLElement)の位置までスクロールします。
 * 親の HTMLElement に position: fixed; が効いていると window scrollが動作しません。
 */
export const handleScroll = (targetClassName: string) => {
  const header = document.getElementsByClassName('js-header')[0];
  const headBand = document.getElementsByClassName('js-head-band')[0];

  const headerHeight = isBlank(header) || header == null ? 0 : header.clientHeight;
  const headBandHeight = isBlank(headBand) || headBand == null ? 0 : headBand.clientHeight;

  const target = document.getElementsByClassName(targetClassName)[0];

  const targetTop =
    target == null ? 0 : window.pageYOffset + target.getBoundingClientRect().top - headerHeight - headBandHeight;

  window.scrollTo({
    top: targetTop,
    left: 0,
    behavior: 'smooth',
  });
};