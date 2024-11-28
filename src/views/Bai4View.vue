<template>
  <div class="text-center">

    <!-- Hiển thị form đăng nhập -->
    <LoginComponent v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

    <!-- Hiển thị phần bình luận -->
    <div v-else>
      <h2 style="color: green;">Chào mừng, {{ loggedInUser }}!</h2>
      <button @click="handleLogout" class="btn btn-primary mb-3">Đăng xuất</button>
      <CommentComponent :username="loggedInUser" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from '@/components/LoginComponent.vue';
import CommentComponent from '@/components/CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi người dùng đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username; // Lưu tên người dùng
  isLoggedIn.value = true; // Cập nhật trạng thái đăng nhập
}

// Xử lý khi người dùng đăng xuất
function handleLogout() {
  isLoggedIn.value = false; // Đặt trạng thái về chưa đăng nhập
  loggedInUser.value = ''; // Xóa tên người dùng
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
