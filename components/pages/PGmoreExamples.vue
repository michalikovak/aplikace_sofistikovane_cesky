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
      :name="{ name: 'Test' }"
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
  width: 50vw;
  border-radius: 15px;
  margin: 30px 0 20px 0px;
  max-width: 700px;
  width: 90%;
  padding: 0;
  font-size: 18px;
  background-color: white;
}
.words {
  text-transform: uppercase;
  font-size: 1.25rem;
  color: #7e3b1c;
  margin: 10px;
  font-weight: 700;
  padding: 0;
}
.meaning {
  color: #e26d5c;
  margin: 10px;
  padding: 0;
}

.context {
  margin: 10px;
  padding: 0;
}
.linkButton {
  margin: 40px 0 50px 0;
}
</style>
