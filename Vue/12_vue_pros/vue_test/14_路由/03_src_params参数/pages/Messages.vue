<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 需要在router配置中的path 中添加占位符 path: 'detail/:id/:title' -->
<!--         <router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>-->

        <router-link :to="{
              name: 'detail',
              params: {
                id: m.id,
                title: m.title
              }
            }">{{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'}
      ]
    }
  }
}
</script>
