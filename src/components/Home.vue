<template>
  <Header />

  <h1>hello {{ name }} , this is home page</h1>

  <table border="1">
    <td>ID</td>
    <td>NAME</td>
    <td>ADDRESS</td>
    <td>CONTACT</td>
    <td>Actions</td>

    <tr v-for="item in restaurant" :key="item.id">
      <td>
        {{ item.id }}
      </td>
      <td>
        {{ item.name }}
      </td>
      <td>
        {{ item.addres }}
      </td>
      <td>
        {{ item.contact }}
      </td>

      <td>
        <router-link :to="'/UpdateResto/' + item.id"> Update </router-link>

        <button v-on:click="deletedData(item.id)">Deleted</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import Axios from "axios";

export default {
  name: "HomePage",

  data() {
    return {
      name: " ",

      restaurant: [],
    };
  },

  components: { Header },

  methods: {
    async deletedData(id) {
      let result = await Axios.delete("https://kaleidoscopic-frangipane-8b34f6.netlify.app/" + id);

      if (result.status == 200) {
        this.loadData();
      }
    },

    async loadData() {
      let user = localStorage.getItem("user-info");

      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ name: "SignUP" });
      }

      let result = await Axios.get("https://kaleidoscopic-frangipane-8b34f6.netlify.app/");

      this.restaurant = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
