<template>
  <div class="col">
    <canvas class="my-4 w-100" :id="getChartId()"></canvas>
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
