<script>
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();

    const clearCartAndGoHome = () => {
      shopStore.cart = []; // Clear the cart
      router.push('/'); // Redirect to the home page
    };

    return { clearCartAndGoHome };
  },
};
</script>

<template>
  <main class="thank-you-page">
    <h1>Thank You for Your Order!</h1>
    <p>Your order has been placed successfully.</p>
    <button @click="clearCartAndGoHome">Continue Shopping</button>
  </main>
</template>


<style scoped>
.thank-you-page {
  text-align: center;
  padding: 50px;
}

.thank-you-page h1 {
  margin-bottom: 20px;
}

.thank-you-page button {
  padding: 10px 20px;
  background-color: #5b95d4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.thank-you-page button:hover {
  background-color: #c76744;
}
</style>
