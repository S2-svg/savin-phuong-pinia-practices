<template>
  <div class="exercise-card theme-card" :class="{ 'dark-preview': theme.darkMode }">
    <h2>Exercise 5 — Theme Store</h2>
    <div class="theme-demo">
      <div class="theme-preview" :class="theme.darkMode ? 'dark-mode' : 'light-mode'">
        <p>This is a preview of <strong>{{ theme.darkMode ? 'Dark' : 'Light' }} Mode</strong></p>
        <p>Background and text colors change based on the Pinia theme store state.</p>
      </div>
      <button class="btn theme-btn" @click="theme.toggleTheme">
        {{ theme.darkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode' }}
      </button>
      <p class="theme-status">Current theme: <strong>{{ theme.darkMode ? 'Dark' : 'Light' }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '../stores/ThemeStore'
const theme = useThemeStore()
</script>
