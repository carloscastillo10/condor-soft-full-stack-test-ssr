# 🦅 Condor Soft Prueba Técnica Full Stack - SSR

¡Bienvenido al proyecto Condor Soft Prueba Técnica Full Stack! Este proyecto demuestra una aplicación full-stack robusta utilizando tecnologías modernas tanto para el frontend como para el backend.

## 🌐 Demo en Vivo
Mira la demo en vivo del proyecto desplegado en Vercel:
[demo](https://condor-soft-full-stack-test-ssr.vercel.app/)

## Tecnologías Utilizadas

- **Gestión de paquetes:** `pnpm`
- **Frontend:** `Next JS`, `Tailwind CSS`, `React Query`. `Zustand`
- **Autenticación y Autorización:** `NextAuth.js`
- **Backend:** `Prisma`, `Postgres`, `Upstash` (trabajos cron), `Pusher `(WebSockets), `Nodemailer` (envío de correos)


## ⚙️ Configuración del Proyecto

### Instalación de Dependencias

Instalar el gestor de paquetes `pnpm` siguiendo las instrucciones en

```
https://pnpm.io/installation
```
Para instalar las dependencias del proyecto, ejecuta:

```
$ pnpm install
```

### Configuración de PostgreSQL
Configura PostgreSQL siguiendo las instrucciones en [Neon Tech](https://neon.tech/)

 Agrega la variable de entorno `DATABASE_URL` con la URL proporcionada en un archivo `.env`.

Ejecuta las migraciones de la base de datos con el comando

```
pnpm run db:push
```

### Configuración de NextAuth
Configura NextAuth siguiendo las instrucciones en [NextAuth.js](https://next-auth.js.org/getting-started/example).

Agrega las variables de entorno `NEXTAUTH_URL` y `NEXTAUTH_SECRET` al archivo `.env`.

### Configuración de Upstash

Configura Upstash siguiendo las instrucciones en la sección de *`schedules`* en [Upstash](https://upstash.com/docs/qstash/features/schedules).

Agrega las variables de entorno `QSTASH_BASE_URL` y `QSTASH_TOKEN` al archivo `.env`.


### Configuración de Pusher

Configura Pusher siguiendo las instrucciones en la sección de *`channels`* en [Pusher](https://pusher.com/docs/channels/getting_started/javascript/?ref=docs-index).

Agrega las variables de entorno `PUSHER_APP_ID`, `NEXT_PUBLIC_PUSHER_KEY`, `PUSHER_SECRET` y `NEXT_PUBLIC_PUSHER_CLUSTER` al archivo `.env`.


### Configuración de Nodemailer

Configura Nodemailer siguiendo las instrucciones en [Nodemailer](https://nodemailer.com/).

Agrega las variables de entorno `EMAIL_USER` y `EMAIL_PASSWORD` al archivo `.env`.

### Ejecutar la Aplicación en Modo Desarrollo
```
pnpm run dev
```

## 🌍 Ejemplo de archivo `.env`.
```
# Configuración de PostgreSQL
DATABASE_URL=postgresql://user:password@host:5432/database_name

# Configuración de NextAuth
NEXTAUTH_URL=your_next_auth_url // local or production app url
NEXTAUTH_SECRET=your_nextauth_secret_key

# Configuración de Upstash
QSTASH_BASE_URL=your_qstash_base_url // ngrok tunnel url or production url
QSTASH_TOKEN=your_upstash_token

# Configuración de Pusher
PUSHER_APP_ID=your_pusher_id
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
NEXT_PUBLIC_PUSHER_CLUSTER=your_next_public_pusher_cluster

# Configuración de Nodemailer
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password

```
## 📂 Estructura del Proyecto
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

## 🎨 Diseño

El diseño se basa en los esquemas proporcionados en Figma. Puedes encontrar los diseños en este enlace: [Prueba - CondorSoft](https://www.figma.com/design/EZLhCjYcr4vDxSE3mpZVr6/Technical-Test?node-id=0-1&t=eMK8tASYXG55hbX9-0).

