import { ref, onMounted, onUnmounted } from "vue";

export const useTime = () => {
  const currentTime = ref<string>(new Date().toLocaleTimeString());
  let timer: ReturnType<typeof setInterval>;

  onMounted(() => {
    timer = setInterval(() => {
      currentTime.value = new Date().toLocaleTimeString();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { currentTime };
};
