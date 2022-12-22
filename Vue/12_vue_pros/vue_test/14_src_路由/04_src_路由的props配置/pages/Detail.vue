<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  computed: {
    // id(){
    //   return this.$route.params.id
    // },
    // title(){
    //   return this.$route.params.title
    // }
  },
  // // props第一种写法，需要在router定义中传值，且传值一般都为固定值
  props:['id', 'title'],
  mounted() {
    console.log('@@', this.$route)
  }
}
</script>