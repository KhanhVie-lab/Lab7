<template>
  <div>
    <!-- Thêm menu điều hướng -->
    <nav>
      
      <router-link to="/bai1">Bài 1</router-link>
      <router-link to="/bai2">Bài 2</router-link>
      <router-link to="/bai3">Bài 3</router-link>
      <router-link to="/bai4">Bài 4</router-link>
    </nav>
    <!-- Hiển thị component tương ứng -->
    <router-view />
  </div>
</template>

<script setup>
// Không cần import Bai1, Vue Router sẽ tự điều hướng
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
nav a:hover {
  text-decoration: underline;
}
</style>
