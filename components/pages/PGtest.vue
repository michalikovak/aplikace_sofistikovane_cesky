<template>
  <div>
    <Logo class="logo" />
    <lessonCompleted class="lessonCompleted" />
    <div class="sentences" v-for="test in lesson1test">
      <p class="Qstart">{{ test.questionStart }}</p>
      <!--<p class="option">{{ test.options1 }}</p>-->
      <select class="select" v-model="options1"
        ><option class="prvni">asketický</option>
        <option>sofistikovaný</option>
        <option>demagogický</option>
        <option>polemika</option>
        <option>exaktní</option>
        <option>segregace</option>
        <option>empatie</option>
        <option>agilní</option>
        <option>xenofobie</option>
        <option>cynik</option>
      </select>
      <p class="Qend">{{ test.questionEnd }}</p>
    </div>
    <Button class="btnresults" name="Výsledek" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";
export default {
  name: "PGtest",
  data() {
    return {
      lesson1test: data[0].test,
    };
  },
  components: {
    Logo: Logo,
    lessonCompleted: LessonCompleted,
    Button: Button,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerCP {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    position: absolute;
    top: 4vh;
    left: 4vh;
  }
  .lessonCompleted {
    position: relative;
    left: 16vh;
    top: 3.5vh;
  }

  .btnresults {
  }
  .sentences {
    position: relative;
    top: 10vh;
    left: 4vh;
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
  .btnresults {
    position: absolute;
    top: 220vh;
    left: 15vh;
  }

  .select {
    outline: none;
  }
}
</style>
