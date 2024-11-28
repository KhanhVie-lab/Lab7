<template>
  <div class="m-5 col-sm-3">
      <h2>Đăng Nhập</h2>
      <form @submit.prevent="handleLogin">
          <div class="mb-3">
              <label for="username">Tên đăng nhập:</label>
              <input type="text" class="form-control" id="username" v-model="username"
                placeholder="Nhập tên đăng nhập">
              <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
          </div>

          <div class="mb-3">
            <label for="password">Mật khẩu:</label>
            <input type="password" class="form-control" id="password" v-model="password"
                placeholder="Nhập mật khẩu">
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
          </div>

            <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo biến lưu dữ liệu form đăng nhập
const username = ref('');
const password = ref('');
const errors = ref({
  username: '',
  password: '',
});

// Hàm xử lý đăng nhập
const emit = defineEmits(['loggedIn']);
function handleLogin() {
  let hasError = false;

  // Reset lỗi trước khi kiểm tra
  errors.value.username = '';
  errors.value.password = '';

  // Kiểm tra tên đăng nhập
  if (!username.value.trim()) {
    errors.value.username = 'Tên đăng nhập không được để trống.';
    hasError = true;
  }

  // Kiểm tra mật khẩu
  if (!password.value.trim()) {
    errors.value.password = 'Mật khẩu không được để trống.';
    hasError = true;
  }

  // Nếu không có lỗi, phát sự kiện loggedIn
  if (!hasError) {
    emit('loggedIn', username.value);
  }
}
</script>


<style scoped>
/* Container chung */
.m-5 {
  margin: 0 auto; /* Căn giữa theo chiều ngang */
  padding: 20px;
  max-width: 400px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  position: absolute; /* Để căn giữa theo cả hai chiều */
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Tiêu đề */
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Label */
label {
  font-size: 14px;
  color: #555;
}

/* Input fields */
input {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Button */
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Spacing between form groups */
.mb-3 {
  margin-bottom: 15px;
}

/* Thông báo lỗi */
.error-message {
  color: red;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
}

/* Responsive design */
@media (max-width: 480px) {
  .m-5 {
    padding: 15px;
    max-width: 90%;
  }

  button {
    font-size: 14px;
  }

  input {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
