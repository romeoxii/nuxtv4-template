<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { currentTime } = useTime();
</script>

<template>
  <NuxtLayout>
    <!-- Full-screen backdrop switching dynamically on .dark container context -->
    <div
      class="min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
    >
      <div class="text-center space-y-6 max-w-sm px-4">
        <!-- Badge -->
        <span
          class="inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
        >
          System Live
        </span>

        <!-- Typography -->
        <h1 class="text-4xl font-extrabold tracking-tight">
          Romeo's <span class="text-emerald-500">Template</span>
        </h1>

        <p class="text-sm text-slate-500 dark:text-slate-400">
          A minimalist Nuxt 4 production layout driven by Bun, Vite, Pinia, and
          Tailwind CSS.
        </p>
        <p class="text-xs text-slate-400">
          also includes vee-validate/zod and reka ui
        </p>

        <!-- Current Info Block -->
        <div class="py-2 text-xs font-mono text-slate-400 dark:text-slate-500">
          System Time: {{ currentTime }}
        </div>

        <!-- System Controls -->
        <div class="flex flex-col gap-2 pt-2">
          <BaseButton @click="userStore.toggleDarkMode">
            Switch to {{ userStore.isDark ? "Light" : "Dark" }} Mode
          </BaseButton>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
