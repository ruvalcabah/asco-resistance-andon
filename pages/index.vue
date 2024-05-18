<script setup lang="ts">
import { emptyHttpWO, dummyHttpWO, woHttpData } from "@/common/workOrderMocks";
import { operationSteps } from "@/common/operationMocks";
import { useWebSocket } from "@/composables/useWebSocket";
import { useHTTP } from "@/composables/useHTTP";

// WebSocket Composable
const { socketData, establishConnection } = useWebSocket();

// Fetch Composable
const { fetchData } = await useHTTP()

// Component Initialization
onMounted(() => {
  establishConnection();
});

// Component Data
const stepData = ref<number>(0)

const measureData = computed<number>(() => {
  return socketData.value.weight || 0
})

const fieldData = ref<woHttpData>(emptyHttpWO) //  emptyHttpWO/dummyHttpWO

// Watchers
watch(
  socketData,
  () => {
    stepData.value = !socketData.value.state ? 0 :
      operationSteps.indexOf(socketData.value.state)
  },
  { immediate: true }
)

watch(
  stepData,
  async (newVal: number, oldVal: number) => {
    if (newVal != oldVal) {
      try {
        // console.log('Fetch Completado?')
        fieldData.value = await fetchData().then(res => res.data)
        // console.log(fieldData.value)
      }
      catch (error) {
        console.error('Error en Fetch desde Watcher', error)
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <v-row>
    <v-col cols="4">
      <WorkOrderCard :data="fieldData" :currentStep="stepData" />
    </v-col>
    <v-col cols="8">
      <v-row>
        <!-- REMOVE THIS -->
        <!-- <v-spacer />
        <v-col class="mx-0 my-0 px-0 py-0" cols="2" align-self="center">{{ socketData.state }}</v-col>
        <v-spacer /> -->
        <!-- REMOVE THIS -->
        <v-col cols="12">
          <OperationCard :currentStep="stepData" />
        </v-col>
        <v-col cols="12">
          <!-- <MeasureWeightCard /> -->
          <WeightCard :measure="measureData" :lowerLimit="fieldData.unitLowerLimitLb"
            :upperLimit="fieldData.unitUpperLimitLb" />
          <!-- -->
          <!-- :lowerLimit="0" :upperLimit="10" /> -->
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>