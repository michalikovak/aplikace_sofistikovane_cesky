<template>
  <div>
    <img :src="logo" alt="Fox logo" />
  </div>
</template>

<script>
import logo from "../assets/img/Logo.png";
export default {
  name: "Logo",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style>
html {
  width: 100vh;
  height: 100vh;
}
img {
  width: 10vh;
}
</style>
