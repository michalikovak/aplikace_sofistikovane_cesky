<template>
  <div>
    <logo />
    <welcomeFox />
    <textBubble />
    <menu />
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
    logo: Logo,
    welcomeFox: WelcomeFox,
    textBubble: TextBubble,
    menu: Menu,
  },
};
</script>

<style scoped></style>
