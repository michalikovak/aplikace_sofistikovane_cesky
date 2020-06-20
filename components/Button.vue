<template>
  <button class="Signin">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["name"],
};
</script>

<style>
.Signin {
  width: 17vh;
  height: 6vh;
  background: #7e3b1c;
  color: white;
  border-radius: 12px;
  border: 1px solid #7e3b1c;
  margin-top: 20px;
  outline: none;
}
</style>
