'use client';

export default function GlobalSetting() {}

declare global {
  var logMessage: (message: any) => void;
  var logTable: (response: any) => void;
}

global.logMessage = function (message: any): void {
  if (process.env.NEXT_PUBLIC_MY_ENV == 'local') {
    console.log(message);
  }
};

global.logTable = function (response: any): void {
  if (process.env.NEXT_PUBLIC_MY_ENV == 'local') {
    console.table(response);
  }
};
