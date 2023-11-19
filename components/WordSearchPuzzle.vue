<template>
  <div>Theme: Nuclear Power Plant</div>

  <div>
    <div class="word-list">{{ wordList }}</div>
    <div class="puzzle">
      <ol v-for="row in puzzleGrid" class="puzzle-grid">
        <li v-for="cell in row">{{ cell }}</li>
      </ol>
    </div>
  </div>
</template>
<script setup>
const words = [
  'boron',
  'fission',
  'flux',
  'fuel rods',
  'neutron',
  'steam',
  'turbine',
  'vessel',
]
const maxRows = 9 // at least size of longest word
const maxCols = 8 // at least size of longest word
const puzzleGrid = [
  ['.', 'T', 'U', 'R', 'B', 'I', 'N', 'E'],
  ['S', 'D', 'O', 'R', 'L', 'E', 'U', 'F'],
  ['L', '.', '.', '.', '.', '.', 'B', 'N'],
  ['E', 'F', 'I', 'S', 'S', 'I', 'O', 'N'],
  ['S', 'L', '.', 'S', '.', 'R', 'R', '.'],
  ['S', 'U', '.', '.', 'T', '.', 'O', '.'],
  ['E', 'X', '.', 'U', '.', 'E', 'N', '.'],
  ['V', '.', 'E', '.', '.', '.', 'A', '.'],
  ['.', 'N', '.', '.', '.', '.', '.', 'M'],
]
const wordList = computed(() => words.join(', '))
</script>
<style lang="css" scoped>
.word-list {
  text-align: center;
}
ol {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 0;
  margin: 0 auto;
  max-width: 16em;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
}
.puzzle {
  margin-top: 2rem;
  padding: 1rem;
  background-color: lightskyblue;
}
ol.puzzle-grid li {
  border: 1px solid gray;
  height: 3vw;
  background-color: white;
}
</style>
