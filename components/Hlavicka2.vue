<template>
  <div class="hlavicka2">
    <Logo class="logo" />
    <Headline class="headline2" />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Headline from "./Headline.vue";

export default {
  name: "PGwelcome",
  components: {
    Logo: Logo,
    Headline: Headline,
  },
};
</script>

<style scoped>
.hlavicka2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  max-width: 700px;
  width: 90%;
}
.headline2 {
}
</style>
