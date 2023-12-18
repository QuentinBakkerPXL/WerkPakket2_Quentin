<script>
export default {
  name: 'App',
  // other options...
}
</script>

<script setup>
import FooterGeneral from './components/footer.vue';
import NavGeneral from './components/navbar.vue';
</script>

<template>
  <nav-general/>

  <router-view></router-view>


  <footer-general/>
</template>

