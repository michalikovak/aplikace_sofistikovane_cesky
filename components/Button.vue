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
  border: none;
  margin-top: 20px;
  outline: none;
}

.Signin:hover {
  color: #e26d5c !important;
  background: #ffffff;
  border: 4px solid #e26d5c !important;
  border-radius: 15px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}

@media screen and (max-width: 600px) {
  .Signin {
    min-width: 100px;
  }
}
</style>
