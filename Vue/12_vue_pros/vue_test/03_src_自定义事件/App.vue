<template>
  <div id="root">
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过自定义事件实现子组件向父组件传递数据 -->
<!--    <Student v-on:tyler.onece="getStudentName"/>-->
    <Student ref="student"></Student>
    <!-- 使用原生的事件，必须加 .native, 否则Vue 会认为是自定义事件 -->
<!--    <Student @click.native="console.log('Hello')"/>-->
  </div>
</template>

<script>
import School from "@/components/School";
import Student from "@/components/Student";

export default {
  name: "App",
  components: {
    School, Student
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App 收到了学校名称', name)
    },
    getStudentName(name) {
      console.log('getStudentName 函数被调用了', name)
    }
  },
  mounted() {
    // 当 tyler 自定义事件被触发时，绑定getStudentName 回调事件
    this.$refs.student.$on('tyler', this.getStudentName)
    // 必须使用箭头函数改变this 指向
    /*this.$refs.student.$on("tyler", (data) => {
      console.log('getStudentName 函数被调用了', name)
    })*/

    // this.$refs.student.$once('tyler', this.getStudentName)
  }
}
</script>

<style>
#root {
  background-color: #c0a16b;
}
</style>

