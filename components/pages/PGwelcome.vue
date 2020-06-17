<template>
  <div>
    <logo />
    <welcomeFox />
    <textBubble />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import WelcomeFox from "../WelcomeFox.vue";
import TextBubble from "../TextBubble.vue";
export default {
  name: "PGwelcome",
  components: {
    logo: Logo,
    welcomeFox: WelcomeFox,
    textBubble: TextBubble,
  },
};
</script>

<style></style>
