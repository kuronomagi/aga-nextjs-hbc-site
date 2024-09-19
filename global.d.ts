declare global {
  var logMessage: (message: string) => void;
  var logTable: (response: any) => void; // 'any'は実際のレスポンスの型に置き換えてください。
}
