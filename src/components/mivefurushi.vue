<template>
    <div>
        <h1>mivefurushi</h1>
         <b-img src="src/assets/fruit.png" fluid></b-img>
        <h1>{{ msg }}</h1>
        <h2>select your fruit</h2>
        <ul>
            <li><router-link to="/apple" exact>Apple</router-link></li>
            <li><router-link to="/kiwi" exact>kiwi</router-link></li>
            <li><router-link to="/banana" exact>banana</router-link></li>
            <li><router-link to="/orange" exact>orange</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
data () {
    return {
      msg: 'Welcome to Your Fruit App'
    }
  }
}
</script>

<style>
body{
    background-color: #fff8ee;
}
.router-link-active{
    background:#eee;
}
</style>