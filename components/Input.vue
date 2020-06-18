<template>
  <div id="form">
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["type", "id", "placeholder", "required"],
};
</script>

<style>
#form {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4vh;
}
input {
  text-align: center;
  width: 40vh;
  height: 6vh;
  margin: 10px;
  padding: 0px;
  border: 3px solid #7e3b1c;
}

input:focus {
  outline: none;
  border-color: #e26d5c;
}
</style>
