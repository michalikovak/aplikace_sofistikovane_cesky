<template>
  <div class="hlavicka2">
    <Logo />
    <Headline />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Headline from "./Headline.vue";

export default {
  name: "Hlavicka2",
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
  padding-top: 20px;
}
</style>
