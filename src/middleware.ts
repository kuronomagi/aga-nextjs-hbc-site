// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   // console.log('=====  in middleware ======');
//   // const response = NextResponse.next();

//   // console.log(response);
//   // console.log('=== request ===', request.headers.get('referer'));
//   // console.log(request.nextUrl.pathname);

//   // debugger; // server では動作しない。javascriptなので。

//   const requestHeaders = new Headers(request.headers);

//   const originalUrl = new URL(request.url);
//   const hostname = process.env.NEXT_PUBLIC_CLIENT_PATH || originalUrl.hostname;
//   // const newUrl = new URL(originalUrl.pathname + originalUrl.search + originalUrl.hash, hostname);

//   // requestHeaders.set('my-url', newUrl.toString()); // NOTE: refererが正しく取得できないためカスタマイズ

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }
