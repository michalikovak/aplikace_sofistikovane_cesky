<template>
  <div id="kontejnerTest">
    <Hlavicka2 />
    <div class="bilepozadi">
      <div class="sentences" v-for="test in lesson.test" :key="test.result">
        <span class="Qstart">{{ test.questionStart }}</span>
        <span
          ><select class="select" v-model="options1">
            <option v-for="word in randomList(lesson.words)" :key="word.word">{{
              word.word
            }}</option>
          </select></span
        >
        <span class="Qend">{{ test.questionEnd }}</span>
      </div>
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

.bilepozadi {
  border-radius: 10px;
  max-width: 70vw;
  margin-top: 30px 10px;
  background-color: white;
}

.sentences {
  padding: 10px 0;
  font-size: 1.15rem;
}
.select {
  outline: none;
  max-height: 4vh;
  max-width: 30vw;
}
</style>
