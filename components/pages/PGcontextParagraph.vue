<template>
  <div id="kontejnerCP">
    <Hlavicka2 class="hlavicka2" />
    <CPTalkingFox />
    <p class="paragraph" v-html="lesson.contextParagraph"></p>
    <div class="linkButton">
      <Link
        class="meaning"
        :to="{ path: `/lesson/${lesson.lesson}/examples` }"
        :name="{ name: 'Vysvětlení' }"
      />
      <Link
        class="test"
        :to="{ path: `/lesson/${lesson.lesson}/test` }"
        :name="{ name: 'Test' }"
      />
    </div>
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import CPTalkingFox from "../CPTalkingFox.vue";
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
    CPTalkingFox: CPTalkingFox,
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
  margin-top: 50px;
  max-width: 700px;
  width: 90%;
  font-size: 18px;
  background-color: white;
}

.CPtext {
  font-size: 1rem;
  z-index: 1;
}
.linkButton {
  display: flex;
}

.meaning,
.test {
  padding: 0;
  margin: 15px 45px;
}
</style>
