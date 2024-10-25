# 🦅 Condor Soft Full Stack Technical Test - SR/SSR

🙋‍♂️ ¡Welcome to the Condor Soft Full Stack Technical Test project! This project demonstrates a robust full-stack application using modern technologies for both frontend and backend.

## 🌐 Live demo
🔭 Watch the live demo of the project deployed in Vercel :
[demo](https://condor-soft-full-stack-test-ssr.vercel.app/)

## 🧑‍💻 Technologies

- **📦 Package management:** `pnpm`
- **🎨 Frontend:** `Next JS`, `Tailwind CSS`, `React Query`. `Zustand`
- **🛂 Auth:** `NextAuth.js`
- **👔 Backend:** `Prisma`, `Postgres`, `Upstash` (Cron jobs), `Pusher `(WebSockets), `Nodemailer` (Sending emails)

## 👨‍🔧 Project set up

### ➕ Dependency installation

- Install the `pnpm` package manager following the instructions in:
```
https://pnpm.io/installation
```

- To install the project dependencies, run:
```
$ pnpm install
```
### 🗃️ PostgreSQL set up
- Set up PostgreSQL following the instructions at [Neon Tech](https://neon.tech/)
- Add the `DATABASE_URL` environment variable with the given URL in a `.env` file.
- Run database migrations with the command:
```
pnpm run db:push
```

### 🛂 NextAuth set up
- Set up NextAuth by following the instructions in [NextAuth.js](https://next-auth.js.org/getting-started/example).
- Add the `NEXTAUTH_URL` and `NEXTAUTH_SECRET` environment variables to the `.env` file.

### 🗄️ Upstash set up
- Set up Upstash by following the instructions in the *`schedules`* section of [Upstash] [Upstash](https://upstash.com/docs/qstash/features/schedules).
- Add the `QSTASH_BASE_URL` and `QSTASH_TOKEN` environment variables to the `.env` file.

### 🔃 Pusher set up
- Set up Pusher by following the instructions in the *`channels`* section in [Pusher](https://pusher.com/docs/channels/getting_started/javascript/?ref=docs-index).
- Add the environment variables `PUSHER_APP_ID`, `NEXT_PUBLIC_PUSHER_KEY`, `PUSHER_SECRET` and `NEXT_PUBLIC_PUSHER_CLUSTER` to the `.env` file.

### 📫 Nodemailer set up
- Set up Nodemailer by following the instructions in  [Nodemailer](https://nodemailer.com/).
- Add the `EMAIL_USER` and `EMAIL_PASSWORD` environment variables to the `.env` file.

### 🧑‍💻 Run app in dev mode
```
pnpm run dev
```

## 🔐 Example of `.env` file.
```
# PostgreSQL set up
DATABASE_URL=postgresql://user:password@host:5432/database_name

# NextAuth set up
NEXTAUTH_URL=your_next_auth_url // local or production app url
NEXTAUTH_SECRET=your_nextauth_secret_key

# Upstash set up
QSTASH_BASE_URL=your_qstash_base_url // ngrok tunnel url or production url
QSTASH_TOKEN=your_upstash_token

# Pusher set up
PUSHER_APP_ID=your_pusher_id
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
NEXT_PUBLIC_PUSHER_CLUSTER=your_next_public_pusher_cluster

# Nodemailer set up
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
```

## 🧱 Project structure
```
...
📁src
└── 📁modules // features
    └── 📁 auth
        └── 📁 components
            └── sign-in-container
            └── sign-in-form
            └── sign-in-section
            └── sign-up-container
            └── sign-up-form
            └── sign-up-section
        └── 📁 hooks
            └── useSignUp.ts
        └── 📁 services
            └── index.ts
        └── 📁 utils
            └── validation.ts
    └── 📁 core
        └── 📁 assets
            └── 📁 img
        └── 📁 components
        └── 📁 hooks
        └── 📁 lib
        └── 📁 services
        └── 📁 utils
    └── 📁 reminder
        └── 📁 components
        └── 📁 hooks
        └── 📁 services
        └── 📁 store
        └── 📁 templates
        └── 📁 utils
    └── 📁 pages
        └── 📁 api
        └── 📁 auth
        └── _app.tsx
        └── index.tsx
    └── 📁 server
    └── 📁 styles
    └── env.js
    └── middleware.ts
    ...
```

## 🎨 Design

The design is based on the schematics provided in Figma. You can find the designs at this link: [Prueba - CondorSoft](https://www.figma.com/design/EZLhCjYcr4vDxSE3mpZVr6/Technical-Test?node-id=0-1&t=eMK8tASYXG55hbX9-0).
