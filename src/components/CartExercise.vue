<template>
  <div class="exercise-card">
    <h2>Exercise 4 — Shopping Cart Store</h2>
    <div class="shop-layout">
      <div class="products-section">
        <h3>🛍️ Products</h3>
        <div class="product-grid">
          <div v-for="p in cart.products" :key="p.id" class="product-card">
            <span class="product-emoji">{{ p.image }}</span>
            <span class="product-name">{{ p.name }}</span>
            <span class="product-price">${{ p.price }}</span>
            <button class="btn primary small" @click="cart.addToCart(p)">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="cart-section">
        <h3>🛒 Cart</h3>
        <div class="cart-summary">
          <span>Items: <strong>{{ cart.totalItems }}</strong></span>
          <span>Total: <strong>${{ cart.totalPrice }}</strong></span>
        </div>
        <ul v-if="cart.cart.length" class="cart-list">
          <li v-for="item in cart.cart" :key="item.id">
            <span>{{ item.image }} {{ item.name }}</span>
            <span class="qty-badge">x{{ item.qty }}</span>
            <span>${{ item.price * item.qty }}</span>
            <button class="btn danger small" @click="cart.removeFromCart(item.id)">✕</button>
          </li>
        </ul>
        <p v-else class="empty-cart">Cart is empty</p>
        <button v-if="cart.cart.length" class="btn danger" @click="cart.clearCart">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore'
const cart = useCartStore()
</script>
