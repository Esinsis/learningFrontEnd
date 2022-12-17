<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="userInfo.users.length" class="card" v-for="user in userInfo.users" :key="user.login">
      <a target="_blank" :href="user.html_url">
        <img :src="user.avatar_url"  style='width: 100px' alt=""/>
      </a>
      <p class="card-text">{{user.login }}</p>
    </div>
    <h1 v-show="userInfo.initialized">欢迎使用</h1>
    <h1 v-show="userInfo.isLoading">Loading.....</h1>
    <h1 v-show="userInfo.errorMsg">{{userInfo.errorMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      userInfo: {
        initialized: true,
        isLoading: false,
        errorMsg: '',
        users: []
      }
    }
  },
  mounted() {
    this.$bus.$on('updateUserList', (dataObj) => {
      console.log('@', dataObj)
      // 合并两个对象防止属性丢失
      this.userInfo = {...this.userInfo,...dataObj}
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>