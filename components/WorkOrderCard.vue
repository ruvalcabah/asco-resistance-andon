<script setup lang="ts">
import { emptyHttpWO, woHttpData, } from "@/common/workOrderMocks";

import { useHTTP } from "@/composables/useHTTP";
// Fetch Composable
const { fetchPost } = await useHTTP()

export interface Props {
  data: woHttpData
  currentStep: number
}

const props = withDefaults(defineProps<Props>(), {
  data: () => {
    return emptyHttpWO
  },
  currentStep: 0
})

const orderUpdate = (eventPayload) => {
  // props.data.workOrder = eventPayload.workOrder
  const res = fetchPost({ payload: eventPayload.workOrder })
}
</script>

<template>
  <v-card class="rounded-sm bg-grey-lighten-4" height="84vh">
    <CardTitle icon="mdi-database-search" title="Order Information" />
    <v-card-text class="px-8 py-6">
      <div class="fill-height">
        <RowCard keyItem="workOrder" field="Work Order" :content="props.data.workOrder" @orderUpdate="orderUpdate" />
        <RowCard keyItem="itemNumber" field="Item Number" :content="props.data.itemNumber" />
        <RowCard keyItem="image" field="Image" :content="props.data.image" />
        <RowCard keyItem="qty" field="Order Quantity" :content="`${props.data.qty}`"
          :highlight="(props.currentStep >= 9 && props.currentStep <= 10) ? true : false" />
        <RowCard keyItem="resistance" field="Resistance (ohm)"
          :content="`${props.data.resistance.toLocaleString()} Ω`" />
        <RowCard keyItem="resistanceRange" field="Resistance Range"
          :content="`${props.data.resLower.toLocaleString()} - ${props.data.resUpper.toLocaleString()} Ω`" />
        <RowCard keyItem="turns" field="Turns Count" :content="`${props.data.turns.toLocaleString()}`" />
        <RowCard keyItem="turnsRange" field="Turns Range"
          :content="`${props.data.turnsLower.toLocaleString()} - ${props.data.turnsUpper.toLocaleString()}`" />
        <!-- <RowCard keyItem="weightRange" field="Weight Range (Lb)"
          :content="`${props.data.unitLowerLimitLb.toFixed(3)} - ${props.data.unitUpperLimitLb.toFixed(3)} lb`" /> -->
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.v-card-item {
  padding: 0px;
}

.v-text-field .v-input__control {
  min-height: 10px;
}

.v-label {
  font-size: 10px;
}
</style>