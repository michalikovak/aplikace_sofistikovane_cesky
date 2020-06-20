<template>
  <div id="kontejnerCP">
    <Logo class="logo" />
    <Hlavicka2 class="hlavicka2" />
    <resultsFox class="resultsFox" />
    <BublinaSTextem3 class="BublinaSTextem3" />
    <p class="paragraph" v-html="lesson.contextParagraph"></p>
    <div class="linkButton">
      <Link
        class="meaning"
        :to="{ path: `/lesson/${lesson.lesson}/examples` }"
        name="Vysvětlení"
      />
      <Link
        class="test"
        :to="{ path: `/lesson/${lesson.lesson}/test` }"
        name="Test"
      />
    </div>
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import ResultsFox from "../ResultsFox.vue";
import BublinaSTextem3 from "../BublinaSTextem3.vue";
import data from "../../src/data.js";
import Link from "../Link.vue";

export default {
  name: "PGcontextParagraph",
  computed: {
    lesson: function() {
      const id = parseInt(this.$route.params.id, 10);
      return data.find((liska) => liska.lesson === id);
    },
  },
  components: {
    Hlavicka2: Hlavicka2,
    resultsFox: ResultsFox,
    BublinaSTextem3: BublinaSTextem3,
    Link: Link,
  },
};
</script>

<style scoped>
#kontejnerCP {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paragraph {
  border-radius: 10px;
  padding: 10px;

  max-width: 48vh;
  background-color: white;
}

.CPtext {
  font-size: 1rem;

  z-index: 1;
}

.meaning,
.test {
  padding: 0;
}
</style>
