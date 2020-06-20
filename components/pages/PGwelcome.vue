<template>
  <div class="stred">
    <div class="containerPGwelcome">
      <Logo class="logo" />
      <headline class="headline" />
      <BublinaSTextem class="bublinaStextem" />
      <div class="menu">
        <Menu class="welcomemenu" />
      </div>
      <welcomeFox class="welcomeFox" />
    </div>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import WelcomeFox from "../WelcomeFox.vue";
import Menu from "../Menu.vue";
import Headline from "../Headline.vue";
import BublinaSTextem from "../BublinaSTextem.vue";

export default {
  name: "PGwelcome",
  components: {
    Logo: Logo,
    welcomeFox: WelcomeFox,
    Menu: Menu,
    headline: Headline,
    BublinaSTextem: BublinaSTextem
  }
};
</script>

<style scoped>
.containerPGwelcome {
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

.headline {
  position: absolute;
  top: 15vh;
  left: 4vh;
  z-index: 1;
}
.welcomeFox {
  position: absolute;
  top: 55vh;
  left: 12.1vh;
}

.bublinaStextem {
  position: absolute;
  left: 3.25vh;
  top: 20vh;
}
.menu {
  position: absolute;
  left: 15vh;
  top: 3vh;
}
.menu :hover {
  color: #e26d5c;
}

@media screen and (min-width: 376px) {
  .containerPGwelcome {
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
  p {
    font-size: 5rem;
    max-width: 230vh;
    flex-shrink: 1;
    overflow: auto;
  }

  .welcomemenu {
    font-size: 3.5rem;
  }
}
</style>
