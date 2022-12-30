<template>
  <h1> 学生信息： </h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
  <h2>人员信息： </h2>
  <h4>姓名： {{person.name}}</h4>
  <h4>年龄： {{person.age}}</h4>
  <h4>性别： {{person.gender}}</h4>

  <button @click="changeInfo">点击</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    // 直接定义的变量或者常量都是非响应式的
    // let name = 'Tyler'
    // let age = 19

    // 使用ref 包裹的变量在对其修改时，需要使用.value 对其修改
    let name = ref('Tyler')
    let age = ref(19)
    // 如果ref 包裹的是对象，则会调用reactive函数创建一个Proxy 对象返回
    let person = ref({
      name: 'Silver',
      age: 28,
      gender: 'F'
    })

    function changeInfo() {
      name.value = 'Joseph'
      age.value = 20
      person.value.name = 'Susie'
      person.value.age = 21
      person.value.gender = 'F'
    }

    return {
      name,
      age,
      person,
      changeInfo
    }
  },
  components: {}
}
</script>

