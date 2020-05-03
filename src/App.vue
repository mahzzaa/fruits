<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>

  </div>
</template>

<script>
import mivefurushi from './components/mivefurushi'
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #fff8ee;
  height: 100vh;
  box-sizing: border-box;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img{
  width: 25%;
}
</style>
