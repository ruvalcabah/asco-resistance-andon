<script setup lang="ts">
import { useTick } from "@/composables/useTick";
// Tick Composable
const { tick } = useTick(500);

export interface Props {
  measure: number
  lowerLimit: number
  upperLimit: number
  currentStep: number
  shortText: string
}

const props = withDefaults(defineProps<Props>(), {
  measure: 0,
  lowerLimit: 0,
  upperLimit: 0,
  currentStep: 0,
  shortText: `Empty
  
  
  
  
  
  
  
  .
  `
})

const textHighlightColor = computed<string>(() => {
  return (props.measure >= props.lowerLimit && props.measure <= props.upperLimit)
    ? 'text-cyan-accent-3'
    : 'text-lime-accent-2' // 'text-cyan-accent-2'
})

const resistancePass = computed<string>(() => { //: stepDisplay[]
  return tick.value ? 'bg-green-accent-3' : 'bg-green'
})
const resistanceNotPass = computed<string>(() => { //: stepDisplay[]
  return tick.value ? 'bg-red-darken-1' : 'bg-red-darken-4'
})
</script>

<template>
  <!-- Resistance Pass or NOT Pass -->
  <v-card class="rounded-sm"
    :class="(props.currentStep == 4 && (props.measure >= props.lowerLimit && props.measure <= props.upperLimit)) ? resistancePass : props.currentStep == 6 ? resistanceNotPass : ''">
    <CardTitle icon="mdi-gauge" title="Measure Weight" />
    <v-card-text class="pl-6 pr-2 py-4 pb-15">
      <div class="fill-height">
        <v-row align="center" class="justify-center">
          <v-col cols="4" class="px-4" align="center">
            <!-- <v-img height="460" max-width="350" contain src="/svg/ilu-pack-a-shipment_1.svg" /> -->
            <v-card class="bg-grey-lighten-4" variant="text">
              <v-card-text class="text-red-darken-4 text-left px-8 py-8">
                <pre>{{ props.shortText }}</pre>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="8" class="px-6">
            <v-row class="justify-center">
              <v-col cols="4">
                <v-img height="300" max-width="300" contain
                  :src="props.currentStep == 0 || props.currentStep == 1 || props.currentStep == 10 ? '/img/scanner.png' : '/img/meter.png'" />
              </v-col>
              <v-col cols="9">
                <v-card elevation="0" class="px-3 py-8 text-center font-weight-black bg-black"
                  :class="(props.measure < 1000) ? 'text-h1' : 'text-h2'">
                  <span :class="textHighlightColor">{{ props.measure.toFixed(2) }} Ω</span>
                </v-card>
              </v-col>
            </v-row>
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