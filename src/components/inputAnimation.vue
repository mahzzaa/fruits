<template>
  <div id="input">
      <h1>Animation Input</h1>

    <div class="form">
        <input type="text" name="name" autocomplete="off" required>
        <label for="name" class="label-name">
            <span class="content-name">
                Name
            </span>
        </label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#input{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    background-color: #fff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.form{
    width: 50%;
    position: relative;
    height: 50px;
    overflow: hidden;
}

.form input{
    width: 100%;
    height: 100%;
    color: #595f6e;
    padding-top: 20px;
    border: none;
    outline: none;
}

.form label{
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;
}

.form label::after{
    content: " ";
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #4beee3;
    transform: translateX(-100%);
    transition: all 0.3s ease;
}

.content-name{
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: transform 0.3s ease;
}

.form input:focus + .label-name .content-name ,
 .form input:valid + .label-name .content-name{
    transform: translateY(-150%);
    font-size: 14px;
    color:#4beee3 ;
}

.form input:focus + .label-name::after , 
.form input:valid + .label-name::after{
    transform: translateX(0%);
}
</style>