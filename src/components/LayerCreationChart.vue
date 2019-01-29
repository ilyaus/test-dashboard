<template>
  <div class="col-lg-2">
    <canvas :id="getChartId()"></canvas>
  </div>
</template>

<script>
export default {
  props: ['chartId'],
  methods: {
    getChartId () {
      return 'chart-' + this.chartId
    }
  }
}
</script>
