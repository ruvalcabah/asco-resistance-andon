import { ref, onMounted } from 'vue';

export const useTick = (interval: number = 1000) => {
  const tick = ref<boolean>(false);

  const updateTick = () => {
    setInterval(() => {
      tick.value = !tick.value;
    }, interval);
  };

  onMounted(() => {
    updateTick();
  });
  return { tick };
};
