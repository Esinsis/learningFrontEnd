<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "Search",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    getUsers() {
      this.$bus.$emit('updateUserList', {
        initialized: false,
        isLoading: true,
        errorMsg: '',
        users: []
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response => {
            console.log("请求成功", response.data)
            this.$bus.$emit('updateUserList', {
              isLoading: false,
              errorMsg: '',
              users: response.data.items
            })
          },
          error => {
            console.log("请求失败", error.message)
            this.$bus.$emit('updateUserList', {
              isLoading: false,
              errorMsg: error.message,
              users: []
            })
          }
      )
    }
  }
}
</script>

<style scoped>

</style>