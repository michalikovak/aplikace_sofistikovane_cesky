<template>
  <div>
    <img :src="logo" alt="Fox logo" />
  </div>
</template>

<script>
import logo from "../assets/Logo.png";

export default {
  name: "Logo",
  name: "App",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style></style>
