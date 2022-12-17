<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
      <span v-show="!todoObj.isEdit">{{ todoObj.content }}</span>
      <input
          type="text"
          ref="inputRef"
          v-show="todoObj.isEdit"
          :value="todoObj.content"
          @blur="handleBlur(todoObj, $event)"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button class="btn btn-normal"
            v-show="!todoObj.isEdit"
            @click="handleEdit(todoObj)">
      编辑
    </button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ['todoObj'],
  methods: {
    handleCheck(id) {
      PubSub.publish('checkTodo', id)
    },
    handleDelete(id) {
      PubSub.publish('deleteItem', id)
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      // 在下一次DOM更新结束后执行其指定的回调
      this.$nextTick(function () {
        this.$refs.inputRef.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      console.log(e.target.value)
      PubSub.publish('editItem', [todo.id, e.target.value])
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}
</style>