<script setup>

</script>

<template>
  <header class="header">
    <div class="logo">
    <router-link to="/">Home</router-link>
    </div>

    <nav class="navbar">
      <router-link to="/overzicht">Overzicht</router-link>
      <router-link to="/detail">Detail</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>

  </header>
</template>

<style scoped>
.header {
  position: fixed;
  background-color: #F2F2F2;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.header .logo {
  font-size: 32px;
  color: #212121;
  text-decoration: none;
  font-weight: 700;

}

.navbar a {
  position: relative;
  font-size: 18px;
  color: #212121;
  font-weight: 500;
  text-decoration: none;
  margin-left: 40px;
}

.navbar a:hover {
  color: #5b95d4;
}

</style>