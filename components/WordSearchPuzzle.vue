<template>
  <div>Theme: Nuclear Power Plant</div>
  <div>Words to find: {{ wordList }}</div>
  <div>Grid goes here</div>
  <div class="puzzle-wrapper">
    <div class="puzzle">
      <div class="item">B</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">Y</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">E</div>
    </div>
  </div>
  <div v-for="row in puzzleGrid" class="container">
    <div v-for="cell in row" class="item">{{ cell }}</div>
  </div>
  <div class="calendar">
    <header>
      <h1>November 2017</h1>
    </header>

    <ul class="weekdays">
      <li>
        <abbr title="S">Sunday</abbr>
      </li>
      <li>
        <abbr title="M">Monday</abbr>
      </li>
      <li>
        <abbr title="T">Tuesday</abbr>
      </li>
      <li>
        <abbr title="W">Wednesday</abbr>
      </li>
      <li>
        <abbr title="T">Thursday</abbr>
      </li>
      <li>
        <abbr title="F">Friday</abbr>
      </li>
      <li>
        <abbr title="S">Saturday</abbr>
      </li>
    </ul>

    <ol class="day-grid">
      <li class="month=prev">29</li>
      <li class="month=prev">30</li>
      <li class="month=prev">31</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li class="month-next">1</li>
      <li class="month-next">2</li>
    </ol>
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
header {
  display: flex;
  align-items: center;
  font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  justify-content: center;
  margin-bottom: 2em;
  background: #000;
  color: #fff;
  min-height: 10vh;
  text-align: center;
}

ul,
ol {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
  margin: 0 auto;
  max-width: 64em;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  font-size: calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
}

ul.weekdays {
  margin-bottom: 1em;
}

ul.weekdays li {
  height: 4vw;
}

ol.day-grid li {
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
  height: 12vw;
  max-height: 125px;
}

ul.weekdays abbr[title] {
  border: none;
  font-weight: 800;
  text-decoration: none;
}

ol.day-grid li:nth-child(1),
ol.day-grid li:nth-child(2),
ol.day-grid li:nth-child(3),
ol.day-grid li:nth-child(34),
ol.day-grid li:nth-child(35) {
  background-color: #fff;
}

@media all and (max-width: 800px) {
  ul,
  ol {
    grid-gap: 0.25em;
  }

  ul.weekdays li {
    font-size: 0;
  }

  ul.weekdays > li abbr:after {
    content: attr(title);
    font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
    text-align: center;
  }
}
.puzzle-wrapper {
  max-width: 360px;
}
.puzzle {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
}
.container {
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 30px);
  grid-template-rows: repeat(3, 30px);
  column-gap: 0;
  row-gap: 0;
  align-items: center;
}
</style>
