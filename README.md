# OKINAWA FAMILY TRIP（沖縄旅行のしおり）

家族・親族専用の沖縄旅行ガイドサイトです。  
**パスワード認証あり／検索エンジン非表示** の限定公開構成です。

- 日程: 2026.10.31 - 2026.11.03
- 宿泊: ヒルトン沖縄瀬底リゾート
- プロジェクト名: `okinawa-family-trip`
- GitHub リポジトリ名: `okinawa-family-trip`

---

## ローカル起動方法

前提: Node.js 20 以上推奨

```bash
npm install
cp .env.example .env.local
```

`.env.local` にパスワードを設定します。

```text
TRIP_SITE_PASSWORD=あなたのパスワード
```

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと認証画面が表示されます。

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

## 限定公開（認証・検索非表示）

### 検索エンジン非表示

- `metadata.robots`: `index: false` / `follow: false` / `noarchive: true` / `nosnippet: true`
- `src/app/robots.ts`: `User-agent: *` / `Disallow: /`

### パスワード認証

- 環境変数 `TRIP_SITE_PASSWORD` で管理（コード・GitHubには保存しない）
- サーバー側（Server Action）で判定
- 成功時は HttpOnly Cookie を **30日間** 保持
- 未認証時は `/gate` のみ表示（旅行データは読み込まれない）

### パスワードの変更方法（Vercel）

1. Vercel → Project → **Settings** → **Environment Variables**
2. `TRIP_SITE_PASSWORD` を編集
3. **Redeploy** を実行

---

## GitHubへPush

```bash
git add .
git commit -m "Create Okinawa family trip guide"
git push origin main
```

※ このリポジトリの既定ブランチが `master` の場合は `git push origin master` を使用してください。

---

## Vercelで公開

1. Vercelへログイン
2. **Add New Project** を選択
3. GitHubの「okinawa-family-trip」を選択
4. Framework Presetが **Next.js** になっていることを確認
5. Environment Variablesへ以下を追加

```text
TRIP_SITE_PASSWORD=設定するパスワード
```

6. **Deploy** を実行
7. 発行されたURLで認証画面が表示されることを確認

### 公開後の反映

```bash
git add .
git commit -m "Update trip guide content"
git push origin master
```

Push すると Vercel が自動再デプロイします。

### 家族・親族への共有

別々のメッセージで送ることを推奨します。

1. 旅行しおりURL
2. 閲覧用パスワード

サイト上にパスワードは表示しません。

---

## 公開後の確認項目

- URLを開くと認証画面が表示される
- 間違ったパスワードでは入れない
- 正しいパスワードでしおりが表示される
- 再読み込みしても認証状態が保持される
- シークレットモードでは再度パスワードを求められる
- Google検索に登録されない（robots / noindex）
- `/robots.txt` が `Disallow: /`
- スマートフォンでも入力・閲覧できる
- 認証前に旅行データが読み込まれない
- GitHub内にパスワードが保存されていない

---

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Proxy（認証ゲート）+ Server Actions

---

## ディレクトリ構成（抜粋）

```text
src/
  app/
    (guide)/           # 認証後のしおり
    gate/              # パスワード入力画面
    actions/           # ログイン Server Action
    robots.ts
  proxy.ts             # 未認証リダイレクト
  components/
  data/                # ★編集用 JSON
  lib/auth.ts          # 認証トークン
```
