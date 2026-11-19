# Persistech — Website Institucional

Website corporativo da **Persistech** (`www.persistec.com`), desenvolvido com **Next.js (App Router)**, **React 19**, **Tailwind CSS v4** e **TypeScript**, seguindo o sistema visual **Persistech Aurum** ([DESIGN.md](./DESIGN.md)).

## Stack Tecnológica

- **Framework:** Next.js (App Router, React Compiler ativo, geração estática + Server Actions)
- **Estilos & Design System:** Tailwind CSS v4 (`@theme` em `src/app/globals.css`) — *Persistech Aurum*
- **Tipografia:** Self-hosted via `next/font/local` (`Sora`, `Inter`, `JetBrains Mono`)
- **Ícones:** `lucide-react`
- **Formulário de Contacto:** Server Action (`src/app/contactos/actions.ts`) integrada com a API HTTP da [Resend](https://resend.com)

## Desenvolvimento Local

Instalar dependências e iniciar o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev` — servidor de desenvolvimento
- `npm run lint` — verificação ESLint
- `npm run build` — compilação otimizada de produção
- `npm run start` — servidor de produção local

## Variáveis de Ambiente

Para ativar o envio automático do formulário em `/contactos`, configurar em `.env.local` (ou nas variáveis do projeto Vercel):

```bash
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=website@persistec.com
CONTACT_TO_EMAIL=info@persistec.com
```

Sem `RESEND_API_KEY`, o formulário apresenta uma mensagem de alternativa indicando o contacto direto por email (`info@persistec.com`).

## Estrutura de Rotas

- `/` — Página inicial
- `/quem-somos` — Missão, visão, valores, jornada e parceiros certificados
- `/solucoes` — Microsoft 365 e soluções técnicas empresariais
- `/licenciamento` — Licenciamento Microsoft, 3CX, Google, Malwarebytes e Kaspersky
- `/servicos` — Suporte técnico, Newmedia e hardware
- `/newmedia` — Plataformas digitais, gestão e identidade/comunicação
- `/portfolio` — Portefólio de projetos desenvolvidos
- `/contactos` — Canais diretos e formulário de contacto
