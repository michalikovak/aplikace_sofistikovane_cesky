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
  width: 12vw;
  height: 6vh;
  background: #7e3b1c;
  color: white;
  border-radius: 12px;
  border: 4px solid #7e3b1c;
  margin-top: 20px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.Signin:hover {
  color: #e26d5c !important;
  background: #ffffff;
  border: 4px solid #e26d5c !important;
  border-radius: 15px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  .Signin {
    min-width: 120px;
    font-size: 14px;
  }
}
</style>
