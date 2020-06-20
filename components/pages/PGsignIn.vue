<template>
  <div id="kontejnersignin">
    <Hlavicka />
    <div class="signininpt">
      <Input class="firstName" type="text" id="firstName" placeholder="Jméno" />
      <Input
        class="secondName"
        type="text"
        id="secondName"
        placeholder="Příjmení"
      />
      <Input
        class="nickName"
        type="text"
        id="nickName"
        placeholder="Přezdívka"
      />
      <!--nejsme si jiste type = text-->
      <Input class="Email" type="email" id="Email" placeholder="@" required />
      <Input
        class="Password"
        type="password"
        id="Password"
        placeholder="Heslo"
      />
      <Input
        class="PasswordAgain"
        type="password"
        id="PasswordAgain"
        placeholder="Heslo"
      />
    </div>
    <Button class="btnsignin" name="Registrace" />
  </div>
</template>

<script>
import Hlavicka from "../Hlavicka.vue";
import Input from "../Input.vue";
import Button from "../Button.vue";
export default {
  name: "PGsignIn",
  components: {
    Hlavicka: Hlavicka,
    Input: Input,
    Button: Button,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnersignin {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    position: absolute;
    top: 4vh;
    left: 4vh;
  }

  .signinmenu {
    position: absolute;
    left: 15vh;
    top: 3vh;
  }
  .signinmenu :hover {
    color: #e26d5c;
  }
  .signininpt {
    padding-top: 20vh;
  }

  .firstName,
  .secondName,
  .nickName,
  .Email,
  .Password,
  .PasswordAgain {
    padding: 3vh;
  }

  .btnsignin {
    padding: 3vh;
  }
}
</style>
