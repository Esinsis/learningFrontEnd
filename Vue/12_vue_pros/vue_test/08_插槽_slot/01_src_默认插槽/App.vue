<template>
  <div class="container">
    <Category title="美食">
      <img src="./assets/imgs/lufei.jpeg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: "App",
  components: {Category},
  data(){
    return{
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红警', 'CF', '王者荣耀', '吃鸡'],
      films: ['《战狼》', '《红海行动》', '《美人鱼》', '《蜀山传记》']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>