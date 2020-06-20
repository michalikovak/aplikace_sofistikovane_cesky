<template>
  <div id="kontejnerTest">
    <Logo class="logo" />
    <Hlavicka2 class="hlavicka2" />
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
import Hlavicka2 from "../Hlavicka2.vue";
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
    Hlavicka2: Hlavicka2,
    Button: Button,
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
