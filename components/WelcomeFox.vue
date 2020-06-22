<template>
  <div>
    <img id="welcomeFox" :src="welcomefox" alt="Welcome Fox" />
  </div>
</template>

<script>
import welcomefox from "../assets/img/welcomeFox.png";
export default {
  name: "WelcomeFox",
  data() {
    return {
      welcomefox,
    };
  },
};
</script>

<style>
#welcomeFox {
  width: 30vh;
}
</style>
