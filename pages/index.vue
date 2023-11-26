<template>
  <h1>The Nuclear Hub</h1>
  <div class="subtitle">
    a safe place for proponents of the productive application of nuclear energy
  </div>
  <div class="prose">
    Generic platforms try to be all things to all groups. This platform strives
    to serve the people who are fans of nuclear energy. It's also a great place
    for those who are new to the topic to learn more.
  </div>
  <div class="prose">
    Let's explore and learn together all about nuclear energy and the ways it
    can and does benefit the world.
  </div>
  <div class="features">
    <div class="feature">
      <div class="heading">Member Profiles and Directory</div>
      Everyone who joins the Hub gets a free profile. This is used to share
      information about the member. Profiles are used in the Member Directory, a
      searchable source of information about nuclear energy and all known
      projects to promote its use.
      <div class="cta">
        <NuxtLink to="/member">See a sample profile</NuxtLink>
      </div>
      <div class="cta">
        <NuxtLink to="member-directory"
          >Check out the member directory</NuxtLink
        >
      </div>
    </div>
    <div class="feature">
      <div class="heading">Articles</div>
      Original and republished articles by industry leaders and advocates
    </div>
    <div class="feature">
      <div class="heading">Discussion Forum</div>
      Where moderation is friendly toward proponents of nuclear. Structured as
      threaded discussion.
    </div>
    <div class="feature">
      <div class="heading">Zanzibar's World</div>
      A fun place to learn about nuclear power. Lessons, puzzles, simulators,
      creative expression. This is going to be a separate digital property.
      <div class="cta">
        <NuxtLink to="https://zanzisworld.com">The latest website</NuxtLink>
      </div>
      <div class="cta">
        <NuxtLink to="https://zanzisworld.substack.com/"
          >See "the making of..." blog</NuxtLink
        >
        for a behind the scenes look.
      </div>
    </div>
    <div class="feature">
      <div class="heading">What else?</div>
      What would be useful for the pro-nuclear energy crowd?
    </div>
  </div>
  <div>
    <NuxtLink to="/plans">Check out the plans</NuxtLink> for everything we do
    here. This is an open source project - everything may be shared and used
    freely. We will figure out a licensing structure to keep bad things from
    happening.
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  font-size: 24pt;
}
.subtitle {
  font-size: 18pt;
  font-style: italic;
}
.prose {
  margin: 1em 0;
}
.features {
  display: flex;
  flex-wrap: wrap;
}
.feature {
  flex: 300px;
  border: 1px black solid;
  margin: 1rem;
  padding: 1rem;
}
.heading {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.cta {
  margin: 0.5rem 1rem;
}
</style>
