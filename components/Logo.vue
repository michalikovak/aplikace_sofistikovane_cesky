<template>
  <div>
    <router-link to="/">
      <img :src="logo" alt="Fox logo" />
    </router-link>
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
img {
  width: 10vh;
}
</style>
