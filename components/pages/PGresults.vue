<template>
  <div kontejnerResults>
    <Hlavicka2 class="hlavicka2" />
    <resultsFox class="resultsFox" />
    <BublinaSTextem2 class="BublinaSTextem2" />
    <Button class="butonik" name="Menu" />
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import ResultsFox from "../ResultsFox.vue";
import BublinaSTextem2 from "../BublinaSTextem2.vue";
import Button from "../Button.vue";
export default {
  name: "PGresults",
  components: {
    Hlavicka2: Hlavicka2,
    resultsFox: ResultsFox,
    BublinaSTextem2: BublinaSTextem2,
    Button: Button,
  },
};
</script>

<style scoped>
#kontejnerResults {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 36.5%;
}
</style>
