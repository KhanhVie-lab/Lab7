<template>
    <div class="register-container">
      <h3>Form Đăng ký</h3>
  
      <!-- Form đăng ký -->
      <form @submit.prevent="register">
        <!-- Họ tên -->
        <div class="form-group">
          <label for="fullname">Họ tên:</label>
          <input
            type="text"
            id="fullname"
            v-model="form.fullname"
            placeholder="Nhập họ tên"
            class="form-control"
          />
        </div>
  
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Nhập email"
            class="form-control"
          />
        </div>
  
        <!-- Mật khẩu -->
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Nhập mật khẩu"
            class="form-control"
          />
        </div>
  
        <!-- Ngày sinh -->
        <div class="form-group">
          <label for="dob">Ngày sinh:</label>
          <input
            type="date"
            id="dob"
            v-model="form.dob"
            class="form-control"
          />
        </div>
  
        <!-- Giới tính -->
        <div class="form-group">
          <label>Giới tính:</label>
          <div>
            <input
              type="radio"
              id="male"
              value="Nam"
              v-model="form.gender"
            />
            <label for="male">Nam</label>
            <input
              type="radio"
              id="female"
              value="Nữ"
              v-model="form.gender"
            />
            <label for="female">Nữ</label>
          </div>
        </div>
  
        <!-- Ngôn ngữ -->
        <div class="form-group">
          <label for="language">Ngôn ngữ:</label>
          <select id="language" v-model="form.language" class="form-control">
            <option value="Tiếng Việt">Tiếng Việt</option>
            <option value="English">English</option>
            <option value="Français">Français</option>
          </select>
        </div>
  
        <!-- Nút đăng ký -->
        <button type="submit" class="btn btn-primary">Đăng ký</button>
      </form>
  
      <!-- Hiển thị thông tin đã đăng ký -->
      <div v-if="registered" class="mt-3">
        <h4>Thông tin đã đăng ký</h4>
        <p><strong>Họ tên:</strong> {{ form.fullname }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ form.dob }}</p>
        <p><strong>Giới tính:</strong> {{ form.gender }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ form.language }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  // Biến trạng thái
  const form = reactive({
    fullname: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    language: 'Tiếng Việt',
  });
  
  const registered = ref(false);
  
  // Hàm xử lý đăng ký
  const register = () => {
    // Đánh dấu người dùng đã đăng ký
    registered.value = true;
  };
  </script>
  
  <style scoped>
  .register-container {
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
  
  .btn {
    margin-top: 10px;
  }
  </style>
  