# トムとジェリー 最強ティアリスト

microCMS と Next.js を使用して作成したキャラクターティアリストアプリです。  
キャラクターを S / A / B / C のティアごとに分類し、詳細ページで情報を確認できます。

---

## 使用技術

- Next.js (App Router)
- TypeScript
- microCMS
- CSS Modules
- next/image

---

## 主な機能

### ティア一覧表示

- microCMSからキャラクターデータを取得
- ティアごとに自動グループ分け
- 画像・名前をカード表示

### キャラクター詳細ページ

- 個別ページ（/characters/[id]）
- 画像・ティア・説明文を表示
- 一覧ページへ戻るボタン付き

---

## ディレクトリ構成

app
├ page.tsx # 一覧ページ
├ characters
│ └ [id]
│ └ page.tsx # 詳細ページ
└ page.module.css

\_lib
├ microcms.ts # microCMSクライアント
├ getCharacters.ts # 一覧取得 # 単体取得
└ groupByTier.ts # ティア分類ロジック

types
└ character.ts # 型定義
