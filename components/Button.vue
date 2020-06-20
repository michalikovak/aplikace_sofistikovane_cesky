<template>
  <div class="signIn">
    <button id="Signin">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["name"]
};
</script>

<style>
#Signin {
  width: 15vh;
  height: 35px;
  background: #7e3b1c;
  color: white;
  border-radius: 12px;
  border: 1px solid #7e3b1c;
  margin: 20px;
  outline: none;
}
.signIn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
