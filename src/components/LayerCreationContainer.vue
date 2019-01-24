<template>
  <div class="container-fluid">
    <div class="row">
      <div class="chart-title">{{ title }}</div>
    </div>
    <div class="row">
      <div class="col">
        <layer-creation-chart/>
      </div>
      <div class="col">
        <layer-creation-chart/>
      </div>
    </div>
  </div>
</template>

<script>
import LayerCreationChart from "./LayerCreationChart.vue";

export default {
  name: "LayerCreationContainer",
  data: function() {
    return {
      title: "Stream Layer"
    };
  },
  components: {
    layerCreationChart: LayerCreationChart
  }
};
</script>
