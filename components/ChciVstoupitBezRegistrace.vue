<template>
  <router-link :to="{ path: '/lessons' }"
    >Chci vstoupit bez registrace</router-link
  >
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
li {
  list-style: none;
  padding: 10px;
}
ul {
  display: flex;
}
</style>
