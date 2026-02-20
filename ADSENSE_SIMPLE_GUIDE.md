# 📊 Google AdSense 完全ガイド

## 🎯 3ステップで始める

### ステップ1: 申請準備（1-2日）
1. **https://adsense.google.com** にアクセス
2. 「ご利用開始」をクリック
3. サイトURL入力: `https://あなたのユーザー名.github.io/sleepguard-app`
4. Gmail登録
5. 国選択: 日本

### ステップ2: コード追加（5分）
AdSenseから提供されるコードを`<head>`に追加:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
     crossorigin="anonymous"></script>
```

### ステップ3: 審査待ち（1-2週間）
- 審査中にコンテンツ追加
- メール通知を待つ

## 💰 収益予測

| 訪問者/日 | 月収（目安） |
|----------|------------|
| 300人 | $30-50 |
| 500人 | $50-100 ✓目標 |
| 1000人 | $150-300 |

## 📍 広告配置（SleepGuard推奨）

```html
<!-- ヘッダー下 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

<!-- コンテンツ中 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"></ins>
```

## ✅ 審査通過のコツ

必須ページ:
- [ ] プライバシーポリシー
- [ ] 利用規約
- [ ] About
- [ ] お問い合わせ

禁止事項:
- ❌ 自己クリック
- ❌ クリック誘導
- ❌ コピーコンテンツ

## 💳 支払い設定

- 最低支払額: $100
- 方法: 銀行振込
- PINコード: 郵送で届く
