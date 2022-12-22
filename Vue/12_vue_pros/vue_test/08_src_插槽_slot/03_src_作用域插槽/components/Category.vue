<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="games" msg="hello">我是默认的一些内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data(){
    return {
      games: ['CF', '王者荣耀', '吃鸡', '炉石']
    }
  }
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