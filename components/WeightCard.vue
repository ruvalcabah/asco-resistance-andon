<script setup lang="ts">
export interface Props {
  measure: number
  lowerLimit: number
  upperLimit: number
}

const props = withDefaults(defineProps<Props>(), {
  measure: 0,
  lowerLimit: 0,
  upperLimit: 0
})

const textHighlightColor = computed<string>(() => {
  return (props.measure >= props.lowerLimit && props.measure <= props.upperLimit)
    ? 'text-light-green-accent-3'
    : 'text-lime-accent-2' // 'text-cyan-accent-2'
})
</script>

<template>
  <v-card class="rounded-sm">
    <CardTitle icon="mdi-weight-kilogram" title="Measure Weight" />
    <v-card-text class="pl-6 pr-2 py-4">
      <div class="fill-height">
        <v-row align="center">
          <v-col cols="4" class="px-4" align="center">
            <v-img height="460" max-width="350" contain src="/svg/ilu-pack-a-shipment_1.svg" />
          </v-col>
          <v-col cols="8" class="px-6">
            <v-card elevation="0" class="px-3 py-8 text-center font-weight-black bg-black"
              :class="(props.measure < 10) ? 'text-h1' : 'text-h2'">
              <span :class="textHighlightColor">{{ props.measure.toFixed(3) }} lb</span>
            </v-card>
          </v-col>
        </v-row>
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