<script>
export default {
  data() {
    return {
      topProducts: []
    };
  },
  created() {
    this.sortAndFilterProducts();
  },
  methods: {
    sortAndFilterProducts() {
      this.topProducts = [...products]
          .sort((a, b) => b.stock - a.stock) // Sort by stock in descending order
          .slice(0, 4); // Get top 4 products
    }
  }
}
</script>
<script setup>
import products from '@/assets/products.json'
</script>

<template>
  <div class="wrapper">
    <div v-for="product in topProducts" :key="product.id" class="single-card">
      <div class="img-area">
        <img :src="product.image" :alt="product.title">
        <div class="overlay">
          <button @click="addToCart(product)" class="add-to-cart">Add to cart</button>
          <button class="view-details">View details</button>
        </div>
      </div>
      <div class="info">
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 6% auto 0;
}

.single-card {
  position: relative;
  width: 280px;
  height: 400px;
  margin: 15px;
  transition: box-shadow 0.3s ease, transform 0.8s ease-in-out;
  overflow: hidden;
  background: #212121;
  border-radius: 15px;
}

.single-card:hover {
  transform: translateY(-10px);
}

.img-area {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.img-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.img-area img:hover {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #5b95d4;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.single-card:hover .overlay {
  opacity: 1;
}

.add-to-cart, .view-details {
  background-color: #F2F2F2;
  color: #212121;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-bottom: 10px;
}

.add-to-cart:hover, .view-details:hover {
  background-color: #c76744;
  color: #F2F2F2;
  border: none;
}

.info {
  padding: 10px;
  text-align: center;
  color: #F2F2F2;
}

.info h3 {
  margin: 15px 0 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Bebas Neue', sans-serif;
}

.info .price {
  margin: 0;
  font-size: 30px;
  color: #5b95d4;
}

</style>