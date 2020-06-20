import Vue from 'vue';
import App from './App.vue';
import './index.html';
import VueRouter from "vue-router";

import PGwelcome from "../components/pages/PGwelcome.vue";
import PGlogIn from "../components/pages/PGlogIn.vue";
import PGsignIn from "../components/pages/PGsignIn.vue";
import PGlesson from "../components/pages/PGlesson.vue";
import PGcontextParagraph from "../components/pages/PGcontextParagraph.vue";
import PGmoreExamples from "../components/pages/PGmoreExamples.vue";
import PGtest from "../components/pages/PGtest.vue";
import PGresults from "../components/pages/PGresults.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: PGwelcome, name: "welcome" },
    { path: "/login", component: PGlogIn, name: "login" },
    { path: "/signin", component: PGsignIn, name: "signin" },
    { path: "/lessons", component: PGlesson, name: "lessons" },
    { path: "/lesson/:id", component: PGcontextParagraph, name: "lesson" },
    { path: "/lesson/:id/context", component: PGcontextParagraph, name: "context" },
    { path: "/lesson/:id/examples", component: PGmoreExamples, name: "examples" },
    { path: "/lesson/:id/test", component: PGtest, name: "test" },
    { path: "/lesson/:id/results", component: PGresults, name: "results" },
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App),
});