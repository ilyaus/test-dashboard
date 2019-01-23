<template>
    <div class="container">
        <line-chart
            v-if="loaded"
            :chartData="chartData"
            :chartOptions="chartOptions"/>
    </div>
</template>

<script>
import { LineChart } from '../chart'

Vue.component('line-chart', LineChart)

export default {
  name: 'LineChart',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = await fetch('http://10.126.64.47:9001/test/Streaming32MBps_1KbMsg_Stable/result')
      this.chartData = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
