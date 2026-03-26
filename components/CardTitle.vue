<script setup lang="ts">
export interface Props {
  icon?: string
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'mdi-vuejs',
  title: 'Default Title',
})
</script>

<template>
  <v-card-title class="bg-grey-lighten-2 text-body-2 text-grey-darken-4 px-4 py-1 font-weight-bold d-flex align-center">
    <v-icon :icon="icon" class="mr-2" />
    <span class="pt-1">
      {{ props.title }}
    </span>
  </v-card-title>
</template>
<style scoped lang="scss">
.v-card-title {
  font-size: 0.875rem;
}
</style>