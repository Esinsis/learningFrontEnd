<template>
  <div class="container">
    <Category title="美食">
      <!--在父组件中根据name属性指定特定的结构放到哪个slot 中-->
      <img src="./assets/imgs/lufei.jpeg" alt="" slot="center">
      <a href="https://www.baidu.com" slot="footer">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!--使用 v-slot:slot_name 时，必须搭配template 使用-->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">科幻</a>
          <a href="https://www.baidu.com">战争</a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: "App",
  components: {Category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红警', 'CF', '王者荣耀', '吃鸡'],
      films: ['《战狼》', '《红海行动》', '《美人鱼》', '《蜀山传记》']
    }
  }
}
</script>

<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>