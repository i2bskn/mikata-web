# mikata-web プロジェクト

WordPress 24サイトの Next.js App Router への移行プロジェクト

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript (strict mode)
- **スタイリング**: Tailwind CSS v4
- **パッケージ管理**: pnpm + Turborepo
- **デプロイ**: Vercel

## プロジェクト構成

```
mikata-web/
├── apps/
│   ├── bluecavetour/     # 石垣島 青の洞窟ツアーズ
│   ├── snorkeling/       # （次のサイト）
│   └── ...               # 計24サイト予定
├── packages/
│   ├── ui/               # 共通UIコンポーネント
│   ├── seo/              # SEO関連（メタタグ、JSON-LD）
│   └── config/           # 共通設定（eslint, tsconfig等）
├── turbo.json
└── pnpm-workspace.yaml
```

## 移行方針

### SEO要件（最重要）

- **既存URLパスを完全維持**（リダイレクトなしで同じURLで動作）
- meta情報（title, description）は既存サイトと同一
- OGP情報を維持
- JSON-LD構造化データを維持
- サイトマップ自動生成（/sitemap.xml）

### 共通コンポーネント化

24サイトで共通化できる要素：
- ヘッダー / フッター
- プラン一覧・詳細のレイアウト
- 予約フォーム
- SEO関連（generateMetadata, JSON-LD）
- 画像最適化（next/image wrapper）

---

# bluecavetour（石垣島 青の洞窟ツアーズ）

## 基本情報

- **本番URL**: https://bluecavetour.ishigaki-tours.com/
- **総ページ数**: 63ページ
- **WordPress**: All in One SEO 使用

## 既に作成済みのファイル

### packages/ui/
- `header.tsx` - 共通ヘッダー（トップバー＋ロゴ＋ナビ＋アクションボタン、"use client"）
- `footer.tsx` - 共通フッター（装飾画像帯、ナビリンク、パートナーロゴ、運営サイト一覧、SNSリンク）
- `plan-card.tsx` - プランカード（ランキングバッジ、画像、価格、タグ、評価表示）
- `hero-banner.tsx` - ヒーロースライダー（自動再生、左右矢印、インジケーター、"use client"）
- `category-nav.tsx` - カテゴリナビゲーション（アイコン付き8項目タブ）

### packages/seo/
- `metadata.ts` - generateMetadata用ユーティリティ
- `json-ld.tsx` - 構造化データコンポーネント（Organization, Product, FAQ, Breadcrumb）

### apps/bluecavetour/
- `src/app/page.tsx` - トップページ（2カラムレイアウト、ヒーロー、カテゴリナビ、検索フォーム、プランランキング、キャンペーン、組み合わせ、条件検索）
- `src/app/plan/[slug]/page.tsx` - プラン詳細ページ
- `src/app/setplan/[slug]/page.tsx` - セットプラン詳細ページ
- `src/lib/site-config.ts` - サイト設定（ナビ、フッター、パートナーロゴ、関連サイト等）
- `src/lib/types.ts` - 型定義（Plan等）
- `src/lib/data/plans.ts` - プランデータ（8プラン、slug/カテゴリ検索関数付き）

## 開発コマンド

```bash
# 開発サーバー起動
pnpm --filter bluecavetour dev

# ビルド
pnpm --filter bluecavetour build

# 全パッケージビルド
pnpm build
```

## 背景・方針
- 既存WordPressサイトはSEOがうまくいっているため、URL構造・meta情報を完全維持
- 24サイト間で共通部分が多いため、packagesで共通化を進める
- 既存サイトとの視覚的一致を重視（一目で新旧を見分けられないレベルを目指す）

## ページ構成・SEO情報

ページ構成・既存サイトのSEO情報は `.claude/skills/bluecavetour-pages.md` を参照。

## 実装優先順位と進捗

### Phase 1: 基盤整備 ✅ 完了
1. ✅ 共通パッケージ作成（packages/ui, packages/seo）
2. ✅ レイアウト（ヘッダー、フッター） - 既存サイトデザイン近似済み
3. ✅ トップページ - 2カラムレイアウト、全セクション実装済み

### Phase 2: コアページ（一部完了）
4. ✅ プラン一覧ページ（トップページ内ランキング表示）
5. ✅ プラン詳細ページ（/plan/[slug]）- 基本実装済み
6. ✅ セットプラン詳細（/setplan/[slug]）- 基本実装済み

### Phase 3: コンテンツページ
7. コラム一覧・詳細（/column/[slug]）
8. 固定ページ（FAQ、ポリシー等）

