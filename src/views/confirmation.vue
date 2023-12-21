<script>
import { ref, computed } from 'vue';
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();
    const cart = computed(() => shopStore.cart);

    const totalPriceNoTax = computed(() => {
      return cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    });

    const totalPriceWithTax = computed(() => {
      return cart.value.reduce((acc, item) => acc + (item.price * item.quantity) + (item.price * item.btw * item.quantity), 0).toFixed(2);
    });

    const address = ref('');

    const confirmOrder = () => {
      // Here you can handle the order confirmation logic
      // For example, saving the order details to a server
      alert("Order confirmed with address: " + address.value);
      router.push('/thankyou');
    };

    return {
      cart,
      totalPriceNoTax,
      totalPriceWithTax,
      address,
      confirmOrder
    };
  },
};
</script>

<template>
  <main>
    <div class="confirmation-container">
      <h2>Order Confirmation</h2>
      <div class="order-details">
        <h3>Order Details:</h3>
        <p>Total Price Without Tax: ${{ totalPriceNoTax }}</p>
        <p>Total Price With Tax: ${{ totalPriceWithTax }}</p>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.title }} - Quantity: {{ item.quantity }}
          </li>
        </ul>
      </div>

      <div class="address-form">
        <h3>Enter Shipping Address:</h3>
        <input type="text" v-model="address" placeholder="Shipping Address">
        <button @click="confirmOrder">Confirm Order</button>
      </div>
    </div>
  </main>
</template>




<style scoped>
.confirmation-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.order-details, .address-form {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
