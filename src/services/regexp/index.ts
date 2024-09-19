/**
 * 正規表現
 */

// 電話番号
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// ひらがなのみ
export const hiraganaRegExp = /^[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}\u{30FB}-\u{30FE}]+$/mu;
// export const hiraganaRegExp = /^[\u3041-\u3096\u309D-\u309F]+$/u;

// 郵便番号
export const zipCodeRegExp = /^\d{7}$/;

// 半角数字
export const hanNumberRegExp = /^[0-9]*$/;

// 半角数字以外
export const unHanNumberRegExp = /^\d$/;

// year
export const yearRegExp = /^\d{4}$/;

// month & day
export const monthOrDayRegExp = /^\d{1,2}$/;

// email
export const emailRegExp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

// 半角全角ハイフン
export const hyphen = /(-|ー|−)/g;

// 全角英数字
export const zenAlphanumeric = /([Ａ-Ｚ０-９-ー−])/g;
