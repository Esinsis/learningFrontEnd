<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
import {mapState} from "vuex";
export default {
  name: "Person",
  data(){
    return{
      name: ''
    }
  },
  methods: {
    add(){
      this.$store.commit('ADD_PERSON', {id: nanoid(), name: this.name})
      this.name = ''
    }
  },
  computed: {
    // personList (){
    //   return this.$store.state.personList
    // },
    ...mapState(['personList', 'sum'])
  }
}
</script>

<style scoped>

</style>