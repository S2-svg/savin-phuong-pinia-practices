<template>
  <div :class="['app', themeStore.darkMode ? 'dark' : 'light']">
    <header class="app-header">
      <h1>Pinia + Vue.js Assignment</h1>
      <button class="btn theme-toggle" @click="themeStore.toggleTheme">
        {{ themeStore.darkMode ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </header>

    <nav class="tab-nav">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.icon }} {{ tab.label }}
      </button>
    </nav>

    <main class="main-content">
      <CounterExercise v-if="activeTab === 'counter'" />
      <UserExercise v-else-if="activeTab === 'user'" />
      <TodoExercise v-else-if="activeTab === 'todo'" />
      <CartExercise v-else-if="activeTab === 'cart'" />
      <ThemeExercise v-else-if="activeTab === 'theme'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useThemeStore } from "./stores/ThemeStore";

const themeStore = useThemeStore();
const activeTab = ref("counter");

const tabs = [
  { id: "counter", icon: "🔢", label: "Counter" },
  { id: "user", icon: "👤", label: "User" },
  { id: "todo", icon: "✅", label: "Todo" },
  { id: "cart", icon: "🛒", label: "Cart" },
  { id: "theme", icon: "🌙", label: "Theme" },
];
</script>
