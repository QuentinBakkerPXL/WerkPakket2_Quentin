<script setup>
import { ref, onMounted } from 'vue';
import router from "@/router";

const username = ref('');
const password = ref('');
const loginError = ref(false);

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');

const handleLogin = (e) => {
  e.preventDefault();
  if (username.value === 'robin' && password.value === 'test123') {
    localStorage.setItem('isLoggedIn', 'true');
    const postLoginAction = sessionStorage.getItem('postLoginAction');
    if (postLoginAction === 'Confirmation') {
      router.push('/Confirmation');
      sessionStorage.removeItem('postLoginAction');
    } else {
      router.push('/');
    }
  } else {
    loginError.value = true;
  }
};

const handleLogout = () => {
  localStorage.setItem('isLoggedIn', 'false');
  isLoggedIn.value = false;
};

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
});
</script>

<template>
  <main>
    <div class="center">
      <h1 v-if="!isLoggedIn">Login</h1>
      <h1 v-else>You are logged in!</h1>

      <form v-if="!isLoggedIn" @submit="handleLogin">
        <div class="txt_field">
          <input type="text" v-model="username" required>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="password" required>
          <span></span>
          <label>Password</label>
        </div>
        <p v-if="loginError">Invalid username or password!</p>
        <input type="submit" value="Login">
        <div class="signup_link">
          Don't have an account yet? <a href="#">Signup</a>
        </div>
      </form>
      <div class="bottombutton">
      <button v-if="isLoggedIn" @click="handleLogout" class="logout-button">Logout</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
}

.center h1 {
  text-align: center;
  padding: 20px 0;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

.center form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.center form .txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.center form .txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.center form .txt_field span::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0;
  height: 2px;
  background: #5b95d4;
  transition: 0.5s;
}

.center form .txt_field input:focus ~ label,
.center form .txt_field input:valid ~ label {
  top: -5px;
  color: #5b95d4;
}

.center form .txt_field input:focus ~ span::before,
.center form .txt_field input:valid ~ span::before {
  width: 100%;
}


.center input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #5b95d4;
  border-radius: 25px;
  font-size: 18px;
  color: #F2F2F2;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}

.center input[type="submit"]:hover {
  background: #c76744;
}

.center .signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}

.center .signup_link a {
  color: #2691d9;
  text-decoration: #5b95d4;
}

.center .signup_link a:hover {
  text-decoration: underline;
}

.bottombutton {
  text-align: center;
}

.logout-button {
  width: 50%;
  height: 45px;
  background-color: #5b95d4;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
}

.logout-button:hover {
  background-color: #c76744;
}

</style>