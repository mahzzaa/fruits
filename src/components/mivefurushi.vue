<template>
    <div>
        <img src="@/assets/fruit.png" alt="Image alt" />
        <h1>{{ msg }}</h1>
        <h2>select your fruit from navbar</h2>
    </div>

    
</template>

<script>

export default {
components:{
},
data () {
    return {
      msg: 'Welcome to Your Fruit App'
    }
  }
}
</script>

<style scoped>
body{
    background-color: #fff8ee;
}
.router-link-active{
    background:#eee;
}

img{
    width: 25%;
}

h2{
    color: #e01721;
}

.nav{
    top: 0;
}

</style>