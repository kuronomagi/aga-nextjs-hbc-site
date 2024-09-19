/**
 * form handler error class events
 */

// services
// ----------------------------
import React from 'react';
import { isBlank } from '~/services/checkBlank';

/**
 * NOTE:
 * 受け取ったクラス名のターゲット(HTMLElement)にエラー用のクラスを付与します。
 */
export const addErrorClass = (targetClassName: string) => {
  const target = document.getElementsByClassName(targetClassName)[0];

  target.classList.add('is-error');
};

/**
 * NOTE:
 * 受け取ったクラス名のターゲット(HTMLElement)にエラー用のクラスを取り除きます。
 */
export const removeErrorClass = (targetClassName: string) => {
  const target = document.getElementsByClassName(targetClassName)[0];

  target.classList.remove('is-error');
};

/**
 * NOTE:
 * 受け取ったクラス名のターゲット(HTMLElement)にエラーメッセージを追加します。
 */
export const addErrorMessages = (targetClassName: string, messages: string[]) => {
  const target: any = document.getElementsByClassName(targetClassName)[0];

  const htmlMessages = messages.map((message: string) => {
    if (!isBlank(target)) {
      return `<div class='u-error-message-text'>${message}</div>`;
    }
  });

  const container = `<div class='u-error-message-wrap'>${htmlMessages}</div>`;

  target.innerHTML = container;
};

export const removeErrorMessages = (targetClassName: string) => {
  const target: any = document.getElementsByClassName(targetClassName)[0];
  target.innerHTML = '';
};

export const addErrorClassToElements = (targetWrapClassName: string, targetItemClassName: string) => {
  let elements: any = document.getElementsByClassName(targetWrapClassName);
  elements = Array.from(elements);
  elements.map((target: any) => {
    if (isBlank(target.value)) {
      if (!isBlank(target.closest(targetItemClassName))) {
        target.closest(targetItemClassName).classList.add('is-error');
      }
    }
  });
};

export const removeErrorClassToElements = (targetWrapClassName: string, targetItemClassName: string) => {
  let elements: any = document.getElementsByClassName(targetWrapClassName);
  elements = Array.from(elements);
  elements.map((target: any) => {
    if (isBlank(target.value)) {
      if (!isBlank(target.closest(targetItemClassName))) {
        target.closest(targetItemClassName).classList.remove('is-error');
      }
    }
  });
};

export function addResponseErrorMessage({
  message,
  linkPath,
  linkText,
  targetClassName,
}: {
  message: string;
  linkPath: string;
  linkText: string;
  targetClassName: string;
}) {
  // const targetClassName = 'insert-checkout-form-message';
  const targetElement = document.getElementsByClassName(targetClassName)[0];
  if (targetElement == null || targetElement == undefined) {
    return;
  }

  // 追加した要素を取得
  const addedElement = targetElement.lastChild;

  // 追加した要素を削除
  !!addedElement && targetElement.removeChild(addedElement);

  // エラーメッセージとリンクを含む新しい要素を作成
  const alertPanelElement = document.createElement('div');
  alertPanelElement.className = 'alert-panel alert-error';
  alertPanelElement.style.marginBottom = '30px';

  const alertPanelInnerElement = document.createElement('div');
  alertPanelInnerElement.className = 'alert-panel-inner';

  const messageParagraph = document.createElement('p');
  messageParagraph.className = 'alert-panel-text';

  const linkElement = document.createElement('a');
  linkElement.className = 'alert-panel-link';
  linkElement.style.marginTop = '15px';

  messageParagraph.textContent = message; // ここにメッセージを設定
  linkElement.href = linkPath;
  linkElement.textContent = linkText;

  alertPanelElement.appendChild(alertPanelInnerElement);
  alertPanelInnerElement.appendChild(messageParagraph);
  alertPanelInnerElement.appendChild(linkElement);

  // 新しい要素を目標となる要素に追加
  targetElement.appendChild(alertPanelElement);
}
