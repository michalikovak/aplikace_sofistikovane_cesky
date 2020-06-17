<template>
  <div id="kontejnerLogIn">
    <Logo />
    <Input type="text" id="usernameLI" placeholder="Uživatelské jméno" />
    <Input type="password" id="passwordLI" placeholder="Heslo" />
    <Button name="Přihlásit se" />
    <Menu />
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
    Input: Input,
    Logo: Logo,
    Menu: Menu,
    Button: Button,
  },
};
</script>

<style>
#kontejnerLogIn {
  display: flex;
  flex-direction: column;
}
</style>
