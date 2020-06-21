<template>
  <router-link class="loginmenu" :to="{ path: '/lessons' }"
    >Chci vstoupit bez registrace</router-link
  >
</template>

<script>
export default {
  name: "ChciVstoupitBezRegistrace",
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 10px;
}
ul {
  display: flex;
}
.loginmenu:hover {
  color: #e26d5c;
}
</style>
