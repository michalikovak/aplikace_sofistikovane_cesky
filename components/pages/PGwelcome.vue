<template>
  <div>
    <Logo />
    <welcomeFox />
    <p>
      Nepoužívej cizí termity, když je neznáš suterénně a nejsi v dobré konvici.
      Je zde veliké rizoto, že to skončí fiatem.
    </p>
    <textBubble />
    <Menu />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import WelcomeFox from "../WelcomeFox.vue";
import TextBubble from "../TextBubble.vue";
import Menu from "../Menu.vue";
export default {
  name: "PGwelcome",
  components: {
    Logo: Logo,
    welcomeFox: WelcomeFox,
    textBubble: TextBubble,
    Menu: Menu,
  },
};
</script>

<style scoped></style>
