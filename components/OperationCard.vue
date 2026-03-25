<script setup lang="ts">
import { stateSteps } from "@/common/operationMocks";
import { useTick } from "@/composables/useTick";

// Tick Composable
const { tick } = useTick(500);

// Component Initialization
export interface Props {
  currentStep: number
}

const props = withDefaults(defineProps<Props>(), {
  currentStep: 0,
})

// Component Data

const displaySteps = computed<{ state: string, caption: string }[]>(() => { //: stepDisplay[]
  const currentDisplay = 'bg-blue-darken-4'
  const activeDisplay = tick.value ? 'bg-blue-lighten-1' : 'bg-blue-darken-4'
  const passedDisplay = 'bg-green-darken-2'
  const alarmDisplay = tick.value ? 'bg-red-lighten-1' : 'bg-red-darken-4'

  return stateSteps.map((step) => {
    return {
      state: step.currentOn.includes(props.currentStep) ? currentDisplay
        : step.passedOn.includes(props.currentStep) ? passedDisplay
          : step.activeOn.includes(props.currentStep) ? activeDisplay
            : step.alarmOn.includes(props.currentStep) ? alarmDisplay : '',

      caption: step.alarmOn.includes(props.currentStep) ? step.alarmState :
        (step.passedOn.includes(props.currentStep) || !step.activeOn.includes(props.currentStep) ? step.currentState : step.activeState)
    }
  })
})
</script>

<template>
  <v-card class="rounded-sm">
    <CardTitle icon="mdi-progress-wrench" title="Operation Sequence" />
    <v-card-text class="px-8 py-8">
      <div class="fill-height">
        <v-row align="center">
          <v-col class="px-4" cols="displaySteps.length > 6 ? (step.caption.length > 14 && '2') : ''"
            v-for="step in displaySteps">
            <!-- <v-col v-for="step in displaySteps"> -->
            <v-card class="text-center font-weight-bold px-3 py-5" :class="step.state">
              <span>{{ step.caption }}</span>
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