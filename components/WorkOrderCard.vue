<script setup lang="ts">
import { emptyHttpWO, woHttpData, } from "@/common/workOrderMocks";

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
</script>

<template>
  <v-card class="rounded-sm" height="84vh">
    <CardTitle icon="mdi-database-search" title="Order Information" />
    <v-card-text class="px-8 py-6">
      <div class="fill-height">
        <RowCard keyItem="workOrder" field="Work Order" :content="props.data.workOrder" />
        <RowCard keyItem="itemNumber" field="Item Number" :content="props.data.itemNumber" />
        <RowCard keyItem="image" field="Image" :content="props.data.image" />
        <RowCard keyItem="qty" field="Quantity" :content="`${props.data.qty}`"
          :highlight="(props.currentStep >= 9 && props.currentStep <= 10) ? true : false" />
        <RowCard keyItem="unitWeightLb" field="Unit Weight (Lb)"
          :content="`${props.data.unitWeightLb.toFixed(3)} lb`" />
        <RowCard keyItem="weightRange" field="Weight Range (Lb)"
          :content="`${props.data.unitLowerLimitLb.toFixed(3)} - ${props.data.unitUpperLimitLb.toFixed(3)} gr`" />
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