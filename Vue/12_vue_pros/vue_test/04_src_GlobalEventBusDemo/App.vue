<template>
  <div id="root">
    <h1>{{ msg }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from "@/components/School";
import Student from "@/components/Student";
import Vue from "vue";

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
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线，$bus 就是当前应用的vm
  }
}
</script>

<style>
#root {
  background-color: #c0a16b;
}
</style>

