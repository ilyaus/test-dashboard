<template>
  <div id="app">
    <nav-bar/>
    <div class="container-fluid">
      <side-bar @updateTitle="updateCurrentTitle($event)"/>
      <div class="row">
        <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4">
          <page-header/>
          <layer-creation-container :containerTitle="currentTitle"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import PageHeader from './components/PageHeader.vue'
import SideBar from './components/SideBar.vue'
import LayerCreationContainer from './components/LayerCreationContainer.vue'

export default {
  props: {
    containerTitle: {
      type: String,
      default: 'Stream Layer'
    }
  },
  data () {
    return {
      server_data: {
        'perf_data': {},
        'user_name': 'Sample user name',
        'email': 'Sample user email'
      },
      currentTitle: 'Stream Layer'
    }
  },
  components: {
    navBar: NavBar,
    pageHeader: PageHeader,
    sideBar: SideBar,
    layerCreationContainer: LayerCreationContainer
  },

  methods: {
    submit () {
      console.log('Submitting data')
      this.$http.get('http://10.126.64.47:9001/test/Streaming32MBps_1KbMsg_Stable/result')
        .then(response => {
          console.log(response.data)
          this.server_data.perf_data = response.data
        })
    },
    updateCurrentTitle (title) {
      this.currentTitle = title.charAt(0).toUpperCase() + title.slice(1) + ' ' + 'Layer'
    }
  },
  watch: {
    currentTitle () {
      console.log('Updating title to ' + this.currentTitle)
    }
  },
  mounted () {
    const dashboardScript = document.createElement('script')
    dashboardScript.setAttribute('src', 'js/dashboard.js')
    document.head.appendChild(dashboardScript)
  }
}

</script>

<style>
</style>