### Phase 4: SEO・最終調整
9. generateMetadata実装
10. JSON-LD構造化データ
11. sitemap.xml生成
12. 画像最適化

### 残存する旧サイトとの差異（Phase 3以降で対応）
- パートナーロゴ追加分（海と日本PROJECT、宝塚医療大学、おきなわSDGsパートナー、スカイレンタカー）
- ツアーズコラムセクション（トップページフッター手前）
- 関連情報セクション（トップページフッター手前）

### 未対応の既存機能（要検討）
- **多言語翻訳機能**: 旧サイトはWordPressプラグイン「TranslatePress Multilingual v3.0.7」で5言語（Japanese/English/Korean/Chinese Taiwan/Chinese China）に対応。URLパスプレフィックス方式（`/en/`, `/ko/`, `/zh/`, `/zh_cn/`）でルーティングし、hreflangタグも出力済み。Next.jsでは `next-intl` 等のi18nライブラリ + 翻訳API連携での代替実装が必要。24サイト共通基盤として `packages/` レベルでの設計が望ましい。

---

## コーディング規約

### ディレクトリ構成（各app）

```
apps/bluecavetour/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── plan/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── column/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── ...
│   ├── components/      # このapp固有のコンポーネント
│   └── lib/             # ユーティリティ
├── public/
└── next.config.ts
```

### コンポーネント

- 共通コンポーネントは `packages/ui` に配置
- サイト固有のコンポーネントは `apps/xxx/src/components` に配置
- Server Components をデフォルトとし、必要な場合のみ 'use client'

### スタイリング

- Tailwind CSS v4 のユーティリティクラスを使用
- サイトデザインは基本的に既存と同じにする
- 今後のメンテナンス性を考えて、タグ構造は整理してきれいにする
- タグ構造を整理した結果、よく見ないとわからない程度であれば見た目が変わることは許容する
- 見た目が変わる部分については常に理由を説明して変わっても良いか確認をしてください
- 複雑なスタイルは `@apply` ではなく、コンポーネント内で管理
- レスポンシブはモバイルファースト
- **重要: Tailwind CSS v4 の `@source` ディレクティブ**
  - v4ではクラスの自動検出がデフォルトで同一パッケージ内のみ
  - モノレポで `packages/ui` のTailwindクラスを使うには、各appの `globals.css` に `@source` を追加する必要がある
  ```css
  @source "../../../../packages/ui/src/**/*.tsx";
  ```
  - これがないと `hidden lg:flex` 等のレスポンシブクラスが生成されず、UIが崩れる

### SEO

```tsx
// generateMetadata の例
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plan = await getPlan(params.slug);
  return {
    title: plan.title,
    description: plan.description,
    openGraph: {
      title: plan.ogTitle || plan.title,
      description: plan.ogDescription || plan.description,
      images: [plan.ogImage],
    },
  };
}
```

---

## 画像管理方針

画像は2種類に分けて管理する:

### 固定画像（リポジトリに恒久配置）
記事毎に動的に設定されるものではない画像。本番リリース後もそのまま利用する。
- `public/images/header/` - ヘッダーロゴ
- `public/images/footer/` - フッター装飾画像帯（7枚）
- `public/images/partner/` - パートナーロゴ（ANTA、HIS）
- `public/images/sidebar/` - サイドバーバナー（フェリー予約、プレミアムプラン）

### サンプル画像（後日S3/DB移行予定）
WordPressで記事に設定されると想定される画像。現在はリポジトリ内にサンプルとして配置。
- `public/images/banner/` - ヒーロースライダー画像（3枚）
- `public/images/plans/` - プランサムネイル（8枚）
- `public/images/campaign/` - キャンペーン画像（2枚）
- `public/images/setplan/` - セットプラン組み合わせ画像（3枚）

## 既存サイトのデザイン仕様

既存WordPressサイトから抽出した値:

| 項目 | 値 |
|------|------|
| コンテナ幅 | 1020px |
| トップバー高さ | 35px |
| ヘッダー高さ | 59px |
| ヒーロースライダー高さ | 460px |
| Primary色 | #1a9edb |
| Primary Dark色 | #0097d8 |
| Accent色（オレンジ） | #f08300 |
| Danger色（赤/予約ボタン） | #ed3434 |
| フッター背景色 | #f9f9f2 |

## 注意事項

- 既存サイトのURL構造を維持（SEOのため）
- 日本語URLパス（/メニュー）も維持
- `.html` 拡張子付きURLも維持（rewriteで対応）
- 画像は上記「画像管理方針」に従って管理
- 既存サイトと新サイトは同一顧客のサイトであり、画像の著作権問題はない
