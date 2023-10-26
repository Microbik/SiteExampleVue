<template>

<div class="img">
  <div class='wrapper'>
    <TheNav/>
    <router-view></router-view>
  </div>
</div>

<div></div>
</template>

<script>

import TheNav from "./components/Nav.vue"

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style>
#app{
  margin: -10px;
  padding: 0
}

.wrapper {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  background-image: url(./assets/dnd-5e-dragonlance-chapter-2-art-1.avif);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: bisque;
  height: 120vh;
}



</style>
