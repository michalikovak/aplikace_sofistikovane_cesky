<template>
  <div>
    <logo />
    <menu />
    <input type="text" id="firstName" placeholder="Jméno" />
    <input type="text" id="secondName" placeholder="Příjmení" />
    <input type="text" id="nickName" placeholder="Přezdívka" />
    <!--nejsme si jiste type = text-->
    <input type="email" id="Email" placeholder="@" required />
    <input type="password" id="Password" placeholder="Heslo" />
    <input type="password" id="PasswordAgain" placeholder="Heslo" />
    <button>Registrace</button>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import Menu from "../Menu.vue";
import Input from "../Input.vue";
import Button from "../Button.vue";
export default {
  name: "PGsignIn",
  components: {
    logo: Logo,
    menu: Menu,
    input: Input,
    button: Button,
  },
};
</script>

<style></style>
