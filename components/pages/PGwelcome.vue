<template>
  <div class="containerPGwelcome">
    <Logo class="logo" />
    <headline class="headline" />
    <p>
      Nepoužívej cizí termity,<br />
      když je neznáš suterénně<br />
      a nejsi v dobré konvici.<br />
      Je zde velké rizoto,<br />
      že to skončí fiatem.
    </p>
    <textBubble class="textBubble" />
    <div class="menu">
      <Menu class="welcomemenu" />
    </div>
    <welcomeFox class="welcomeFox" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import WelcomeFox from "../WelcomeFox.vue";
import TextBubble from "../TextBubble.vue";
import Menu from "../Menu.vue";
import Headline from "../Headline.vue";
export default {
  name: "PGwelcome",
  components: {
    Logo: Logo,
    welcomeFox: WelcomeFox,
    textBubble: TextBubble,
    Menu: Menu,
    headline: Headline,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .containerPGwelcome {
    position: relative;
  }
  .logo {
    position: absolute;
    top: 4vh;
    left: 4vh;
  }

  .headline {
    position: absolute;
    top: 16vh;
    left: 4vh;
  }
  .welcomeFox {
    position: absolute;
    top: 55vh;
    left: 12.1vh;
  }

  p {
    font-size: 1.3rem;
    max-width: 270px;
    text-align: center;
    position: absolute;
    top: 31vh;
    left: 9vh;
    z-index: 1;
  }

  .textBubble {
    position: absolute;
    left: 3.25vh;
    top: 20vh;
  }
  .welcomemenu {
    position: absolute;
    left: 15vh;
    top: 3vh;
  }
}
</style>
