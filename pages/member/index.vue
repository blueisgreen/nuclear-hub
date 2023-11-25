<template>
  <div class="profile-card">
    <div class="row2col">
      <div class="col">
        <div class="row factoid">
          <div class="col label">Name</div>
          <div class="col">Zanzibar</div>
        </div>
        <div class="row factoid">
          <div class="col label">Website</div>
          <div class="col">https://zanziworld.com</div>
        </div>
        <div class="row factoid">
          <div class="col label">Email</div>
          <div class="col">zanzisworld42@gmail.com</div>
        </div>
      </div>
      <div class="col right-side">
        <img
          src="/images/avatars/Zanzibar.svg"
          width="150px"
          alt="Your avatar here"
          class="avatar"
        />
      </div>
    </div>
    <div class="row factoid">
      <div class="col label">Bio</div>
      <div>
        Zanzibar is an advocate of the civilized use of nuclear energy. He uses
        facts and a positive outlook to explain how nuclear energy works and to
        disspell myths that undermine the truth, that nuclear energy is the best
        source of energy in the universe. Zanzibar always takes the high road in
        a debate.
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.profile-card {
  max-width: 50%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  background-color: whitesmoke;
}
.factoid {
  margin-bottom: 0.75rem;
}
.row2col {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.label {
  font-weight: bold;
}
.avatar {
  border: 1px solid skyblue;
}
</style>
