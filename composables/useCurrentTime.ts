import { ref, onMounted } from 'vue';

export const useCurrentTime = () => {
  const currentTime = ref<string>('');
  const currentDate = ref<string>('');

  const updateCurrentTime = () => {
    setInterval(() => {
      const currentTimeDate = new Date();
      currentTime.value = currentTimeDate.toLocaleTimeString();
      currentDate.value = currentTimeDate.toLocaleDateString();
    }, 1000);
  };

  onMounted(() => {
    updateCurrentTime();
  });
  return { currentTime, currentDate };
};
