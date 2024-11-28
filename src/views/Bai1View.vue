<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1> <br>
  
      <!-- Form thêm công việc -->
       <h5>Thêm công việc:</h5>
      <form @submit.prevent="addTask">
        <input
          type="text"
          v-model="newTask"
          placeholder="Nhập tên công việc"
          class="form-control mb-2"
        />
        <button type="submit" class="btn btn-primary">Thêm công việc</button>
      </form>
  
      <!-- Danh sách công việc -->
      <ul class="list-group mt-3">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ task }}
          <button
            class="btn btn-danger btn-sm"
            @click="removeTask(index)"
          >
            Xóa
          </button>
        </li>
      </ul>
    </div>
  </template>


<script setup>
import { ref } from 'vue';

// Biến lưu trữ danh sách công việc và công việc mới
const tasks = ref([]);
const newTask = ref('');

// Hàm thêm công việc
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = ''; // Xóa nội dung trong ô input
  }
};

// Hàm xóa công việc
const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>


<style scoped>
.task-manager {
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}

.form-control {
  width: 100%;
}

.list-group {
  margin-top: 15px;
}

.btn-sm {
  font-size: 0.8rem;
}
</style>
