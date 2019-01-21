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
            <input type="text" class="form-control" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="" class="email">EMail</label>
            <input type="text" class="form-control" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      user: {
        'username': '',
        'email': ''
      }
    };
  },
  methods: {
    'submit': ''
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
