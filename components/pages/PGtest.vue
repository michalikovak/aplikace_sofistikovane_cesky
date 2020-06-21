<template>
  <div id="kontejnerTest">
    <Hlavicka2 />
    <div class="bilepozadi">
      <div
        class="sentences"
        v-for="(test, i) in lesson.test"
        :key="test.result"
      >
        <span class="Qstart">{{ test.questionStart }}</span>
        <span
          ><select
            :class="{ isWrong: isWrong[i] }"
            class="select"
            v-model="answers[i].value"
          >
            <option v-for="word in randomList(lesson.words)" :key="word.word">{{
              word.word
            }}</option>
          </select></span
        >
        <span class="Qend">{{ test.questionEnd }}</span>
      </div>
    </div>

    <GoodJobFox v-if="showResult" :correct="correct" :count="answers.length" />
    <button class="btnresults" v-if="!showResult" @click="getResult">
      Výsledek
    </button>
    <button class="btnzkustoznova" v-else @click="resetTest">
      Zkus to znova
    </button>
  </div>
</template>

<script>
import GoodJobFox from "../GoodJobFox.vue";
import Hlavicka2 from "../Hlavicka2.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";
export default {
  name: "PGtest",
  data() {
    return {
      lesson: {},
      answers: [],
      showResult: false,
      correct: 0,
      isWrong: [],
    };
  },
  components: {
    Hlavicka2: Hlavicka2,
    Button: Button,
    GoodJobFox: GoodJobFox,
  },
  methods: {
    randomList: function(list) {
      return list.sort(() => 0.5 - Math.random());
    },
    getResult: function() {
      let correct = 0;
      this.isWrong = [];
      this.answers.forEach((answer, i) => {
        this.isWrong[i] = answer.result !== answer.value;
        if (!this.isWrong[i]) {
          correct += 1;
        }
      });
      this.correct = correct;
      this.showResult = true;
    },
    resetTest: function() {
      this.showResult = false;
      const id = parseInt(this.$route.params.id, 10);
      const lesson = data.find((liska) => liska.lesson === id);
      this.answers = lesson.test.map((a) => ({ result: a.result }));
      this.isWrong = [];
      this.lesson = lesson;
    },
  },
  created: function() {
    this.resetTest();
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
  border-radius: 15px;
  max-width: 70vw;
  padding: 30px;
  margin: 30px 0 20px 0;
  background-color: white;
  text-align: left;
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

.btnresults,
.btnzkustoznova {
  width: 17vh;
  height: 6vh;
  background: #7e3b1c;
  color: white;
  border-radius: 12px;
  border: 1px solid #7e3b1c;
  margin: 40px 0 50px 0;
  outline: none;
}
.btnresults:hover,
.btnzkustoznova:hover {
  color: #e26d5c !important;
  background: #ffffff;
  border: 4px solid #e26d5c !important;
  border-radius: 15px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
.isWrong {
  /*box-shadow: 0 0 10px rgba(255, 115, 0, 0.822);*/
  background-color: #e26d5c;
}
</style>
