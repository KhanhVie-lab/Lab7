<template>
    <div class="container">
      <h2>Bình luận bài viết</h2>
      <div class="card">
        <img src="../assets/img1.jpg" alt="PIC">
        <div class="card-body">
            <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
            <p class="card-text">Canxi là khoáng chất ...</p>
        </div>
      </div>
      <form @submit.prevent="submitComment">
        <div class="mt-3">
          <textarea id="commentText" cols="60" v-model="commentText" 
              placeholder="Nhập bình luận của bạn"></textarea>
        </div>

        <button type="submit" class="btn btn-success">Gửi bình luận</button>
      </form>

      <div v-if="comments.length" class="mt-3">
          <h5>Danh sách các bình luận</h5>
          <ul>
            <li v-for="(comment, index) in comments" :key="index">
                <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
            </li>
          </ul>
      </div>
    </div>
</template>
  
<script setup>
import { ref } from  "vue";
const props = defineProps(['username']);

const commentText = ref('');
// Mảng chứa các bình luận đã gửi
const comments = ref([]);

//Xử lý gửi bình luận
function submitComment(){
  if (commentText.value){
    // Thêm bình luận mới vào mảng comments
    comments.value.push({
        name: props.username,  // sử dụng tên từ props
        text: commentText.value

    });

    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = '';
  }
}
</script>


<style scoped>
/* Thiết kế chung */
div {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

/* Nút */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #0056b3;
}

/* Nút đăng xuất */
.btn-primary {
  margin-bottom: 20px;
}

/* Textarea */
textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
}

/* Danh sách bình luận */
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0;
}

li {
  background-color: #f8f9fa;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
}

li:nth-child(odd) {
  background-color: #e9ecef;
}
</style>

