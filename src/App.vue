<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/fruit.png">
    <router-view></router-view>

  </div>
</template>

<script>
import mivefurushi from './components/mivefurushi'
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style`>
body{
  background-color:#fff8ee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  width: 25%;
}
</style>
