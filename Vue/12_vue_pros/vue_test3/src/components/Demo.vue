<template>
  <h1>一个人的信息</h1>
  姓： <input type="text" v-model="person.firstName"> <br>
  名： <input type="text" v-model="person.lastName"> <br>
  <span>全名： {{ person.fullName }}</span>
  <br>
  全名： <input type="text" v-model="person.fullName">
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "Demo",
  setup(props, context) {

    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    /*
      计算属性_简写 (不考虑计算属性被修改的情况)
     */
    // person.fullName = computed(() => {
    //     return person.firstName + "_" + person.lastName
    // })

    //计算属性——完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + "_" + person.lastName
      },

      set(value) {
        const nameArr = value.split('_')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {person}
  }
}
</script>