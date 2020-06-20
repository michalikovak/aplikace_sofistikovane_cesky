<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  background: linear-gradient(#ffffff, #ffd788);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  font-family: "Poppins", sans-serif;
  color: #7e3b1c;
}
body {
  margin: 0 auto;
}

#app {
  min-height: 100vh;
}
</style>
