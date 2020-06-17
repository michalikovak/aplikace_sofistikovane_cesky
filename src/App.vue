<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />

    <!--<customButton />
    <contextParagraph />
    <cPIntroduction />
    <hamburger />
    <lessonCompleted />
    <lessonFox />
    <logIn />
    <logo />
    <moreExamples />
    <resultsText />
    <input />
    <testContextSentences />
    <welcomeFox />
    <welcomeText />
    <resultsFox />
    <textBubble />
    <textBubble2 />
    <menu />
    <headline />-->
    <pGwelcome />
    <!--<pGlogIn />
    <pGsignIn />
    <pGlesson />
    <pGcontextParagraph />
    <pGmoreExamples />
    <pGtest />
    <pGresults />-->
  </div>
</template>

<script>
/*import Button from "../components/Button.vue";
import ContextParagraph from "../components/ContextParagraph.vue";
import CPIntroduction from "../components/CPIntroduction.vue";
import Hamburger from "../components/Hamburger.vue";
import LessonCompleted from "../components/LessonCompleted.vue";
import LessonFox from "../components/LessonFox.vue";
import Logo from "../components/Logo.vue";
import MoreExamples from "../components/MoreExamples.vue";
import ResultsText from "../components/ResultsText.vue";
import Input from "../components/Input.vue";
import TestContextSentences from "../components/TestContextSentences.vue";
import WelcomeFox from "../components/WelcomeFox.vue";
import WelcomeText from "../components/WelcomeText.vue";
import ResultsFox from "../components/ResultsFox.vue";
import TextBubble from "../components/TextBubble.vue";
import TextBubble2 from "../components/TextBubble2.vue";
import Menu from "../components/Menu.vue";
import Headline from "../components/Headline.vue";*/
import PGwelcome from "../components/pages/PGwelcome.vue";
/*import PGlogIn from "../components/pages/PGlogIn.vue";
import PGsignIn from "../components/pages/PGsignIn.vue";
import PGlesson from "../components/pages/PGlesson.vue";
import PGcontextParagraph from "../components/pages/PGcontextParagraph.vue";
import PGmoreExamples from "../components/pages/PGmoreExamples.vue";
import PGtest from "../components/pages/PGtest.vue";
import PGresults from "../components/pages/PGresults.vue";*/

export default {
  name: "App",
  components: {
    /*customButton: Button,
    contextParagraph: ContextParagraph,
    cPIntroduction: CPIntroduction,
    hamburger: Hamburger,
    lessonCompleted: LessonCompleted,
    lessonFox: LessonFox,
    logIn: LogIn,
    logo: Logo,
    moreExamples: MoreExamples,
    
    resultsText: ResultsText,
    input: Input,
    testContextSentences: TestContextSentences,
    welcomeFox: WelcomeFox,
    welcomeText: WelcomeText,
    resultsFox: ResultsFox,
    textBubble: TextBubble,
    textBubble2: TextBubble2,
    menu: Menu,
    headline: Headline,*/
    pGwelcome: PGwelcome,
    /*pGlogIn: PGlogIn,
    pGsignIn: PGsignIn,
    pGlesson: PGlesson,
    pGcontextParagraph: PGcontextParagraph,
    pGmoreExamples: PGmoreExamples,
    pGtest: PGtest,
    pGresults: PGresults,*/
  },
};
</script>

<style>
html {
  background: linear-gradient(#ffffff, #ffd788);
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  font-family: "Poppins", sans-serif;
  color: #7e3b1c;
}
body {
  margin: 0;
}
</style>
