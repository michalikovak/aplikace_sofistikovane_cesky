<template>
  <div>
    <img id="nadpis" :src="nadpis" alt="Headline" />
  </div>
</template>

<script>
import nadpis from "../assets/img/nadpis.png";
export default {
  name: "HeadlineWelcome",
  data() {
    return {
      nadpis,
    };
  },
};
</script>

<style>
#nadpis {
  min-width: 30vw;
}
</style>
