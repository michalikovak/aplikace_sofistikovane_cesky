<template>
  <div>
    <router-link :to="{ path: '/lessons' }">
      <img id="nadpis" :src="nadpis" alt="Headline"
    /></router-link>
  </div>
</template>

<script>
import nadpis from "../assets/img/nadpis.png";
export default {
  name: "Headline",
  data() {
    return {
      nadpis,
    };
  },
};
</script>

<style>
#nadpis {
  width: 40vh;
}
</style>
