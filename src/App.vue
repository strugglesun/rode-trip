<template>
  <div id="app">  
      <transition name="fade" mode='out-in'>
        <router-view />
    </transition>
  </div>
</template>

<script>
import Home from '../src/views/Home'
export default {
  name: 'app',
  Home
}
</script>

 

<style>
body{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
p,h3,ul,li,h4{
  margin:0;
  padding: 0;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
*{
  box-sizing: border-box;
}
html{
  font-size: 20px;
}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 3s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
