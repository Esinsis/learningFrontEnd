<template>
  <h1> 学生信息： </h1>
  <h2>姓名：{{ student.name }}</h2>
  <h2>年龄: {{ student.age }}</h2>
  <h2>性别: {{ student.gender }}</h2>
  <h2>爱好: {{ student.hobby }}</h2>
  <h2>老师姓名： {{ student.teacher.name }}</h2>
  <h2>老师年龄： {{ student.teacher.age }}</h2>
  <h2>老师性别： {{ student.teacher.gender }}</h2>
  <h2>老师国家： {{ student.teacher.country }}</h2>
  <button @click="changeInfo">修改人员信息</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'App',
  setup() {
    let student = reactive({
      name: 'Silver',
      age: 28,
      gender: 'F',
      hobby: ['抽烟', '喝酒', '烫头'],
      teacher: {
        name: '苍',
        age: 27,
        gender: 'F',
        country: 'Jap'
      }
    })

    function changeInfo() {
      student.name = 'Susie'
      student.age = 21
      student.gender = 'M'
      student.hobby[0] = '撸猫'
      student.teacher.name = '饭岛爱'
      student.teacher.age = 20
      student.teacher.gender = 'M'
      student.teacher.country = 'Jap'
    }

    return {
      student,
      changeInfo
    }
  },
  components: {}
}
</script>

