<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <h1>当前的和乘以10为： {{ multiTen }}</h1>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- 使用mapMutations和mapActions 时，必须在组件中传参 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="oddPlus(n)">奇数加</button>
    <button @click="delayPlus(n)">延迟加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1 // 用户选择的数字
    }
  },
  methods: {
    // 因为没有什么业务逻辑，可以直接调用mutation的commit 方法
    // increment() {
    //   this.$store.commit('INCREMENT', this.n)
    // },
    // 因为没有什么业务逻辑，可以直接调用mutation的commit 方法
    // decrement() {
    //   this.$store.commit('DECREMENT', this.n)
    // },

    // oddPlus() {
    //   this.$store.dispatch('oddPlus', this.n)
    // },
    // delayPlus() {
    //   this.$store.dispatch('delayPlus', this.n)
    // }

    // 使用mapMutations和mapActions 时，必须在组件中传参
    ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
    ...mapActions({oddPlus: 'oddPlus', delayPlus: 'delayPlus'})
  },
  computed: {
    // sum(){
    //   return this.$store.state.sum
    // },
    ...mapState(['sum', 'personList']),

    // multiTen() {
    //   return this.$store.getters.multiTen
    // }.

    ...mapGetters(['multiTen'])
  },
  mounted() {
    const x = mapActions({oddPlus: 'oddPlus', delayPlus: 'delayPlus'})
    console.log(x)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>