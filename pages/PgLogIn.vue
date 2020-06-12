<template>
  <div id="kontejnerLogIn">
    <login />
  </div>
</template>

<script>
import LogIn from "../components/LogIn.vue";

export default {
  name: "LogIn",
  components: {
    logIn: LogIn,
  },
};
</script>

<style>
#kontejnerLogIn {
  display: flex;
  flex-direction: column;
}
</style>
