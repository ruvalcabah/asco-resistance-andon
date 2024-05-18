import { computed } from 'vue';
import { useTick } from '@/composables/useTick';

// Tick Composable
const { tick } = useTick(500);

export const useDisplayState = () => {
  const currentDisplay = computed<string>(() => {
    return 'bg-blue-darken-4';
  });

  const activeDisplay = computed<string>(() => {
    return tick.value ? 'bg-blue-lighten-1' : 'bg-blue-darken-4';
  });

  const passedDisplay = computed<string>(() => {
    return 'bg-green-darken-2';
  });

  const alarmDisplay = computed<string>(() => {
    return tick.value ? 'bg-red-lighten-1' : 'bg-red-darken-4';
  });

  return { currentDisplay, activeDisplay, passedDisplay, alarmDisplay };
};
