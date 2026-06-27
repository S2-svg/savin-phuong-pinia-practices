<template>
  <div class="exercise-card">
    <h2>Exercise 2 — User Store</h2>
    <div class="user-info">
      <div class="info-row"><span class="info-label">👤 Name</span><span class="info-value">{{ user.name }}</span></div>
      <div class="info-row"><span class="info-label">🎂 Age</span><span class="info-value">{{ user.age }}</span></div>
      <div class="info-row"><span class="info-label">📧 Email</span><span class="info-value">{{ user.email }}</span></div>
    </div>
    <div class="form-section">
      <h3>Update Information</h3>
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" placeholder="Enter name" />
        <button class="btn primary small" @click="user.updateName(form.name)">Update</button>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input v-model="form.age" type="number" placeholder="Enter age" />
        <button class="btn primary small" @click="user.updateAge(form.age)">Update</button>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="form.email" placeholder="Enter email" />
        <button class="btn primary small" @click="user.updateEmail(form.email)">Update</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '../stores/UserStore'
const user = useUserStore()
const form = reactive({ name: '', age: '', email: '' })
</script>
