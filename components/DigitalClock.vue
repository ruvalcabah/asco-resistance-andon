<script setup lang="ts">
import { useCurrentTime } from "@/composables/useCurrentTime";

const { currentTime, currentDate } = useCurrentTime();
</script>

<template>
  <div class="px-3 py-4 text-h51 text-yellow clock">
    <!-- <p>{{ date }} {{ time }}</p> -->
    <p>{{ currentDate }}</p>
  </div>
  <div class="px-6 py-4 text-h5 text-yellow clock">
    <!-- <p>{{ date }} {{ time }}</p> -->
    <p>{{ currentTime }}</p>
  </div>
</template>
<style lang="scss" scoped>
.clock {
  font-size: 1.5rem;
}
</style>
