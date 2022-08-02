<template>
  <Header />

  <h1>hello, welcome to add restaurant page </h1>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "AddResto",
  components: { Header },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "AddResto" });
    }
  },
};
</script>
