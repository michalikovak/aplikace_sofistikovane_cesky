<template>
  <div>
    <img id="nadpis" :src="nadpis" alt="Headline" />
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
  width: 50vh;
}
</style>
