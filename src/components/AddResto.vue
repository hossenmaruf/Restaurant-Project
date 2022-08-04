<template>
  <Header />

  <h1>hello, welcome to add restaurant page</h1>

  <form class="addResto">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="Address"
      placeholder="Enter address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="Contact"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "AddResto",
  components: { Header },

  data() {
    return {
      restaurant: {
        name: "",
        addres: "",
        contact: "",
      },
    };
  },

  methods: {
    async addRestaurant() {
      console.log(this.restaurant);

      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        addres: this.restaurant.addres,
        contact: this.restaurant.contact,
      });

      if (result.status ==201){
        this.$router.push({name :"Home" })
      }

    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "AddResto" });
    }
  },
};
</script>
