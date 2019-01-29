<template>
  <div class="container-fluid">
    <div class="row">
      <div class="chart-title">{{ containerTitle }}</div>
    </div>
    <div class="row">
      <layer-creation-chart v-for="index in 4" :key="index" :chartId="index"/>
    </div>
  </div>
</template>

<script>
import LayerCreationChart from './LayerCreationChart.vue'

export default {
  name: 'LayerCreationContainer',
  props: {
    containerTitle: {
      type: String,
      default: 'Stream Layer'
    }
  },
  data () {
    return {
      title: 'Stream Layer',
      index: 1
    }
  },
  components: {
    layerCreationChart: LayerCreationChart
  }
}
</script>

<style scoped>
  div {
    background-color: azure;
    margin: 2px;
  }
</style>
