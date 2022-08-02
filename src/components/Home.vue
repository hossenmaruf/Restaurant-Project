<template>
  <Header />

  <h1>hello {{ name }} , this is home page</h1>

  <table  border="1" >

    <td>ID</td>
    <td>NAME</td>
    <td>ADDRESS</td>
    <td>CONTACT</td>

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
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import Axios from "axios";

export default {
  name: "HomePage",
  components: { Header },
  data() {
    return {
      name: " ",

      restaurant: [],
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");

    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push({ name: "SignUP" });
    }

    let result = await Axios.get("http://localhost:3000/restaurant");

    console.warn(result);

    this.restaurant = result.data;
  },
};
</script>



  <style>
  
    td {
      width: 160px ;
      height: 40px;
    }
  
  
  </style>


