<template>
  <div id="app">
    <div>Funguj prosim</div>
    <button>ahoj</button>
    <!--<img src="./assets/img/Logo.png" alt="Fox logo" />
    <img :src="logo" alt="Fox logo" />-->
    <button />
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
    <signIn />
    <testContextSentences />
    <welcomeFox />
    <welcomeText />
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
import SignIn from "../components/SignIn.vue";
import TestContextSentences from "../components/TestContextSentences.vue";
import WelcomeFox from "../components/WelcomeFox.vue";
import WelcomeText from "../components/WelcomeText.vue";
/*import logo from "../assets/Logo.png";*/
export default {
  name: "App",
  /*data() {
    return {
      logo: Logo,
    };
  },*/
  components: {
    button: Button,
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
    signIn: SignIn,
    testContextSentences: TestContextSentences,
    welcomeFox: WelcomeFox,
    welcomeText: WelcomeText,
  },
};
</script>

<style>
* {
  background: linear-gradient(#ffffff, #ffd788);
  width: 100vh;
  height: 100vh;
}

#app button {
  background-color: #7e3b1c;
  color: white;
  border-radius: 6px;
  border: 2px solid #7e3b1c;
}
</style>
