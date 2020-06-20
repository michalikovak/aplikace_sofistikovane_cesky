<template>
  <div id="kontejnerTest">
    <Hlavicka2 class="hlavicka2" />
    <div class="sentences" v-for="test in lesson.test" :key="test.result">
      <p class="Qstart">{{ test.questionStart }}</p>
      <!--<p class="option">{{ test.options1 }}</p>-->
      <select class="select" v-model="options1">
        <option v-for="word in randomList(lesson.words)" :key="word.word">{{
          word.word
        }}</option>
      </select>
      <p class="Qend">{{ test.questionEnd }}</p>
    </div>
    <Button class="btnresults" name="Výsledek" />
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";
export default {
  name: "PGtest",
  computed: {
    lesson: function() {
      const id = parseInt(this.$route.params.id, 10);
      return data.find((liska) => liska.lesson === id);
    },
  },
  components: {
    Hlavicka2: Hlavicka2,
    Button: Button,
  },
  methods: {
    randomList: function(list) {
      return list.sort(() => 0.5 - Math.random());
    },
  },
};
</script>

<style scoped>
#kontejnerTest {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Qstart {
  padding-bottom: 0;
  margin-bottom: 0;
}
.option {
}
.Qend {
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.select {
  outline: none;
}
</style>
