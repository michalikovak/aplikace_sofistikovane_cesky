<template>
  <div id="kontejnerLogIn">
    <logo />
    <input type="text" id="usernameLI" placeholder="Uživatelské jméno" />
    <input type="password" id="passwordLI" placeholder="Heslo" />
    <button>Přihlásit se</button>
    <menu />
  </div>
</template>

<script>
import Input from "../Input.vue";
import Logo from "../Logo.vue";
import Menu from "../Menu.vue";
import Button from "../Button.vue";
export default {
  name: "LogIn",
  components: {
    input: Input,
    logo: Logo,
    menu: Menu,
    button: Button,
  },
};
</script>

<style>
#kontejnerLogIn {
  display: flex;
  flex-direction: column;
}
</style>
