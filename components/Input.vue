<template>
  <div id="form">
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 37vh;
  height: 4vh;
  display: inline-block;
}
input {
  text-align: center;
  width: 35vh;
  height: 2vh;
  margin: 10px;
  padding: 10px;
}
</style>
