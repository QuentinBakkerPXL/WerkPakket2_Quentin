<script setup>
import cardStyle from '@/components/productcardComponent.vue'
</script>

<template>
  <main>
    <div class="introductie">
      <h1 class="titeloverzicht">Timecraft</h1>
      <p class="omschrijvingoverzicht">Experience the art of innovation and craftsmanship in every watch we create. Our timepieces are meticulously handcrafted, fusing cutting-edge technology with timeless design. Each watch is a testament to dedication and expertise, reflecting sophistication and individuality.</p>
    </div>
    <div class="filter">
      <button class="button seasonal">Seasonal</button>
      <button class="button gen1">Gen 1</button>
      <button class="button new">New</button>
    </div>
  </main>
    <card-style>
  </card-style>
</template>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px 0;
}

.filter .button {
  background-color: #212121;
  border: none;
  color: #F2F2F2;
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  font-size: 17px;
  border-radius: 25px;
}

.filter .button:hover {
  background-color: #c76744;
  color: #F2F2F2;
}

</style>