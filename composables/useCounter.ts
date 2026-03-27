// composables/useCounter.ts
export const useCounter = () => {
  // Estado global reactivo con useState
  const counter = useState<number>('counter', () => 0);

  const increment = () => {
    counter.value++;
  };

  const reset = () => {
    counter.value = 0;
  };

  return {
    counter,
    increment,
    reset
  };
};
