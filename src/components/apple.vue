<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto w-100 justify-content-end">
                    <li><router-link class="nav-link" to="/apple" exact>Apple<span class="sr-only">(current)</span></router-link></li>
                    <li><router-link class="nav-link" to="/kiwi" exact>kiwi</router-link></li>
                    <li><router-link class="nav-link" to="/banana" exact>banana</router-link></li>
                    <li><router-link class="nav-link" to="/orange" exact>orange</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
        <img src="@/assets/apple.jpg" alt="Image alt" />

    </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background-color: #fff;
}
</style>