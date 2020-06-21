<template>
  <div class="menu">
    <ul>
      <li><router-link :to="{ path: '/login' }">Přihlášení</router-link></li>
      <li><router-link :to="{ path: '/signin' }">Registrace</router-link></li>
    </ul>
  </div>
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
a {
  text-decoration: none;
}
.menu a:hover {
  color: #e26d5c;
}
</style>
