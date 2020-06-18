<template>
  <div class="border">
    <p class="p1">Splněno</p>
    <p class="p2">1/5</p>
  </div>
</template>

<script>
export default {
  name: "LessonCompleted",
};
</script>

<style>
.border {
  border-bottom: 3px solid #7e3b1c;
  display: flex;
  max-width: 240px;
}

.p1 {
  padding-right: 20vh;
  margin-bottom: 0.5vh;
}

.p2 {
  padding-left: 3vh;
  margin-bottom: 0.5vh;
}
</style>
