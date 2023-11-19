<template>
  <h1>The Nuclear Energy Exchange</h1>
  <h1>Discussion Forum</h1>
  <p>
    Let's talk about anything related to the productive use of nuclear energy.
  </p>
  <p>
    Trying out a new approach to discussions that encourages longer, more
    thoughtful answers, and makes it easy to see a range of ideas and opinions.
    For any given big of writing, the reader can respond with his or her own
    ideas. That might inspire others to continue in kind.
  </p>
  <p>
    No ads. No clutter. Let people focus on reading, thinking, and replying.
  </p>
  <p>Below is an early prototype to demonstrate the idea.</p>
  <div class="lead-in">Justin said:</div>
  <div class="post">
    <div>
      Nuclear power is the best. But I am not sure I want it in my back yard.
      Can you give me any reasons why I would?
    </div>
  </div>
  <div>
    <ul>
      <li>
        <NuxtLink to="#see-response">Joe responded</NuxtLink> - Safety is the
        biggest reason...
      </li>
      <li>
        <NuxtLink to="#see-response">Barbara responded</NuxtLink> - Think about
        the jobs that nuclear...
      </li>
      <li>
        <NuxtLink to="#see-response">Sai responded</NuxtLink> - When it comes to
        the environment, there is no better habitat...
      </li>
    </ul>
  </div>
  <div>
    <div class="lead-in">What say you?</div>
    <form>
      <textarea rows="5" />
      <div>
        <button>Submit your response</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.lead-in {
  font-size: 18pt;
  font-weight: bold;
  margin: 1rem;
}
.post {
  border: 1px black solid;
  margin: 1rem;
  padding: 1rem;
  max-width: 500px;
}
form {
  margin: 1rem;
}
textarea {
  width: 400px;
  padding: 1rem;
  max-width: 500px;
}
</style>
