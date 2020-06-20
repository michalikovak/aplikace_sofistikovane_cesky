<template>
  <div id="kontejnerME">
    <Hlavicka2 class="hlavicka2" />
    <div class="divparagraph" v-for="word in lesson.words" :key="word.word">
      <p class="words" v-html="word.word" />
      <p class="meaning" v-html="word.meaning" />
      <p class="context" v-html="word.context" />
    </div>
    <Link
      class="linkButton"
      :to="{ path: `/lesson/${lesson.lesson}/test` }"
      name="Test"
    />
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import data from "../../src/data.js";
import Link from "../Link.vue";

export default {
  name: "PGmoreExamples",
  computed: {
    lesson: function() {
      const id = parseInt(this.$route.params.id, 10);
      return data.find((liska) => liska.lesson === id);
    },
  },
  components: {
    Hlavicka2: Hlavicka2,
    Link: Link,
  },
};
</script>

<style scoped>
#kontejnerME {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.divparagraph {
  width: 47vh;
  margin-top: 20px;
}
.words {
  text-transform: uppercase;
  font-size: 1.25rem;
  color: #e26d5c;
}
.meaning {
  font-weight: 400;
}
</style>
