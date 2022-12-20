<template>
  <div>
    <h1>当前求和为: {{ $store.state.sum }}</h1>
    <h1>当前的和乘以10为： {{ multiTen }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddPlus">奇数加</button>
    <button @click="delayPlus">延迟加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1 // 用户选择的数字
    }
  },
  methods: {
    // 因为没有什么业务逻辑，可以直接调用mutation的commit 方法
    increment() {
      this.$store.commit('INCREMENT', this.n)
    },
    // 因为没有什么业务逻辑，可以直接调用mutation的commit 方法
    decrement() {
      this.$store.commit('DECREMENT', this.n)
    },
    oddPlus() {
      this.$store.dispatch('oddPlus', this.n)
    },
    delayPlus() {
      this.$store.dispatch('delayPlus', this.n)
    }
  },
  computed: {
    multiTen() {
      return this.$store.getters.multiTen
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>