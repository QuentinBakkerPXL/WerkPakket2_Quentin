<script>
import {useShopStore} from "@/store/shop.js";
import jsonData from "@/assets/products.json";

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  async created() {
    await this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const productId = String(this.id);
        const allProducts = jsonData;

        this.product = allProducts.find(product => String(product.id) === productId);

        if (!this.product) {
          console.error(`Product not found for id: ${productId}`);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      useShopStore().addToCart(product);
      alert("product toegevoegd aan winkelmandje!");

    },


  },
  watch: {},
  beforeRouteUpdate(to, from, next) {
    // Call fetchProductData when the route is updated
    this.fetchProductData().then(next);
  },
};

</script>

<script setup>
</script>

<template>
<!--  <main>-->
<!--    <section id="product-page">-->
<!--      <div class="product-details">-->
<!--        <div class="product-img">-->
<!--          <img :src="product.image" :alt="product.title" />-->
<!--        </div>-->
<!--        <div class="product-text">-->
<!--          <span class="product-category">Gen 1 Watches</span>-->
<!--          <h3>Futuristic gen 1</h3>-->
<!--          <span class="product-price">$159.99</span>-->
<!--          <p>Introducing our Luxury Futuristic Watch – a pinnacle of contemporary design and precision. Crafted with high-grade stainless steel and a sapphire crystal bezel, this timepiece exudes durability and clarity.-->
<!--            <br/>-->
<!--            Its dynamic dial, powered by Swiss automatic movement, showcases a blend of digital and analog elements. Water-resistant and versatile, this watch seamlessly combines innovation and style, ensuring you're always on time and in vogue. Elegance meets the future in this exquisite timepiece.</p>-->
<!--          <div class="product-button">-->
<!--            <a href="#" class="add-cart-btn">Add To Cart</a>-->
<!--            <a href="#" class="checkout-btn">Checkout</a>-->
<!--          </div>-->
<!--          <a href="#" class="help-btn">Need Any Help?</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--  </main>-->
<main>
  <div class="detail-container" v-if="product"><div class="links">
    <img v-if="product.image" :src="`/${product.image}`" alt="Product Image" class="product-image" />
  </div>
    <div class="rechts">
      <h2>{{ product.title }}</h2>
      <p class="creator">Generation: {{ product.Gen }}</p>
      <p class="description">{{ product.description }}</p><br>
      <p class="price">Price: ${{ product.price ? product.price.toFixed(2) : 'N/A' }}</p>
      <p class="price-with-tax">Price with Tax: ${{ product.btw ? product.btw.toFixed(2) : 'N/A' }}</p><br>
      <p class="stock">Stock: {{ product.stock }}</p>
      <button @click="addToCart(product)" class="add-to-cart-button" id="button2">Add to Cart</button>
      <router-link :to="{ name: 'product-list' }" class="back-button">{{ button2 }}</router-link>
    </div>
  </div>
  <div v-else>
    <p>Error: Product not found.</p>
  </div>
</main>
</template>

//<style scoped>

</style>