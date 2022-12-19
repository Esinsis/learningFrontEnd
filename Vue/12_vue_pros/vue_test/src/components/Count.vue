<template>
  <div>
    <h1>当前求和为: {{$store.state.sum}}</h1>
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
  data(){
    return {
      n: 1 // 用户选择的数字
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('increment', this.n)
    },
    decrement(){
      this.$store.dispatch('decrement', this.n)
    },
    oddPlus(){
      this.$store.dispatch('oddPlus', this.n)
    },
    delayPlus(){
      this.$store.dispatch('delayPlus', this.n)
    }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>