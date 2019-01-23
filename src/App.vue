<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="username">Username</label>
            <input type="text" class="form-control" v-model="server_data.user_name">
          </div>
          <div class="form-group">
            <label for="" class="email">EMail</label>
            <input type="text" class="form-control" v-model="server_data.email">
          </div>
          <button class="btn btn-primary" @click="submit">Submit</button>

          <ul class="list-group">
            <li class="list-group-item" v-for="(u, index) in server_data.perf_data.ramps" :key=index>
              {{u.throughputMBps}} {{index}}
            </li>
          </ul>
        </div>
      </div>
    </div>

  <!-- Charts -->
  <bar-chart :width="width" />

  </div>

</template>

<script>

export default {
  data () {
    return {
      server_data: {
        'perf_data': {},
        'user_name': 'Sample user name',
        'email': 'Sample user email'
      }
    }
  },
  methods: {
    submit () {
      console.log('Submitting data')
      this.$http.get('http://10.126.64.47:9001/test/Streaming32MBps_1KbMsg_Stable/result')
        .then(response => {
          console.log(response.data)
          this.server_data.perf_data = response.data
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
