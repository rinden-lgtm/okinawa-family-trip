# OKINAWA FAMILY TRIP（沖縄旅行のしおり）

家族・親族向けの沖縄旅行ガイドサイトです。  
検索エンジンには表示されない設定（noindex / robots.txt）になっています。

- 日程: 2026.10.31 - 2026.11.03
- 宿泊: ヒルトン沖縄瀬底リゾート
- プロジェクト名: `okinawa-family-trip`
- GitHub リポジトリ名: `okinawa-family-trip`

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

旅程・部屋割りなどは **JSON** で管理しています。

| ファイル | 内容 |
|---|---|
| `src/data/trip.json` | 旅行概要（日程・ホテル名・テーマ・お礼文） |
| `src/data/hotel.json` | ホテル情報・写真・地図 |
| `src/data/wedding.json` | 挙式・宴会 |
| `src/data/cruise.json` | サンセットクルーズ |
| `src/data/payment.json` | 飛行機代・振込先 |
| `src/data/schedule.json` | スケジュール（Day1〜4） |
| `src/data/rooms.json` | 部屋割り |
| `src/data/map.json` | MAPピン |
| `src/data/spots.json` | 車で行ける観光名所 |
| `src/data/contacts.json` | 緊急連絡先 |

---

## 検索エンジン非表示

- `metadata.robots`: `index: false` / `follow: false` / `noarchive: true` / `nosnippet: true`
- `src/app/robots.ts`: `User-agent: *` / `Disallow: /`

---

## GitHubへPush

```bash
git add .
git commit -m "Update Okinawa family trip guide"
git push origin master
```

---

## Vercelで公開

1. Vercelへログイン
2. **Add New Project** を選択
3. GitHubの「okinawa-family-trip」を選択
4. Framework Presetが **Next.js** になっていることを確認
5. **Deploy** を実行

### 公開URL（現在）

- 本番: https://okinawa-family-trip-eight.vercel.app
- GitHub: https://github.com/rinden-lgtm/okinawa-family-trip

### 更新を公開URLへ反映する

```bash
git add .
git commit -m "Update trip guide content"
git push origin master
```

Push すると Vercel が自動再デプロイします。

---

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

---

## ディレクトリ構成（抜粋）

```text
src/
  app/                 # ページ・レイアウト
  components/
    sections/          # Hero / 目次 / 各セクション
    ui/                # Button / Card / Tabs
    motion/            # スクロール演出
  data/                # ★編集用 JSON
  lib/                 # ユーティリティ・型
```
