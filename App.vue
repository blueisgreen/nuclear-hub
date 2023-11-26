<template>
  <div data-theme="aqua">
    <nav class="ml-4 mt-4">
      TOC: <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/plans">Plans</NuxtLink> |
      <NuxtLink to="/member/">Member Profiles</NuxtLink> |
      <NuxtLink to="/what-say-you">Discussion</NuxtLink> |
      <NuxtLink to="/word-search">Games</NuxtLink>
      <hr />
    </nav>
    <div class="m-8">
      <NuxtPage />
    </div>
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
h1,
h2,
h3,
h4,
h5 {
  color: teal;
}
h1 {
  font-size: 28pt;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid gray;
  border-top: double 3px gray;
}
h2 {
  font-size: 20pt;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
h3 {
  font-size: 16pt;
  font-weight: bold;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
h4 {
  font-size: 14pt;
  font-weight: bold;
}
h5 {
  font-size: 12pt;
  font-weight: bold;
}
p {
  margin-bottom: 0.5rem;
}
a {
  color: navy;
  text-decoration: underline;
}
ul {
  list-style: disc;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
textarea {
  border: 1px solid blue;
  padding: 0.5rem;
}
button {
  padding: 0.25rem;
  border: 1px solid navy;
  color: white;
  background-color: blue;
}
</style>
