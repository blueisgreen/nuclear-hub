<template>
  <div>Theme: Nuclear Power Plant</div>
  <div>Words to find: {{ wordList }}</div>
  <div>Grid goes here</div>
  <div>
    <ol class="puzzle-grid">
      <li>B</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>O</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>O</li>
    </ol>
  </div>
  <div v-for="row in puzzleGrid" class="container">
    <div v-for="cell in row" class="item">{{ cell }}</div>
  </div>
</template>
<script setup>
const words = [
  'fission',
  'pressurized water',
  'boiling water',
  'neutron flux',
  'chain reaction',
  'steam turbine',
  'generator',
]
const maxRows = 3 // at least size of longest word
const maxCols = 3 // at least size of longest word
const puzzleGrid = []
for (let row = 0; row < maxRows; row++) {
  puzzleGrid.push([])
  for (let col = 0; col < maxCols; col++) {
    puzzleGrid[row].push('.')
  }
}
const wordList = computed(() => words.join(', '))
</script>
<style lang="css" scoped>
ol {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  margin: 0 auto;
  max-width: 6em;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
}
ol.puzzle-grid li {
  border: 1px solid gray;
  height: 3vw;
}

ol.puzzle-grid li:nth-child(1),
ol.puzzle-grid li:nth-child(5),
ol.puzzle-grid li:nth-child(9) {
  background-color: yellow;
}
</style>
