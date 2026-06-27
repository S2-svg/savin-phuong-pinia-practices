<template>
  <div class="exercise-card">
    <h2>Exercise 3 — Todo List Store</h2>
    <div class="todo-stats">
      <div class="stat-chip total">📋 Total: {{ todo.totalTodos }}</div>
      <div class="stat-chip done">✅ Done: {{ todo.completedTodos.length }}</div>
      <div class="stat-chip pending">⏳ Pending: {{ todo.pendingTodos.length }}</div>
    </div>
    <div class="add-todo">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo..." />
      <button class="btn primary" @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="t in todo.todos" :key="t.id" :class="{ completed: t.completed }">
        <input type="checkbox" :checked="t.completed" @change="todo.toggleTodo(t.id)" />
        <span class="todo-title">{{ t.title }}</span>
        <button class="btn danger small" @click="todo.deleteTodo(t.id)">✕</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/TodoStore'
const todo = useTodoStore()
const newTodo = ref('')
function addTodo() {
  todo.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>
