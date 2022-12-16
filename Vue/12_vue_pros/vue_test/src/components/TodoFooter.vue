<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" :checked="allChecked" @change="checkAll" id="footer"/>
    </label>
    <span>
      <span>{{ doneTotal }}</span> / {{ todos.length }}
      </span>
    <button class="btn btn-danger" @click="clearAllChecked">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todos', 'checkAllTodo', 'clearAll'],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    allChecked: {
      get() {
        return this.doneTotal === this.todos.length && this.todos.length > 0
      },
      // allChecked 被修改时调用
      set(val) {
        this.checkAllTodo(val)
      }
    }
  },
  methods: {
    checkAll(e){
      // 计算属性不能直接修改，只能通过修改用于计算该属性的原始变量来改变
      // this.allChecked = !this.allChecked
      this.checkAllTodo(e.target.checked)
    },
    clearAllChecked(){
      this.clearAll()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>