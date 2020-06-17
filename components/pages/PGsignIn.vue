<template>
  <div>
    <Logo />
    <Menu />
    <Input type="text" id="firstName" placeholder="Jméno" />
    <I type="text" id="secondName" placeholder="Příjmení" />
    <I type="text" id="nickName" placeholder="Přezdívka" />
    <!--nejsme si jiste type = text-->
    <Input type="email" id="Email" placeholder="@" required />
    <I type="password" id="Password" placeholder="Heslo" />
    <Input type="password" id="PasswordAgain" placeholder="Heslo" />
    <B name="Registrace" />
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
    Logo: Logo,
    Menu: Menu,
    Input: Input,
    Button: Button,
  },
};
</script>

<style></style>
