# OKINAWA FAMILY TRIP（沖縄旅行のしおり）

家族・親族向けの沖縄旅行ガイドサイトです。  
Next.js で構築し、スマホ優先の高級リゾートガイド風デザインになっています。

- 日程: 2026.10.31 - 2026.11.03
- 宿泊: ザ・ビーチリゾート瀬底 by ヒルトンクラブ

---

## ローカル起動方法

前提: Node.js 20 以上推奨

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

本番ビルド確認:

```bash
npm run build
npm start
```

---

## 編集方法

旅程・メンバー・部屋割りなどは **JSON** で管理しています。  
コードを触らずに内容を更新できます。

| ファイル | 内容 |
|---|---|
| `src/data/trip.json` | 旅行概要（日程・ホテル名・テーマ） |
| `src/data/members.json` | 参加メンバー（グループ単位） |
| `src/data/hotel.json` | ホテル情報・写真・地図 |
| `src/data/schedule.json` | スケジュール（Day1〜4 / Day3はタブ） |
| `src/data/rooms.json` | 部屋割り |
| `src/data/packing.json` | 持ち物チェックリスト |
| `src/data/map.json` | MAPピン（ホテル・空港・港など） |
| `src/data/contacts.json` | 緊急連絡先 |

### 例: メンバーを追加する

`src/data/members.json` の該当グループに追記します。

```json
{
  "name": "太郎",
  "note": "子ども"
}
```

### 例: Day1 の予定を追加する

`src/data/schedule.json` の `day1.items` にオブジェクトを追加します。

```json
{
  "time": "夜",
  "title": "懇親会",
  "description": "ホテル内で軽食",
  "icon": "utensils"
}
```

利用可能な `icon`:  
`plane` / `plane-landing` / `hotel` / `sunset` / `moon` / `heart` / `utensils` / `sparkles` / `door-open` / `car` / `home` / `sun` / `map` / `wine`

持ち物チェック状態はブラウザの `localStorage` に保存されます（端末ごと）。

---

## Vercel 公開方法

1. このリポジトリを GitHub に Push する
2. [Vercel](https://vercel.com) にログインし **Add New Project**
3. GitHub リポジトリを Import
4. Framework Preset: **Next.js**（自動検出）
5. Root Directory: リポジトリ直下
6. **Deploy**

デプロイ後、`https://xxxx.vercel.app` のような URL が発行されます。  
家族・親族への共有は、この URL を送ればOKです。

### 独自ドメインへの変更

1. Vercel の Project → **Settings** → **Domains**
2. 独自ドメイン（例: `okinawa-trip.example.com`）を追加
3. 表示される DNS レコードをドメイン側に設定

コード変更なしでドメインだけ差し替え可能です。

---

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- shadcn/ui スタイルの UI パーツ（Radix）

---

## ディレクトリ構成（抜粋）

```text
src/
  app/                 # ページ・レイアウト
  components/
    sections/          # Hero / 目次 / 各セクション
    ui/                # Button / Card / Tabs / Checkbox
    motion/            # スクロール演出
  data/                # ★編集用 JSON
  lib/                 # ユーティリティ・型
```
