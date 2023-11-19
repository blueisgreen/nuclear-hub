<template>
  <nav>
    TOC: <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/plans">Plans</NuxtLink> |
    <NuxtLink to="/what-say-you">Discussion</NuxtLink> |
    <NuxtLink to="/word-search">Games</NuxtLink>
    <hr />
  </nav>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
route
</script>

<style>
nav {
  margin-bottom: 2rem;
}
</style>
