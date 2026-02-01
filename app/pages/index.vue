<script setup lang="ts">
const { data } = await useFetch('/api/hello')
const time = useTime()
const config = useRuntimeConfig()
</script>

<template>
  <div class="container">
    <h1>Welcome to Nuxt 4</h1>
    <p>This is the home page.</p>
    
    <div class="card">
      <h2>Environment Config Demo</h2>
      <p><strong>Public API Base:</strong> {{ config.public.apiBase }}</p>
      <p><strong>Server Secret Status:</strong> {{ data?.secretConfigured ? '✅ Configured' : '❌ Missing' }}</p>
      <p><strong>Secret Preview:</strong> {{ data?.secretPreview }}</p>
    </div>

    <div class="card">
      <h2>Server Data</h2>
      <p>Response: {{ data?.message }}</p>
    </div>

    <div class="card">
      <h2>Composable Demo</h2>
      <p>Current Time: {{ time }}</p>
    </div>
    
    <NuxtWelcome />
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #eee;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}
</style>
