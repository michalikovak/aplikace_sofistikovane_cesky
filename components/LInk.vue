<template>
  <router-link class="link" :to="to">Lekce {{ name }}</router-link>
</template>

<script>
export default {
  name: "Link",
  props: ["name", "to"],
};
</script>

<style scoped>
.link {
  width: 17vh; /*prepis na pixely i v buttons, mozna udelej 2 komponenty na buttonik - malej a velkej*/
  height: 6vh;
  background: #7e3b1c;
  color: white;
  border-radius: 12px;
  border: 1px solid #7e3b1c;
  margin-top: 20px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
