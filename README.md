# 🧬 Nucleus Template

A highly optimized, bleeding-edge **Nuxt 4** starter template engineered for speed, clean architecture, and bulletproof type safety. Driven by **Bun** and powered by **Tailwind v4 via Vite**, this boilerplate isolates application logic neatly inside the Nuxt 4 layer system.

## 🚀 Tech Stack

- **Runtime:** [Bun](https://bun.sh/) (Hyper-fast package management and execution)
- **Framework:** [Nuxt 4](https://nuxt.com/) (Using the modern `app/` application layer layout)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Integrated directly through the lightning-fast native Vite plugin)
- **State Management:** [Pinia](https://pinia.vuejs.org/) (Global states structured with the clean Composition API setup syntax)
- **Validation:** [Vee-Validate](https://vee-validate.logaretm.com/v4/) & [Zod](https://zod.dev/) (Form handling matched with strict TypeScript validation schemas)
- **Primitives:** [Reka UI](https://reka-ui.custom-caps.com/) (Unstyled, fully accessible interactive primitives)
- **Code Quality:** [ESLint v9](https://eslint.org/) & [Prettier](https://prettier.io/) via `@nuxt/eslint`

---

## 📂 Project Architecture

This boilerplate conforms directly to the **Nuxt 4 structural spec**, containing all source code and assets safely inside the `app/` layer folder to keep the root directory isolated for tooling configurations:

```text
nucleus/
├── .nuxt/
├── node_modules/
├── app/                      <-- Nuxt 4 Core App Layer
│   ├── assets/
│   │   └── css/
│   │       └── main.css      <-- Tailwind v4 Global CSS Entry
│   ├── components/           <-- Auto-imported components
│   ├── composables/          <-- Auto-imported composition state logic
│   ├── layouts/              <-- Custom page wrappers
│   ├── pages/                <-- File-based routing engine
│   ├── services/             <-- API and background services
│   ├── stores/               <-- Pinia states (Includes reactive Dark Mode)
│   ├── types/                <-- Custom TypeScript definitions
│   ├── utils/                <-- Standard pure utility helper functions
│   └── app.vue               <-- Application root entry point
├── eslint.config.mjs         <-- Unified ESLint Rules
├── nuxt.config.ts            <-- Nuxt Configuration (Vite + Tailwind v4 pipeline)
├── package.json
└── tsconfig.json
```

## 🛠️ Quick Start

Follow these steps to instantiate a pristine project locally using this template layout:

1. Clone the Blueprint

- Clone the template repository with a history depth of 1 to keep your new project's history clean:
  - git clone --depth 1 https://romeoxii/nuxtv4-template.git <my-new-app>
  - cd my-new-app

2. Disconnect and Re-initialize Git

- Strip the template's remote origins and instantiate a fresh local repository tracking configuration:

  # Mac / Linux / Git Bash
  - rm -rf .git && git init

  # Windows PowerShell
  - Remove-Item -Recurse -Force .git; git init

3. Clear Environment & Warm Up

   # Run the optimization script to purge stale build locks, pull dependencies via Bun, and generate structural Nuxt definitions:
   - bun run clean

4. Boot Dev Engine
   # Spin up your local Vite development engine with active hot module reloading:
   - bun run dev

# Command Action

- bun run dev -----> Spins up the Vite local application server with active hot module reloading.
- bun run build -----> Compiles a production-ready application bundle optimized for serverless deployments.
- bun run clean -----> Wipes the .nuxt cache folder and installs clean node dependencies via Bun.
- bun run preview -----> Runs a local preview simulation of your production server bundle.
