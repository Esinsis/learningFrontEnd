<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
    <button @click="unbind">解绑tyler事件</button>
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
  methods: {
    sendStudentName() {
      // 触发student 实例自定义事件tyler
      this.$emit('tyler', this.name)
    },
    unbind(){
      // 解绑一个自定义事件
      this.$off('tyler')
      // 同时解绑多个事件
      // this.$off(['tyler', 'tom'])
      // 解绑所有的自定义事件
      // this.$off()
    }
  },

}
</script>


<style scoped>
.student {
  background-color: darkseagreen;
  padding: 5px;
  margin-top: 10px;
}
</style>