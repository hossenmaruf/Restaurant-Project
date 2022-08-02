<template>
  <div class="nav">
    <router-link to = "/" > Home </router-link>
    <router-link to="/AddResto"> Add Restaurant </router-link>
    <router-link to="/UpdateResto"> Update Restaurant </router-link>
    <a v-on:click="logOut" href=""> LogOut </a>
  </div>
</template>

<script>
export default {
  name: "HeaderView",

  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.nav {
  background-color: rgb(18, 222, 42);
  overflow: hidden;
}

.nav a {
  float: left;
  color: rgb(71, 12, 234);
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background-color: rgb(199, 233, 29);
  color: rgb(0, 34, 255);
}
</style>
