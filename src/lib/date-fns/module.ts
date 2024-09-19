import { format, parseISO } from 'date-fns';

// 日付文字列を YYYY.mm.dd 形式に変換する関数
export function formatDate(pub_date_str: string) {
  // Date オブジェクトに変換 (これをしないとsafariでエラーになります)
  const date = parseISO(pub_date_str);

  // date-fns の format 関数を使用して日付を YYYY.mm.dd 形式に変換
  return format(date, 'yyyy.MM.dd');
}
