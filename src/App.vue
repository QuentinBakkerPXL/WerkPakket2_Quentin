<template>
  <!-- Show header except on 'thankyou' page -->
  <NavGeneral v-if="showHeader" />

  <router-view />

  <!-- Show footer except on 'thankyou' and 'login' pages -->
  <FooterGeneral v-if="showFooter" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import FooterGeneral from './components/footer.vue';
import NavGeneral from './components/navbar.vue';

const route = useRoute();

// Hide header on 'thankyou' page
const showHeader = computed(() => route.name !== 'thankyou');
// Hide footer on 'thankyou' and 'login' pages
const showFooter = computed(() => route.name !== 'thankyou' && route.name !== 'login');
</script>
