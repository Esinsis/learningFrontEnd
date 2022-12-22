<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 默认插槽, Vue 会默认把父组件中的结果放到该插槽中 -->
    <slot name="center">我是默认值，当使用者没有传递具体结构时， 我会出现</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title']
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>