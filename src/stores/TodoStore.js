import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {id: 1, title: 'Learn Vue.js first time', completed: true},
            {id: 2, title: 'Learn Pinia first time', completed: false},
            {id: 3, title: 'Learn practice project with pinia first time', completed: false},
        ],
        nextId: 4,
    }),
    getters: {
        completedTodos: (state) => state.todos.filter(t => t.completed),
        pendingTodos: (state) => state.todos.filter(t => !t.completed),
        totalTodos: (state) => state.todos.length,
    },
    actions: {
        addTodo(title) {
            if (!title.trim()) return
            this.todos.push({ id: this.nextId++, title: title.trim(), completed: false})
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        toggleTodo(id) {
            const todo = this.todos.find(t => t.id === id)
            if (todo) todo.completed = !todo.completed
        },
    },
})