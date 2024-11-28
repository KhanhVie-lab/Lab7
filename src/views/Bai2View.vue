<template>
    <div class="login-container">
      <!-- Form đăng nhập -->
      <div v-if="!isLoggedIn" class="form-container">
        <h3>Form Đăng nhập</h3>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Nhập email"
              class="form-control"
            />
            <p v-if="emailError" class="error">{{ emailError }}</p>
          </div>
  
          <div class="form-group">
            <label for="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu"
              class="form-control"
            />
            <p v-if="passwordError" class="error">{{ passwordError }}</p>
          </div>
  
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
  
      <!-- Giao diện sau khi đăng nhập -->
      <div v-else>
        <h3>Chào mừng, {{ email }}!</h3>
        <button @click="logout" class="btn btn-danger">Đăng xuất</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Biến trạng thái
  const isLoggedIn = ref(false);
  const email = ref('');
  const password = ref('');
  
  // Biến lỗi
  const emailError = ref('');
  const passwordError = ref('');
  
  // Biểu thức kiểm tra email hợp lệ
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Hàm xử lý đăng nhập
  const login = () => {
    // Reset lỗi
    emailError.value = '';
    passwordError.value = '';
  
    // Kiểm tra email
    if (!email.value) {
      emailError.value = 'Email là bắt buộc.';
    } else if (!emailRegex.test(email.value)) {
      emailError.value = 'Email không hợp lệ.';
    }
  
    // Kiểm tra mật khẩu
    if (!password.value) {
      passwordError.value = 'Mật khẩu là bắt buộc.';
    }
  
    // Nếu không có lỗi, đăng nhập thành công
    if (!emailError.value && !passwordError.value) {
      isLoggedIn.value = true;
    }
  };
  
  // Hàm xử lý đăng xuất
  const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .form-control {
    width: 100%;
    padding: 8px;
  }
  
  .error {
    color: red;
    font-size: 0.85rem;
  }
  
  .btn {
    margin-top: 10px;
  }
  </style>
  