<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="single-card">
      <div class="img-area">
        <img src="../assets/Futuristic.jpg" alt="">
        <div class="overlay">
          <button @click="addToCart(product)" class="add-to-cart">Add to cart</button>
          <button class="view-details">View details</button>
        </div>
      </div>
      <div class="info">
        <h3>Futuristic gen 1</h3>
        <p class="price">$159.99</p>
      </div>
    </div>
    <div class="single-card">
      <div class="img-area">
        <img src="../assets/Sakura.jpg" alt="">
        <div class="overlay">
          <button class="add-to-cart">Add to cart</button>
          <button class="view-details">View details</button>
        </div>
      </div>
      <div class="info">
        <h3>Japanese Sakura gen 1</h3>
        <p class="price">$199.99</p>
      </div>
    </div>
    <div class="single-card">
      <div class="img-area">
        <img src="../assets/Greyscale.jpg" alt="">
        <div class="overlay">
          <button class="add-to-cart">Add to cart</button>
          <button class="view-details">View details</button>
        </div>
      </div>
      <div class="info">
        <h3>Greyscale gen 1</h3>
        <p class="price">$139.99</p>
      </div>
    </div>
    <div class="single-card">
      <div class="img-area">
        <img src="../assets/Easter.jpg" alt="">
        <div class="overlay">
          <button class="add-to-cart">Add to cart</button>
          <button class="view-details">View details</button>
        </div>
      </div>
      <div class="info">
        <h3>Easter limited</h3>
        <p class="price">$189.99</p><br>
        <p class="limited">Season out of rotation</p>
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