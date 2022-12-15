<template>
  <ul class="todo-main">
    <TodoItem v-for="td in todos" :key="td.id" :todoObj="td" :checkTodo="checkTodo" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: ['todos', 'checkTodo', 'deleteItem']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>