<script setup>
import cardStyleHot from '@/components/popularcardComponent.vue'
</script>

<template>
  <div class="bg-image">
    <div class="filter-blur">
    </div>
  </div>
  <div  class="banner">
    <h1>Time to brighten your wrist <br>with high tech watches...</h1>
  </div>

  <main>
    <h2>What's HOT right now?</h2>
    <card-style-hot></card-style-hot>
  </main>

</template>

<style scoped>
.bg-image {
  background-image: url("../assets/Background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1024px;
  position: relative;
}

.bg-image .filter-blur {
  background: rgba(240, 227, 227, 0.5);
  backdrop-filter: blur(10px);
  position: absolute;
  width: 100%;
  height: 1024px;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.banner h1 {
  font-size: 75px;
  color: #212121;
  position: absolute;
  margin-bottom: 60%;
}

h2 {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
}

</style>