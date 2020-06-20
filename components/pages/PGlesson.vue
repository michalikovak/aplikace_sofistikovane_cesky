<template>
  <div id="kontejnerlesson">
    <Hlavicka2 class="hlavicka2" />
    <div id="linksButton">
      <Link
        v-for="lesson in data"
        :to="{ path: `/lesson/${lesson.lesson}` }"
        :key="lesson.lesson"
        :name="lesson.lesson"
      />
    </div>
    <welcomeFox class="welcomeFox" />
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import LessonCompleted from "../LessonCompleted.vue";
import Link from "../Link.vue";
import WelcomeFox from "../WelcomeFox.vue";
import data from "../../src/data";
export default {
  name: "PGlesson",
  data() {
    return {
      data,
    };
  },
  components: {
    Hlavicka2: Hlavicka2,
    Link: Link,
    welcomeFox: WelcomeFox,
  },
};
</script>

<style scoped>
#kontejnerlesson {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#linksButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lesson {
  width: 60vw;
}
</style>
