<template>
  <div>
    <logo />
    <lessonCompleted />
    <!--<p>{{lesson1.contextParagraph}}</p>-->
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
/*import data from "../../src/data.js"*/
export default {
  name: "PGmoreExamples",
  /*data() {
    return {
      lesson1: data[0].contextParagraph
    };
  }*/
  components: {
    logo: Logo,
    lessonCompleted: LessonCompleted,
  },
};
</script>

<style></style>
