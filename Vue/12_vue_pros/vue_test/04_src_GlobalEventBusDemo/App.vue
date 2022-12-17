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
  }
}
</script>

<style>
#root {
  background-color: #c0a16b;
}
</style>

