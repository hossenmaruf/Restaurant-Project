import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddResto from "./components/AddResto.vue";
import UpdateResto from "./components/UpdateResto.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },

  {
    name: "Login",
    component: Login,
    path: "/Login",
  },

  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },

  {
    name: "AddResto",
    component: AddResto,
    path: "/AddResto",
  },
  {
    name: "UpdateResto",
    component: UpdateResto,
    path: "/UpdateResto",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
