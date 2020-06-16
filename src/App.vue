<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <customButton />
    <contextParagraph />
    <cPIntroduction />
    <hamburger />
    <lessonCompleted />
    <lessonFox />
    <logIn />
    <logo />
    <moreExamples />
    <navBar />
    <resultsText />
    <input />
    <testContextSentences />
    <welcomeFox />
    <welcomeText />
    <resultsFox />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import ContextParagraph from "../components/ContextParagraph.vue";
import CPIntroduction from "../components/CPIntroduction.vue";
import Hamburger from "../components/Hamburger.vue";
import LessonCompleted from "../components/LessonCompleted.vue";
import LessonFox from "../components/LessonFox.vue";
import LogIn from "../components/LogIn.vue";
import Logo from "../components/Logo.vue";
import MoreExamples from "../components/MoreExamples.vue";
import NavBar from "../components/NavBar.vue";
import ResultsText from "../components/ResultsText.vue";
import Input from "../components/Input.vue";
import TestContextSentences from "../components/TestContextSentences.vue";
import WelcomeFox from "../components/WelcomeFox.vue";
import WelcomeText from "../components/WelcomeText.vue";
import ResultsFox from "../components/ResultsFox.vue";
export default {
  name: "App",
  components: {
    customButton: Button,
    contextParagraph: ContextParagraph,
    cPIntroduction: CPIntroduction,
    hamburger: Hamburger,
    lessonCompleted: LessonCompleted,
    lessonFox: LessonFox,
    logIn: LogIn,
    logo: Logo,
    moreExamples: MoreExamples,
    navBar: NavBar,
    resultsText: ResultsText,
    input: Input,
    testContextSentences: TestContextSentences,
    welcomeFox: WelcomeFox,
    welcomeText: WelcomeText,
    resultsFox: ResultsFox
  }
};
</script>

<style>
#app {
  background: linear-gradient(#ffffff, #ffd788);
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  font-family: "Poppins", sans-serif;
}
body {
  margin: 0;
}
</style>
