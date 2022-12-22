<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
        </li>
      </ul>
      <!--使用keep-alive 标签使其组件不被销毁-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>