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
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0 20px 0px;
  max-width: 700px;
  width: 90%;
  font-size: 18px;
  background-color: white;
  text-align: left;
}

.CPtext {
  font-size: 1rem;
  z-index: 1;
}
.linkButton {
  display: flex;
  margin: 40px 0 50px 0;
}

.meaning,
.test {
  margin: 15px 45px;
  width: 12vw;
  height: 6vh;
}

@media screen and (max-width: 600px) {
  .meaning,
  .test {
    min-width: 120px;
    margin: 15px 10px;
  }
}
</style>
