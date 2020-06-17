<template>
  <div id="kontejnerLogIn">
    <logo />
    <input type="text" id="usernameLI" placeholder="Uživatelské jméno" />
    <input type="password" id="passwordLI" placeholder="Heslo" />
  </div>
</template>

<script>
import Input from "../Input.vue";
import Logo from "../Logo.vue";
export default {
  name: "LogIn",
  components: {
    input: Input,
    logo: Logo,
  },
};
</script>

<style>
#kontejnerLogIn {
  display: flex;
  flex-direction: column;
}
</style>
