<template>
  <div id="kontejnerLogIn">
    <Hlavicka />
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
    <ChciVstoupitBezRegistrace class="loginmenu" />
    <Button class="buttonLI" name="Přihlášení" />
  </div>
</template>

<script>
import Hlavicka from "../Hlavicka.vue";
import Input from "../Input.vue";
import Button from "../Button.vue";
import ChciVstoupitBezRegistrace from "../ChciVstoupitBezRegistrace.vue";

export default {
  name: "PGLogIn",
  components: {
    Input: Input,
    Hlavicka: Hlavicka,
    Button: Button,
    ChciVstoupitBezRegistrace: ChciVstoupitBezRegistrace,
  },
};
</script>

<style scoped>
#kontejnerLogIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inptName,
.inptPassword {
  padding: 3vh;
}

.loginmenu :hover {
  color: #e26d5c;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  width: 250px;
  padding: 30px;
}
</style>
