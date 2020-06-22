<template>
  <div class="containerPGwelcome">
    <Hlavicka />
    <headlineWelcome />
    <BublinaSTextem class="bublinaStextem" />
    <welcomeFox />
  </div>
</template>

<script>
import WelcomeFox from "../WelcomeFox.vue";
import HeadlineWelcome from "../HeadlineWelcome.vue";
import BublinaSTextem from "../BublinaSTextem.vue";
import Hlavicka from "../Hlavicka.vue";

export default {
  name: "PGwelcome",
  components: {
    welcomeFox: WelcomeFox,
    headlineWelcome: HeadlineWelcome,
    BublinaSTextem: BublinaSTextem,
    Hlavicka: Hlavicka,
  },
};
</script>

<style scoped>
.containerPGwelcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containerPGwelcome .hlavicka {
  padding-left: 18px;
}
.menu :hover {
  color: #e26d5c;
}

.bublinaStextem {
  height: 44vh;
  margin-top: 3vh;
}
</style>
