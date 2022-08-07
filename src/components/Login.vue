<template>
  <img class="logo" src="../assets/resto.png" />

  <h1>Login</h1>

  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />

    <button v-on:click="login">Login</button>

    <p>
      <router-link to="/SignUp"  >SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `https://kaleidoscopic-frangipane-8b34f6.netlify.app/users?email=${this.email}&password = ${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }

    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>


<style>

  .login button{
      width: 160px;
  height: 40px;
  border: 1px skyblue;
  background-color: black;
  color: aliceblue;
  cursor: pointer;
  }

</style>
