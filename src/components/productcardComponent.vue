<script>
import { useRouter } from 'vue-router';
import {useShopStore} from "@/store/shop.js";

export default {
  setup() {
    const router = useRouter();

    const detail = (id) => {
      router.push({ path: `/detail/${id}` });
    };

    return { detail };
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      filterGen1: false,
      filterSeasonal: false,
      filterNew: false,
    };
  },
  computed: {
    filteredProducts() {
      return products.filter(product => {
        return (!this.filterGen1 || product.Gen === 1) &&
            (!this.filterSeasonal || product.Seasonal === 'yes') &&
            (!this.filterNew || product.new === 'yes');
      });
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    }
  },
  methods: {
    detail(id) {
      const router = useRouter();
      router.push({ path: `/detail/${id}` });
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    toggleFilterGen1() {
      this.filterGen1 = !this.filterGen1;
    },
    toggleFilterSeasonal() {
      this.filterSeasonal = !this.filterSeasonal;
    },
    toggleFilterNew() {
      this.filterNew = !this.filterNew;
    },

    addToCart(product) {

      useShopStore().addToCart(product);
      alert("Product has been added to shopping cart.");
    },
    trimDescription(description) {
      const trimmed = description.split(/\. +/)[0];
      return trimmed.length < description.length ? trimmed + '...' : trimmed;
    }
  }
}
</script>
<script setup>
import products from '@/assets/products.json'
</script>

<template>
<!--  filters-->
  <div class="filters">
    <button
        :class="['button', { 'button-active': filterGen1 }]"
        @click="toggleFilterGen1">
      {{ filterGen1 ? 'Hide Gen 1' : 'Show Gen 1' }}
    </button>
    <button
        :class="['button', { 'button-active': filterSeasonal }]"
        @click="toggleFilterSeasonal">
      {{ filterSeasonal ? 'Hide Seasonal' : 'Show Seasonal' }}
    </button>
    <button
        :class="['button', { 'button-active': filterNew }]"
        @click="toggleFilterNew">
      {{ filterNew ? 'Hide New' : 'Show New' }}
    </button>
  </div>

  <div class="wrapper">
    <div v-for="product in paginatedProducts" :key="product.id" class="single-card">
      <div class="img-area">
        <img :src="product.image" :alt="product.title">
        <div class="overlay">
          <button @click="addToCart(product)" class="add-to-cart">Add to cart</button>
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
          <button @click="detail(product.id)" class="view-details">View details</button>
          </router-link>
        </div>
      </div>
      <div class="info">
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ trimDescription(product.description) }}</p>
      </div>
  </div>
  </div>

<!--  Paginatie-->
  <div class="pagination">
    <button
        v-for="n in Math.ceil(products.length / itemsPerPage)"
        :key="n"
        :class="['button', { 'button-active': currentPage === n }]"
        @click="setPage(n)">
      {{ n }}
    </button>
  </div>

</template>

<style scoped>
.filters, .pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px 0;
}

.filters .button, .pagination .button {
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

.filters .button:hover, .pagination .button:hover {
  background-color: #c76744;
  color: #F2F2F2;
}

.filters .button-active, .pagination .button-active  {
  background-color: #c76744;
}

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
  padding-bottom: 10px;

}

</style>