<script>
import { useRouter } from 'vue-router';

export default {
  // ...existing data, computed, methods...

  setup() {
    const router = useRouter();

    const viewProductDetails = (id) => {
      router.push({ path: `/detail/${id}` });
    };

    return { viewProductDetails };
  }
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import products from '@/assets/products.json';

const route = useRoute();
const product = ref(null);

onMounted(() => {
  // Explicitly extract the 'id' parameter and convert it to a number
  const productIdString = route.params.id;
  const productId = Array.isArray(productIdString) ? parseInt(productIdString[0], 10) : parseInt(productIdString, 10);
  product.value = products.find(p => p.id === productId);
});
</script>

<template>
  <main>
    <section id="product-page">
      <div class="product-details">
        <div class="product-img">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="product-text">
          <span class="product-category">Gen 1 Watches</span>
          <h3>Futuristic gen 1</h3>
          <span class="product-price">$159.99</span>
          <p>Introducing our Luxury Futuristic Watch – a pinnacle of contemporary design and precision. Crafted with high-grade stainless steel and a sapphire crystal bezel, this timepiece exudes durability and clarity.
            <br/>
            Its dynamic dial, powered by Swiss automatic movement, showcases a blend of digital and analog elements. Water-resistant and versatile, this watch seamlessly combines innovation and style, ensuring you're always on time and in vogue. Elegance meets the future in this exquisite timepiece.</p>
          <div class="product-button">
            <a href="#" class="add-cart-btn">Add To Cart</a>
            <a href="#" class="checkout-btn">Checkout</a>
          </div>
          <a href="#" class="help-btn">Need Any Help?</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.product-details {
  max-width: 1200px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
}

.product-details .product-img {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.product-details .product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
}

.product-details .product-text {
  background-color: #ffffff;
  padding: 60px;
  position: relative;
}

.product-details .product-text .product-category {
  color: #adadad; /* $labelcolor */
  font-size: 0.9rem;
}

.product-details .product-text h3 {
  color: #252525;
  font-size: 2.4rem;
  font-weight: 600;
  margin: 10px 0px;
}

.product-details .product-text .product-price {
  font-size: 1.6rem;
  color: #252525;
  font-weight: 500;
}

.product-details .product-text p {
  margin: 30px 0px;
  color: #adadad; /* $labelcolor */
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.product-details .product-text .product-button {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px 0px;
  margin-bottom: 20px;
  grid-gap: 20px;
}

.product-details .product-text .product-button a {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  border-radius: 25px;
}

.product-details .product-text .product-button .add-cart-btn {
  background-color: #212121;
  color: #F2F2F2;
}

.product-details .product-text .product-button .add-cart-btn:hover {
  background-color: #c76744;
  color: #F2F2F2;
}

.product-details .product-text .product-button .checkout-btn {
  background-color: #f1f1f1;
  color: #252525;
}

.product-details .product-text .product-button .checkout-btn:hover {
  background-color: #5b95d4;
  color: #F2F2F2;
}

.product-details .help-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #181818;
  font-size: 0.9rem;
  text-decoration: underline;
  text-transform: lowercase;
}

.product-details .help-btn:hover {
  color: #5b95d4; /* $lightblue */
}

</style>