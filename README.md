# Vue Web Dev Boilerplate

TypeScript Vue + Vuex を使ったウェブサイト開発環境のボイラープレートです。

## development

```bash
ndenv install 12.18.0
ndenv rehash
```

```bash
npm ci
npm run serve
```

## build

```bash
npm run build
```

## test

```bash
npm run test:unit
```

Jest でユニットテストを実行します。スナップショットを更新するには

```bash
npm run test:unit -- -u
```

を実行してください。

## lint

```bash
npm run lint
```

自動フォーマットするには

```bash
npm run lint -- --fix
```

を実行してください。
