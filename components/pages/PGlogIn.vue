<template>
  <div id="kontejnerLogIn">
    <Logo class="logo" />
    <div class="inputLI">
      <Input
        class="inptName"
        type="text"
        id="usernameLI"
        placeholder="Uživatelské jméno"
      />
      <Input
        class="inptPassword"
        type="password"
        id="passwordLI"
        placeholder="Heslo"
      />
    </div>
    <Button class="buttonLI" name="Přihlásit se" />
    <Menu class="loginmenu" />
    <ul>
      <li class="liregistration">Chci vstoupit bez registrace</li>
    </ul>
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

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerLogIn {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputLI {
    position: absolute;
    top: 30vh;
  }
  .inptName,
  .inptPassword {
    padding: 3vh;
  }
  .buttonLI {
    position: absolute;
    top: 60vh;
  }

  .logo {
    position: absolute;
    top: 4vh;
    left: 4vh;
  }
  .loginmenu {
    position: absolute;
    left: 15vh;
    top: 3vh;
  }
  .loginmenu :hover {
    color: #e26d5c;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  li {
    width: 250px;
    position: absolute;
    top: 48vh;
  }
  .liregistration :hover {
    color: #e26d5c;
  }
}
</style>
