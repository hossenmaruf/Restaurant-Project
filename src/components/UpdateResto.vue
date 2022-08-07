<template>
  <Header />

  <h1>hello, this is update restaurant page</h1>

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
      v-model="restaurant.addres"
    />
    <input
      type="text"
      name="Contact"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="updateRastaurant">
      Update Restaurant
    </button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateResto",
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
    async updateRastaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          addres: this.restaurant.addres,
          contact: this.restaurant.contact,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "UpdateResto" });
    }

    const result = await axios.get(
      "  http://localhost:3000/restaurant/" + this.$route.params.id
    );

    this.restaurant = result.data;
  },
};
</script>
