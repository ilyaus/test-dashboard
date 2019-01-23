import { Bar } from 'vue-chartjs'

export default {

  extends: Bar,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    chartOptions: {
      type: Object,
      default: null
    },
    width: 400
  },
  mounted () {
    //this.renderChart(this.chartData, this.chartOptions)
    this.renderChart({
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f030203',
          data: [40, 23]
        }
      ]
    })
  }
}
