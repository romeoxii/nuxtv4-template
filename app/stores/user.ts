import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const name = ref<string>("Guest");
  const isLoggedIn = ref<boolean>(false);

  // Dark mode active state
  const isDark = ref<boolean>(true);

  function login(username: string) {
    name.value = username;
    isLoggedIn.value = true;
  }

  function toggleDarkMode() {
    isDark.value = !isDark.value;
  }

  // Watch state changes to dynamically apply or remove the .dark class on the root
  if (import.meta.client) {
    watch(
      isDark,
      (val) => {
        const root = document.documentElement;
        if (val) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      },
      { immediate: true },
    );
  }

  return { name, isLoggedIn, isDark, login, toggleDarkMode };
});
