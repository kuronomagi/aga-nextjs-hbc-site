# Hair HBC Site

24/8/7時点の「nextjs-hbc-site」をforkして構築しています。

## URL

https://aga.tenjin-hbc.jp/

## 違い

1. SSGのサイトに変更したため動的headersのコードを削除
2. build設定をstandaloneからexportへ変更

## svgアイコン

https://heroicons.com/ からsvgコードを取得しています。

## 背景画像の角丸変換

https://www.quickpicturetools.com/jp/rounded_corners/

こちらのサイトで作成しました。

- /src/assets/images/bg-top-radius-marble@600.png

## OpenAPI

`yarn openapi` を実行した後、自動生成される `ecApiComponents.ts` の `export const use` でbuildエラーが発生するため、下記を追加します。

```
/* eslint-disable react-hooks/rules-of-hooks */

// ここには react-hooks/rules-of-hooks ルールが無効になるコードを書く

/* eslint-enable react-hooks/rules-of-hooks */
```

## スタイルの注意

### backdrop-filter: blur(50px) brightness(30%);

・ chromeでレンダリング時不具合が発生するため使用しないこと。例: 下から上へスクロールする時に、ぼかしが適用される前の画像がちらつく不具合

### background-attachment: fixed;

・ iOSの実機で動作しないため使用しない

# リリース履歴

## 240919 17:00~
