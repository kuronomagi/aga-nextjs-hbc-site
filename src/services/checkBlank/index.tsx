/**
 * 値が空( null or undefined or ''(空文字) or {}(空のオブジェクト) )を判定。
 * 空の場合はtrue、値がある場合はfalseを返す
 */
export const isBlank = (value: number | boolean | any) => {
  if (!value) {
    if (value !== 0 && value !== false) {
      return true;
    }
  } else if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};
