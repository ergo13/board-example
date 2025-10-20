import { ref, watch } from 'vue';

export function useTheme() {
  let isDark = ref<boolean>(true);

  const toggleTheme = () => (isDark.value = !isDark.value);

  onMounted(() => {
    watch(
      isDark,
      (val) => {
        document.documentElement.classList.toggle('dark-theme', val);
      },
      { immediate: true }
    );
  });

  return { isDark, toggleTheme };
}
