<template>
  <div class="exercise-card">
    <h2>Exercise 1 — Counter Store</h2>
    <div class="counter-display">
      <div class="stat-box">
        <span class="label">Count</span>
        <span class="value">{{ counter.count }}</span>
      </div>
      <div class="stat-box accent">
        <span class="label">Double Count</span>
        <span class="value">{{ counter.doubleCount }}</span>
      </div>
    </div>
    <div class="btn-row">
      <button class="btn danger" @click="counter.decrement">− Decrement</button>
      <button class="btn secondary" @click="counter.reset">↺ Reset</button>
      <button class="btn primary" @click="counter.increment">+ Increment</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/CounterStore'
const counter = useCounterStore()
</script>
