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

const workOrder = ref<string>('Empty')

// Declare the events this component can emit
const emit = defineEmits(['orderUpdate']);

onBeforeUpdate(() => {
  if (props.keyItem = 'workOrder') {
    workOrder.value = props.content
  }
})

const orderChange = (event) => {
  // Emit the event, optionally with a payload
  emit('orderUpdate', { workOrder: workOrder.value });
  event.target.select()
};

const onEnter = () => {
  alert('User cleared the input')
}
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
          <v-col class="px-1" align="center">
            <v-img height="150" max-width="300" contain :src="`/img/${props.content}`" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>