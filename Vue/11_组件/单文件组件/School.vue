<template>
  <div class="demo">
    <h2>学校名字：{{ name }}</h2>
    <h2>地址： {{ address }}</h2>
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
  }
}
</script>

<style>
.demo {
  background-color: orange;
}
</style>