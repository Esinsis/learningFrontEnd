<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="atguigu">
    <template v-slot:qwe>
      <span>上规格</span>
    </template>
    <template v-slot:asd>
      <span>上规格</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  setup() {
    function showHelloMsg(value){
      alert(`你触发了hello事件，我收到的参数是${value}`)
    }

    return {showHelloMsg}
  },
  components: {Demo}
}
</script>

