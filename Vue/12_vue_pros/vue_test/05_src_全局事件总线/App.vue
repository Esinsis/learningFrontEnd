<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos"/>
        <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAll="clearAll"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader, TodoFooter, TodoList, TodoItem
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    checkTodo(id) {
      this.todos.forEach((i) => {
        if (i.id === id) i.done = !i.done
      })
    },
    editTodo(arr) {
      let id = arr[0]
      let new_content = arr[1]
      if (!new_content.trim()) return alert('输入不能为空！')
      this.todos.forEach((i) => {
        if (i.id === id) i.content = new_content
      })
    },
    deleteItem(id) {
      this.todos = this.todos.filter(i => i.id !== id)
    },
    checkAllTodo(val) {
      this.todos.forEach((i) => {
        i.done = val
      })
    },
    clearAll() {
      this.todos = this.todos.filter(i => !i.done)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteItem', this.deleteItem)
  },
  beforeDestroy() {
    this.$bus.$off(['checkTodo', 'deleteItem'])
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-normal {
  color: #fff;
  background-color: #0c63e4;
  border: 1px solid #0a53be;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

