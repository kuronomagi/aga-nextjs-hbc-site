/**
 * Custom form events
 */

import { isBlank } from '~/services/checkBlank';
import { zenAlphanumeric } from '~/services/regexp';

/**
 * 何文字入力したら次のフォームへ飛ばすか
 */
export const handleKeyPress = (event: any, field: any, nextField: any, size: number) => {
  if (field.current?.value.length > size) {
    nextField.current?.focus();
  }
};

/**
 * input numberの入力可能な最大文字数をチェック <input>のmaxLengthで最大文字数を設定
 */
export const maxLengthCheck = (element: React.ChangeEvent<HTMLInputElement>) => {
  if (element.target.value.length > element.target.maxLength) {
    element.target.value = element.target.value.slice(0, element.target.maxLength);
  }
};

/**
 * input numberで `e` を入力できるのを防ぎます。
 */
export const handleKeyDown69Disabled = (event: any) => {
  event.key === 'e' && event.preventDefault();
};

/**
 * 全角を半角に変換します。
 */
export const zenToHan = (text: string) => {
  return text.replace(zenAlphanumeric, (value: string) => {
    return String.fromCharCode(value.charCodeAt(0) - 0xfee0); // NOTE: 0xFEE0(10進表記で65248)を全角から引くと半角になります。(英数字と一部の記号の並び方は全角半角でほぼ同じな為)
  });
};

/**
 * Enterが押された時にイベントを実行します。
 * inputのonKeyPressに設定します。
 * <input onKeyPress={(event) => handleEnterKeyPress(event, yourEvent)} />
 *
 * options
 * withShift: [Boolean] ShiftキーとEnterの同時押しの時に、イベントを実行します。
 */
const ENTER_KEY = 13;
export const handleEnterKeyPress = (
  event: any,
  currentEvent: any,
  options?: {
    withShift?: boolean;
  },
) => {
  if (!isBlank(options?.withShift)) {
    if (event.shiftKey && event.which === ENTER_KEY) {
      currentEvent();
      event.preventDefault();
    }
  } else {
    if (event.which === ENTER_KEY) {
      currentEvent();
      event.preventDefault();
    }
  }
};
