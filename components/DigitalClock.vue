<script setup lang="ts">
import { useCurrentTime } from "@/composables/useCurrentTime";

const { currentTime, currentDate } = useCurrentTime();
</script>

<template>
  <div class="px-6 py-4 text-h6">
    <!-- <p>{{ date }} {{ time }}</p> -->
    <p>{{ currentDate }} {{ currentTime }}</p>
  </div>
</template>
