<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<template>
  <button
    class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200"
  >
    <slot>{{ label || "Click Me" }}</slot>
  </button>
</template>
