<script setup lang="ts">
export interface Props {
  keyItem: string
  field: string
  content: string
  highlight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  keyItem: 'Key',
  field: 'Field',
  content: 'Content',
  highlight: false
})
</script>

<template>
  <v-row class="mb-6" no-gutters>
    <v-col align-self="center">
      <v-card>
        <!-- </v-card>class="mx-0 mb-6"> -->
        <v-row class="py-2 px-2" align="center">
          <v-col cols="5" class="px-2 py-4 text-right text-h6 font-weight-bold">
            {{ props.field }}:
          </v-col>
          <v-col cols="7" align-self="center" class="px-1 py-3 text-left text-h6" v-if="props.keyItem != 'image'">
            <span class="px-1 py-1 text-red-darken-4" :class="props.highlight && 'bg-red-accent-3'">
              {{ props.content }}
            </span>
          </v-col>
          <v-col class="px-1" align="center" v-else>
            <v-img height="150" max-width="300" contain :src="`/img/${props.content}`" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>