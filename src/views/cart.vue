<script>
import { computed } from 'vue';
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();
    const cart = computed(() => shopStore.cart);

    const removeFromCart = (productId) => {
      shopStore.removeItemFromCart(productId);
    };

    const incrementQuantity = (productId) => {
      shopStore.incrementItemQuantity(productId);
    };

    const decrementQuantity = (productId) => {
      shopStore.decrementItemQuantity(productId);
    };

    const checkout = () => {
      if (!shopStore.isLoggedIn) {
        // If not logged in, redirect to the login page
        router.push('/login');
      } else {
        // If logged in, proceed with the checkout logic
        router.push('/Checkout');
      }
    };

    return {
      cart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      checkout,
      "titel": "Uw winkelmandje:",
      "NoBTW": "Prijs zonder btw: ",
      "totaalprijs": "Prijs met btw: ",
      "hoeveelheid": "Hoeveelheid: ",
      "plus": "+",
      "min": "-",
      "button1": "Verwijder",
      "button2": "Checkout"

    };
  },
};

</script>

<template>
  <div class="cart-container">
    <h2>{{ titel }}</h2>
    <ul class="cart-items">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-info">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <p>{{ item.name }}</p>
            <br />
            <p>{{ item.description }}</p>
            <br />
            <p>{{ NoBTW }} {{ item.price }}€</p>
            <br />
            <p>{{ totaalprijs }} {{ item.btw }}€</p>
            <br />
            <p class="item-quantity">{{hoeveelheid}} {{ item.quantity }}</p>

            <div class="quantity-buttons">
              <button @click="incrementQuantity(item.id)">{{plus}}</button>
              <button @click="decrementQuantity(item.id)">{{min}}</button>
            </div>
            <br />
            <button @click="removeFromCart(item.id)">{{button1}}</button>
          </div>
        </div>
      </li>
    </ul>

    <button v-if="cart.length > 0" @click="checkout" class="checkout-button">{{button2}}</button>
  </div>
</template>

<style scoped>

</style>