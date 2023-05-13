# mnyuukou
入稿作業を楽するスクリプト

## 要件

`.bin/bin/` 以下に deno と zx_deno のバイナリを置く必要がある。

## 使い方

`data/work_dir` の内容を zip に圧縮して `dist/yyyy-MM-dd_hh-mm-ss.zip` として保存する。

```
./.bin/bin/deno task compress
```
