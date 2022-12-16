<template>
  <div class="demo">
    <h2>学校名字：{{ name }}</h2>
    <h2>地址： {{ address }}</h2>
    <button @click="sendSchoolName">发送学校名称</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '北京大学',
      address: '北京'
    }
  },
  methods: {
    sendSchoolName() {
      // 触发事件总线的自定义事件
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>

<style>
.demo {
  padding: 5px;
  background-color: #0dcaf0;
}
</style>