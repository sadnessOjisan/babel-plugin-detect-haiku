# babel-plugin-detect-haiku

ビルド時にソースコードから 575 を見つける babel-plugin

これは [クソアプリ Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kuso-app)の 19 日目の記事である、[ビルド時に俳句を読めるプラグイン](https://qiita.com/sadnessOjisan/98619eaaef1da8d6545a) のために開発されたものです。

## 導入

babel とプラグインの導入

```zsh
$ yarn add -D babel babel-plugin-detect-haiku
```

設定ファイル(babelrc など)を編集

```js
module.exports = {
  // 中略
  plugins: ["detect-haiku"]
};
```

動作例や設定例は、 [575-detect-plugin-example](https://github.com/sadnessOjisan/575-detect-plugin-example) を参考ください。

## 開発

モジュールインストール

```zsh
$ yarn install
```

実行

```zsh
$ yarn run start
```

公開前にドライラン

```zsh
$ tar -tf $(npm pack)
```

npm に公開

```zsh
$ npm publish
```
