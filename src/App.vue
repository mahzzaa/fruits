<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <inputAnimation></inputAnimation>

  </div>
</template>

<script>
import mivefurushi from './components/mivefurushi'
import navbar from './components/navbar'
import inputAnimation from './components/iputAnimation'


export default {
  name: 'App',
  components: {
    'navbar': navbar,
    'inputAnimation': inputAnimation
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