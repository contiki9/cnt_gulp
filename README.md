# cnt-gulp

個人的に使用するgulp設計

まだ作成中

## 導入

### 1.プラグイン一式をインストール

```
npm install
```

### 2.gulpを起動

```
gulp
```
デフォルトでは下記のタスクが起動
- ブラウザシンク
- sassのコンパイル
- jadeのコンパイル

### 4.他のタスク

/dist/に納品用のファイルを作成。（画像、HTML、CSS、JSをminifiyする）

```
gulp build
```

/src/にあるHTMLとCSSの記述ミスのチェック

```
gulp check
```
