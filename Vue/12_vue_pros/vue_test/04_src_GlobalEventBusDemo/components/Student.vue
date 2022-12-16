<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: 'Tyler',
      age: 29
    }
  },
  mounted() {
    // 向全局事件总线身上绑定自定义事件
    this.$bus.$on('hello', (data) => {
      console.log("Student 收到了SchoolName", data)
    })
  }
}
</script>

<style scoped>
.student {
  background-color: darkseagreen;
  padding: 5px;
  margin-top: 10px;
}
</style>