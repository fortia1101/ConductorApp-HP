# 吟コン HP

## デバッグ方法

以下のコマンドで開発環境が起動する．

```sh
sudo npm i && sudo npm run dev
```

## デプロイ手順

1. 完成したプログラムをビルドする．

```sh
sudo npm i && npm run build
```

2. ビルドしたプログラムを`gh-pages`ブランチに反映する．

```sh
sudo npm run deploy
```
