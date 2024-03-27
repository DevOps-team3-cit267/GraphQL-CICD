# GraphQL-CICD

```bash
npm install
```

Set up Project DB

```bash
npx prisma generate
```

```bash
npx prisma migrate dev --name initial
```

```bash
npx prisma migrate deploy
```

Run locally

```bash
npm run dev
```

Build Deployment

```bash
npm run start
```
